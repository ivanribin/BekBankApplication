using Microsoft.Extensions.DependencyInjection;
using Src.Application.Commands;
using Src.Application.Commands.BankAccountCommands;
using Src.Domain.DomainModel.BankEntities;
using Src.Domain.DomainServices;
using Src.Infrastructure;
using Src.Infrastructure.DatabaseEntity;
using Src.Infrastructure.DatabaseSettings;
using Src.Infrastructure.Implementations;
using Src.Infrastructure.Logger;
using Src.UserInterface.ConsoleUI.Pages;
using Src.UserInterface.ConsoleUI.Pages.UserActionPages;

namespace Src.EntitiesDI;

public class ServiceCollectionSettings
{
    public IServiceProvider Provider { get; init; }

    private ServiceCollection Service { get; init; }

    public ServiceCollectionSettings()
    {
        Service = [];

        Service.AddScoped<BalanceOperationsService>();
        Service.AddScoped<AccountService>();

        Service.AddScoped<PostgresDatabaseEraser>();
        Service.AddScoped<PostgresDatabaseMaker>();

        Service.AddScoped<BankDbPostgresConnection>();

        Service.AddScoped<BankAccountPostgresDb>();

        Service.AddScoped<BankEntitiesPostgresDatabaseService>();

        Service.AddScoped<RoleChoosePage>();
        Service.AddScoped<SystemAdministratorLoginPage>();
        Service.AddScoped<SystemAdministratorPage>();
        Service.AddScoped<UserActionChoosePage>();
        Service.AddScoped<CreateAccountPage>();
        Service.AddScoped<AccountLoginPage>();
        Service.AddScoped<UserPage>();
        Service.AddScoped<AddMoneyPage>();
        Service.AddScoped<WithdrawMoneyPage>();
        Service.AddScoped<ShowBalancePage>();
        Service.AddScoped<ShowAccountHistoryPage>();

        Service.AddScoped<AddMoneyCommand>();
        Service.AddScoped<WithdrawMoneyCommand>();
        Service.AddScoped<ShowAccountHistoryCommand>();
        Service.AddScoped<AuthenticationBankAccountCommand>();
        Service.AddScoped<IdentificationNewBankAccountCommand>();
        Service.AddScoped<SystemAdministratorLoginCommand>();

        Service.AddScoped<ILogger, PostgresLogger>();

        Service.AddScoped<BankAccount>();

        Provider = Service.BuildServiceProvider();
    }
}
