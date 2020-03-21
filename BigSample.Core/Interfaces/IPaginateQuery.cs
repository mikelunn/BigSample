namespace BigSample.Core
{
    public interface IPaginateQuery<T> : IOrderByQuery<T>, ITakeQuery
    {
        int PageIndex { get; }
    }
}
