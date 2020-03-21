using BigSample.Core;
using BigSample.Core.Service.Query;
using System;
using Xunit;
using System.Linq;
using BigSample.Infrastructure.Data;
using System.Threading.Tasks;
using System.Linq.Expressions;

namespace BigSample.IntegrationTest
{
    public class PaginateQueryTest
    {
        [Fact]
        public async Task ShouldPaginate()
        {
            var query = new PaginateQuery<Person>(1, 10, orderBy: c=>c.OrderBy(x => x.LastName), null, new Expression<Func<Person, object>>[] { c => c.EmailAddress, c=>c.BusinessEntityContact });
            var handler = new PaginateQueryHandler<Person>(new Infrastructure.EfContext());
            var result = await handler.Handle(query, new System.Threading.CancellationToken());
            Assert.Equal(10, result.Count());
        }
    }
}
