using Src.Domain.DomainModel.BankEntities;
using Src.EntitiesDI;
using Src.Infrastructure.Logger;

namespace Src.UserInterface.ConsoleUI;

public class PageState(ILogger logger, ServiceCollectionSettings settings)
{
    public void BankAccountLoggedIn(BankAccount acc)
    {
        Account = acc;
    }

    public void BankAccountLoggedOut()
    {
        Account = null;
    }

    public void AdministratorLoggedIn()
    {
        IsAdministrator = true;
    }

    public void AdministratorLoggedOut()
    {
        IsAdministrator = false;
    }

    public void WrongPasswordForSystemAdministrator()
    {
        NeedExit = true;
    }

    public ILogger GetLogger()
    {
        return Logger;
    }

    public IServiceProvider Provider { get; init; } = settings.Provider;

    public BankAccount? Account { get; private set; }

    public bool IsAdministrator { get; private set; }

    public bool NeedExit { get; private set; }

    private ILogger Logger { get; init; } = logger;
}
