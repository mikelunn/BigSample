using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using BigSample.Core.Service.Query;
using Newtonsoft.Json;

namespace BigSample.WebApi.Endpoints
{
    [Route("/[controller]/[action]")]
    [ApiController]
    public class BaseApiController : ControllerBase
    {
        public IMediator Mediator { get; set; }
        public LinkGenerator LinkGenerator { get; set; }
        protected object PagedLinks<T>(PaginatedList<T> result) where T : class
        {
            var links = new
            {
                first = Url.ActionLink(null, null, new { PageIndex = 1, PageSize = result.PageSize }),
                last = Url.ActionLink(null, null, new { PageIndex = result.TotalPageCount, result.PageSize }),
                next = Url.ActionLink(null, null, new { PageIndex = result.HasNextPage ? result.PageIndex + 1 : result.PageIndex, result.PageSize }),
                prev = Url.ActionLink(null, null, new { PageIndex = result.HasPreviousPage ? result.PageIndex - 1 : result.PageIndex, result.PageSize })
            };
            return links;
        }
    }
}
