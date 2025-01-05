namespace Src.Domain.DomainModel.BankEntities;

public interface IBankAccountGuidProvider
{
    Task<long> GenerateGuid();
}
