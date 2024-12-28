using Src.Domain.DomainModel.BankEntities;

namespace Src.Domain.DomainServices;

public class AccountService
{
    public BankAccount? MakeNewAccount(string password)
    {
        long accGuid = GuidProvider.GenerateGuid();

        if (accGuid < DomainConstants.MinGuid || accGuid > DomainConstants.MaxGuid)
        {
            return null;
        }

        return new BankAccount(accGuid, password);
    }

    private BankGuidProvider GuidProvider { get; init; } = new();
}
