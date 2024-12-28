using Src.Domain.DomainModel.BankEntities;
using Src.Infrastructure;
using Src.Infrastructure.Logger;
using Src.ResultType;

namespace Src.Application.Commands.BankAccountCommands;

public class AddMoneyCommand(BankAccount account,
                             long delta,
                             ILogger logger,
                             BankEntitiesPostgresDatabaseService bankService) : ICommand<Task<Result>>
{
    public async Task<Result> Execute()
    {
        Result result = Account.AddMoney(Delta);

        if (result is Result.Fail)
        {
            return result;
        }

        await bankService.UpdateBalance(Account, Delta);

        await Logger.Logging(new Log(
            Account.AccountGuid,
            DateTime.Now.ToString(),
            Account.Balance - Delta,
            Account.Balance,
            Delta));

        return result;
    }

    private BankAccount Account { get; init; } = account;

    private long Delta { get; init; } = delta;

    private ILogger Logger { get; init; } = logger;
}
