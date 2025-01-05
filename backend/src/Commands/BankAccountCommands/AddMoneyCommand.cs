using Src.Domain.DomainModel.BankEntities;
using Src.Infrastructure;
using Src.Infrastructure.Logger;
using Src.ResultType;

namespace Src.Commands.BankAccountCommands;

public class AddMoneyCommand(long id,
                             long delta,
                             ILogger logger,
                             BankEntitiesPostgresDatabaseService bankService) : ICommand<Task<BankOperationAnswer>>
{
    public async Task<BankOperationAnswer> Execute()
    {
        long? balance = await bankService.GetBalance(id);

        if (balance is null)
        {
            return new BankOperationAnswer(false, new Result.Fail("Error with database or account doesn't exist"));
        }

        BankAccount account = new(id, balance.Value);

        Result result = account.AddMoney(delta);

        if (result is Result.Fail)
        {
            return new BankOperationAnswer(false, result, account);
        }

        await bankService.UpdateBalance(account);

        var newLog = new Log(
            account.AccountGuid,
            DateTime.Now,
            balance.Value,
            account.Balance,
            delta);

        await logger.Logging(newLog);

        return new BankOperationAnswer(true, result, account, newLog);
    }
}
