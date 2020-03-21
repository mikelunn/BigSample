using Autofac;
using Autofac.Features.Variance;
using BigSample.Core.Service.Query;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace BigSample.WebApi
{
    public class MediatorModule : Autofac.Module
    {
        private readonly System.Reflection.Assembly[] _assembliesToScan;

        public MediatorModule(params System.Reflection.Assembly[] assembliesToScan)
            : base()
        {
            _assembliesToScan = assembliesToScan;
        }

        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterSource(new ContravariantRegistrationSource());
            builder.RegisterAssemblyTypes(typeof(IMediator).Assembly).AsImplementedInterfaces();

            // Register our Procedures
            //builder.RegisterAssemblyTypes(_assembliesToScan)
            //    .Where(t => t.GetInterfaces().Any(i => i == typeof(IProcedure)))
            //    .AsSelf()
            //    .InstancePerDependency();

            //// Register our PreRequestHandler
            //builder.RegisterAssemblyTypes(_assembliesToScan)
            //    .AsClosedTypesOf(typeof(IPreRequestHandler<>))
            //    .SingleInstance();

            //builder.RegisterAssemblyTypes(_assembliesToScan)
            //    .AsClosedTypesOf(typeof(IAsyncPreRequestHandler<>))
            //    .SingleInstance();

            // Registers all of our commands and queries that have the IDatabaseService marker
            // If we want to make services that perhaps talk to external API's without any DB interactions, then we would leave out the DbContextScopeBoundary
            //builder.ScanRegisterAndDecorate(
            //    _assembliesToScan,
            //    typeof(IDatabaseService),
            //    typeof(IAsyncRequestHandler<,>),
            //    typeof(AsyncMediatorPipeline<,>),
            //    typeof(AsyncDbContextScopeBoundary<,>),
            //    typeof(AsyncValidatorHandler<,>),
            //    typeof(ExceptionLoggerAsync<,>),
            //    typeof(AsyncLoggingHandler<,>)
            //    );

            //builder.ScanRegisterAndDecorate(
            //    _assembliesToScan,
            //    typeof(IDatabaseService),
            //    typeof(IRequestHandler<,>),
            //    typeof(MediatorPipeline<,>),
            //    typeof(DbContextScopeBoundary<,>),
            //    typeof(ValidatorHandler<,>),
            //    typeof(ExceptionLogger<,>),
            //    typeof(LoggingHandler<,>)
            //    );

            // Special registration of our Automapper Handler
            //builder.RegisterGeneric(typeof(AutoMapperQuery<,>)).AsSelf();
            //builder.RegisterGeneric(typeof(AutoMapperQueryHandler<,>))
            //    .As(typeof(IRequestHandler<,>))
            //    .SingleInstance();

            //builder.RegisterGeneric(typeof(AsyncAutoMapperQuery<,>)).AsSelf();
            //builder.RegisterGeneric(typeof(AsyncAutoMapperQueryHandler<,>))
            //    .As(typeof(IAsyncRequestHandler<,>))
            //    .SingleInstance();

            // Special Registration of our Generic Query Handler
            builder.RegisterGeneric(typeof(GenericQuery<>)).AsSelf();
            builder.RegisterGeneric(typeof(GenericQueryHandler<>))
                .As(typeof(IRequestHandler<,>))
                .SingleInstance();

            //builder.RegisterGeneric(typeof(AsyncGenericQuery<>)).AsSelf();
            //builder.RegisterGeneric(typeof(AsyncGenericQueryHandler<>))
            //    .As(typeof(IAsyncRequestHandler<,>))
            //    .SingleInstance();

            // Special Registration of our Pagination Query Handler
            builder.RegisterGeneric(typeof(PaginateQuery<>)).AsSelf();
            builder.RegisterGeneric(typeof(PaginateQueryHandler<>))
                .As(typeof(IRequestHandler<,>))
                .SingleInstance();

            //builder.RegisterGeneric(typeof(AsyncPaginateQuery<>)).AsSelf();
            //builder.RegisterGeneric(typeof(AsyncPaginateQueryHandler<>))
            //    .As(typeof(IAsyncRequestHandler<,>))
            //    .SingleInstance();
            builder
              .RegisterType<Mediator>()
              .As<IMediator>()
              .InstancePerLifetimeScope();



            builder.Register<ServiceFactory>(context =>
            {
                var c = context.Resolve<IComponentContext>();
                return t => c.Resolve(t);
            });
            builder.RegisterAssemblyTypes(typeof(Startup).GetTypeInfo().Assembly).AsImplementedInterfaces();
        }
    }
}
