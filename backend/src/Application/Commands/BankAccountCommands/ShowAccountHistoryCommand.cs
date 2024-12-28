using Src.Domain.DomainModel.BankEntities;
using Src.Infrastructure;
using Src.Infrastructure.Logger;

namespace Src.Application.Commands.BankAccountCommands;

public class ShowAccountHistoryCommand(BankAccount account,
                                       BankEntitiesPostgresDatabaseService bankService) : ICommand<Task<IList<IList<string>>>>
{
    public async Task<IList<IList<string>>> Execute()
    {
        IList<Log> serviceAnswer = await bankService.GetTransactionHistory(Account);

        IList<IList<string>> result = [];

        foreach (Log log in serviceAnswer)
        {
            result.Add([log.AccountId.ToString(),
                       log.Datetime,
                       log.BalanceBeforeOperation.ToString(),
                       log.BalanceAfterOperation.ToString(),
                       log.Delta.ToString()]);
        }

        return result;
    }

    private BankAccount Account { get; init; } = account;
}
