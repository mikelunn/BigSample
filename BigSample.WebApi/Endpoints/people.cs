using BigSample.Core;
using BigSample.Core.Service;
using BigSample.Core.Service.Query;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BigSample.WebApi.Endpoints
{

    public class People : BaseAsyncEndpoint<PagedRequest, PaginatedList<Person>>
    {
        [HttpGet("/people")]
        public override async Task<ActionResult<PaginatedList<Person>>> HandleAsync([FromQuery] PagedRequest request)
        {
            var result = await Mediator.Send(new PaginateQuery<Person>(request.PageIndex, request.PageSize,null, null, 
                         new   System.Linq.Expressions.Expression<System.Func<Person, object>>[] {c=>c.EmailAddress }));
            return       Ok(new { links = PagedLinks(result), result });
        }

    }
}
