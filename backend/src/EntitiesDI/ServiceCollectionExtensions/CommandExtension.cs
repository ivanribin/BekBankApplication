using Microsoft.Extensions.DependencyInjection;
using Src.Application.Commands;
using Src.Application.Commands.BankAccountCommands;

namespace Src.EntitiesDI.ServiceCollectionExtensions;

public static class CommandExtension
{
    public static void AddCommands(this IServiceCollection collection)
    {
        collection.AddScoped<AddMoneyCommand>();
        collection.AddScoped<WithdrawMoneyCommand>();
        collection.AddScoped<ShowAccountHistoryCommand>();
        collection.AddScoped<AuthenticationBankAccountCommand>();
        collection.AddScoped<IdentificationNewBankAccountCommand>();
        collection.AddScoped<SystemAdministratorLoginCommand>();
    }
}
