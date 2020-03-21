using System;
using System.Linq;
using System.Linq.Expressions;

namespace BigSample.Core
{
    public interface IOrderByQuery<TEntity>
    {
        Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> OrderBy { get; }
    }
}
