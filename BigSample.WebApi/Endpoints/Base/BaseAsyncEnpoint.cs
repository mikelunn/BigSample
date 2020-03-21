using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigSample.WebApi.Endpoints
{
    /// <summary>
    /// A base class for an endpoint that accepts parameters.
    /// </summary>
    /// <typeparam name="TRequest"></typeparam>
    /// <typeparam name="TResponse"></typeparam>
    [ApiController]
    public abstract class BaseAsyncEndpoint<TRequest, TResponse> : BaseApiController
    {
        public abstract Task<ActionResult<TResponse>> HandleAsync(TRequest request);
    }

    /// <summary>
    /// A base class for an endpoint that has no parameters.
    /// </summary>
    /// <typeparam name="TResponse"></typeparam>
    [ApiController]
    public abstract class BaseAsyncEndpoint<TResponse> : BaseApiController
    {
        
        public abstract Task<ActionResult<TResponse>> HandleAsync();
    }
}
