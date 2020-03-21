using BigSample.Infrastructure;
using BigSample.Infrastructure.Data;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace BigSample.Core.Service.Query
{
    public class GenericQueryHandler<TEntity>
        : IRequestHandler<GenericQuery<TEntity>, IEnumerable<TEntity>>
        where TEntity : class
    {
        private readonly EfContext context;

        public GenericQueryHandler(EfContext context)
        {
            this.context = context;
        }
        public Task<IEnumerable<TEntity>> Handle(GenericQuery<TEntity> request, CancellationToken cancellationToken)
        {

            return Task.Run(() =>
            {
                IQueryable<TEntity> entities = context.Set<TEntity>();

                entities = entities.Include(request);
                entities = entities.Where(request);
                entities = entities.OrderBy(request);

                if (request.PageSize != 0)
                    entities = entities.Take(request.PageSize);

                // Depending on your needs, you may not want to have .Take be mandatory
                IEnumerable<TEntity> list = entities.ToList();
                return list;
            });
          
        }
    }
}
