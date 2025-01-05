using Src.Domain.DomainModel.BankEntities;

namespace Src.Infrastructure.Implementations;

public class PostgresGuidProvider(BankEntitiesPostgresDatabaseService bankService) : IBankAccountGuidProvider
{
    public Task<long> GenerateGuid()
    {
        return bankService.GetNewId();
    }
}
