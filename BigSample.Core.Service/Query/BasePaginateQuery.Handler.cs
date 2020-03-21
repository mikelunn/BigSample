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
    public abstract class BasePaginateQueryHandler<TEntity>
        : IRequestHandler<PaginateQuery<TEntity>, PaginatedList<TEntity>> where TEntity : class
    {
        private readonly EfContext context;

        public BasePaginateQueryHandler(EfContext context)
        {
            this.context = context;
        }
        public virtual Task<PaginatedList<TEntity>> Handle(PaginateQuery<TEntity> request, CancellationToken cancellationToken)
        {
            return Task.Run(() =>
            {
                IQueryable<TEntity> entities = context.Set<TEntity>();

                entities = entities.Include(request);
                entities = entities.Where(request);
                entities = entities.OrderBy(request);
                var total = entities.Count();
                entities = entities.Paginate(request);

                return new PaginatedList<TEntity>(entities.ToList(), request.PageIndex, request.PageSize, total);
            });

        }
    }
}
