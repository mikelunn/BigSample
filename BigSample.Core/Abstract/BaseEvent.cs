using System;
using System.Collections.Generic;
using System.Text;

namespace BigSample.Core
{
    public class BaseDomainEvent
    {
        public DateTime DateOccurred { get; protected set; } = DateTime.UtcNow;
    }
}
