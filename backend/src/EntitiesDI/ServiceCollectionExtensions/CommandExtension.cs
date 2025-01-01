using Microsoft.Extensions.DependencyInjection;
using Src.Commands;
using Src.Commands.BankAccountCommands;

namespace Src.EntitiesDI.ServiceCollectionExtensions;

public static class CommandExtension
{
    public static void AddCommands(this IServiceCollection collection)
    {
        collection.AddScoped<AddMoneyCommand>();
        collection.AddScoped<WithdrawMoneyCommand>();
        collection.AddScoped<ShowBalanceCommand>();
        collection.AddScoped<ShowAccountHistoryCommand>();
        collection.AddScoped<AuthenticationBankAccountCommand>();
        collection.AddScoped<IdentificationNewBankAccountCommand>();
        collection.AddScoped<SystemAdministratorLoginCommand>();
    }
}
