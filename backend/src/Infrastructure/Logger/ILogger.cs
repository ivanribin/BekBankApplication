namespace Src.Infrastructure.Logger;

public interface ILogger
{
    Task Logging(Log log);
}
