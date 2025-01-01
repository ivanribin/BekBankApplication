using Src.Domain.DomainModel.BankEntities;
using Src.Domain.DomainServices;
using Src.Infrastructure;

namespace Src.Commands;

public class IdentificationNewBankAccountCommand(string password,
    BankEntitiesPostgresDatabaseService bankService,
    AccountService accountService) : ICommand<Task<BankAccount?>>
{
    public async Task<BankAccount?> Execute()
    {
        BankAccount? result = await accountService.MakeNewAccount(Password);

        if (result is null)
        {
            return null;
        }

        await bankService.MakeAccount(result, Password);

        return result;
    }

    private string Password { get; init; } = password;
}
