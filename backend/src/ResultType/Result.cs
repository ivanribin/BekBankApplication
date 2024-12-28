namespace Src.ResultType;

public record Result
{
    private Result() { }

    public sealed record Success(string Message = "Success") : Result
    {
        public override string ResultMessage { get; init; } = string.IsNullOrEmpty(Message)
            ? "Success"
            : Message;
    }

    public sealed record Fail(string Message = "Fail") : Result
    {
        public override string ResultMessage { get; init; } = string.IsNullOrEmpty(Message)
            ? "Fail"
            : Message;
    }

    public virtual string ResultMessage { get; init; } = string.Empty;
}
