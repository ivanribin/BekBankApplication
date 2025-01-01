using Src.Infrastructure;
using Src.Infrastructure.Logger;

namespace Src.Commands.BankAccountCommands;

public class ShowAccountHistoryCommand(long id,
                                       BankEntitiesPostgresDatabaseService bankService) : ICommand<Task<IList<Log>>>
{
    public async Task<IList<Log>> Execute()
    {
        return await bankService.GetTransactionHistory(id);
    }
}
