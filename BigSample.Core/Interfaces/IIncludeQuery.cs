using System;
using System.Linq.Expressions;

namespace BigSample.Core
{
    public interface IIncludeQuery<TEntity>
    {
        Expression<Func<TEntity, object>>[] IncludeProperties { get; }
    }
}
