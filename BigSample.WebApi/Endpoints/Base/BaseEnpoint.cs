using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigSample.WebApi.Endpoints
{
    [ApiController]
    public abstract class BaseEndpoint<TRequest, TResponse> : ControllerBase
    {
        public abstract ActionResult<TResponse> Handle(TRequest request);
    }

    /// <summary>
    /// A base calss for an endpoint that has no parameters.
    /// </summary>
    /// <typeparam name="TResponse">The type to return from the Handle method's ActionResult<T>.</typeparam>
    [ApiController]
    public abstract class BaseEndpoint<TResponse> : ControllerBase
    {
        public abstract ActionResult<TResponse> Handle();
    }
}
