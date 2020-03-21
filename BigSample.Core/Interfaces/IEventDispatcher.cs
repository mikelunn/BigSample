using BigSample.Core;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BigSample.Core.Interfaces
{
    public interface IEventDispatcher
    {
        Task Dispatch(BaseDomainEvent baseEvent);
    }
}
