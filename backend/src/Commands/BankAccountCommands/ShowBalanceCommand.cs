using Src.Infrastructure;

namespace Src.Commands.BankAccountCommands;

public class ShowBalanceCommand(long id,
                                BankEntitiesPostgresDatabaseService bankService) : ICommand<Task<long?>>
{
    public async Task<long?> Execute()
    {
        return await bankService.GetBalance(id);
    }
}
