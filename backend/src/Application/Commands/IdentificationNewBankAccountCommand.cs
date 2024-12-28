using Src.Domain.DomainModel.BankEntities;
using Src.Domain.DomainServices;
using Src.Infrastructure;

namespace Src.Application.Commands;

public class IdentificationNewBankAccountCommand(string password,
    BankEntitiesPostgresDatabaseService bankService,
    AccountService accountService) : ICommand<Task<BankAccount?>>
{
    public async Task<BankAccount?> Execute()
    {
        Domain.DomainModel.BankEntities.BankAccount? result = accountService.MakeNewAccount(Password);

        if (result is null)
        {
            return null;
        }

        await bankService.MakeAccount(result);

        return result;
    }

    private string Password { get; init; } = password;
}
