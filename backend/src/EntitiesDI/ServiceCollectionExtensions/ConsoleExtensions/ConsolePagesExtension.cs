using Microsoft.Extensions.DependencyInjection;
using Src.UserInterface.ConsoleUI.Pages;
using Src.UserInterface.ConsoleUI.Pages.UserActionPages;

namespace Src.EntitiesDI.ServiceCollectionExtensions.ConsoleExtensions;

public static class ConsolePagesExtension
{
    public static void AddConsolePages(this IServiceCollection collection)
    {
        collection.AddScoped<RoleChoosePage>();
        collection.AddScoped<SystemAdministratorLoginPage>();
        collection.AddScoped<SystemAdministratorPage>();
        collection.AddScoped<UserActionChoosePage>();
        collection.AddScoped<CreateAccountPage>();
        collection.AddScoped<AccountLoginPage>();
        collection.AddScoped<UserPage>();
        collection.AddScoped<AddMoneyPage>();
        collection.AddScoped<WithdrawMoneyPage>();
        collection.AddScoped<ShowBalancePage>();
        collection.AddScoped<ShowAccountHistoryPage>();
    }
}
