using BigSample.Infrastructure;
using MediatR;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using BigSample.Core;
using BigSample.Infrastructure.Data;

namespace BigSample.Core.Service.Query
{
    public class PaginateQueryHandler<TEntity> : BasePaginateQueryHandler<TEntity> where TEntity : class
    {
        public PaginateQueryHandler(EfContext context) : base(context)
        {
        }
        public override Task<PaginatedList<TEntity>> Handle(PaginateQuery<TEntity> request, CancellationToken cancellationToken)
        {
            return base.Handle(request, cancellationToken);
        }
    }
}
