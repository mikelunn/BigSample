using BigSample.Core;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace BigSample.Core.Service.Query
{
    public class PaginateQuery<TEntity>
       : BasePaginateQuery<TEntity>, IRequest<PaginatedList<TEntity>> where TEntity : class
    {
        public PaginateQuery(int pageIndex,
            int pageSize,
            Func<IQueryable<TEntity>,IOrderedQueryable<TEntity>> orderBy,
            Expression<Func<TEntity, bool>> predicate = null,
            params Expression<Func<TEntity, object>>[] includeProperties) 
            : base(pageIndex, pageSize, orderBy, predicate, includeProperties)
        {
        }
    }
}
