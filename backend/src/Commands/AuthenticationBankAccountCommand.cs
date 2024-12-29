using Src.Domain.DomainModel.BankEntities;
using Src.Infrastructure;

namespace Src.Commands;

public class AuthenticationBankAccountCommand(long id, string password,
    BankEntitiesPostgresDatabaseService bankService) : ICommand<Task<BankAccount?>>
{
    public async Task<BankAccount?> Execute()
    {
        bool check = await bankService.AccountExists(Id);

        if (!check)
        {
            return null;
        }

        long? balance = await bankService.GetBalance(Id);
        string? dbpassword = await bankService.GetPassword(Id);

        if (balance is null || dbpassword != Password)
        {
            return null;
        }

        return new BankAccount(Id, Password, balance.Value);
    }

    private long Id { get; init; } = id;

    private string Password { get; init; } = password;
}
