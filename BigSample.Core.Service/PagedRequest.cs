using System;
using System.Collections.Generic;
using System.Text;

namespace BigSample.Core.Service
{
    public class PagedRequest
    {
        public int PageIndex { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
}
