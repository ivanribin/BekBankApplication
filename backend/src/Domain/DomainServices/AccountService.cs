using Src.Domain.DomainModel.BankEntities;

namespace Src.Domain.DomainServices;

public class AccountService(IBankAccountGuidProvider guidProvider)
{
    public async Task<BankAccount?> MakeNewAccount(string password)
    {
        long accGuid = await guidProvider.GenerateGuid();

        return accGuid < DomainConstants.MinGuid || accGuid > DomainConstants.MaxGuid ||
            password.Length < DomainConstants.MinPasswordLength ||
            password.Length > DomainConstants.MaxPasswordLength ?
            null : new BankAccount(accGuid);
    }
}
