using System;
using System.Collections.Generic;
using System.Text;

namespace BigSample.Core
{
    public class BaseEntity
    {
        public int Id { get; set; }
        public List<BaseDomainEvent> Events { get; set; }
    }
}
