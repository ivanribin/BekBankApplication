using Src.Infrastructure.Logger;

namespace Src.Infrastructure.Implementations;

public class PostgresLogger(BankEntitiesPostgresDatabaseService service) : ILogger
{
    public async Task Logging(Log log)
    {
        await service.AddTransactionByLog(log);
    }
}
