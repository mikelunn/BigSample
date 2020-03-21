using System;
using System.Linq.Expressions;

namespace BigSample.Core
{
    public interface IFilterQuery<TEntity>
    {
        Expression<Func<TEntity, bool>> Predicate { get; }
    }
}
