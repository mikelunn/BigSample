using BigSample.Core;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BigSample.Infrastructure.Data
{
    public static class QueryableExtensions
    {
        public static IQueryable<T> Include<T>(this IQueryable<T> query, IIncludeQuery<T> args)
            where T : class
        {
            if (args.IncludeProperties != null)
                foreach (var include in args.IncludeProperties)
                {
                    query = query.Include(include);

                }

            return query;
        }
        public static IQueryable<T> Paginate<T>(this IQueryable<T> query, IPaginateQuery<T> args)
        {
            var entities = query.Skip((args.PageIndex - 1) * args.PageSize).Take(args.PageSize);
            return entities;
        }

        public static IQueryable<T> Where<T>(this IQueryable<T> query, IFilterQuery<T> args)
        {
            query = (args.Predicate != null) ? query.Where(args.Predicate) : query;

            return query;
        }

        public static IQueryable<T> OrderBy<T>(this IQueryable<T> query, IOrderByQuery<T> args)
        {
            query = (args.OrderBy != null)
                ? args.OrderBy(query)
                : query;

            return query;
        }
    }
}
