using Microsoft.Extensions.DependencyInjection;
using Src.ApplicationLaunchers;
using Src.EntitiesDI.ServiceCollectionExtensions;
using Src.EntitiesDI.ServiceCollectionSetups;

namespace Src.EntitiesDI;

public class ServiceCollectionSettings
{
    public IServiceProvider Provider { get; private set; }

    private ServiceCollection Service { get; init; }

    public ServiceCollectionSettings()
    {
        Service = [];

        Service.AddBankServicesAndEntities();

        Service.AddCommands();

        Service.AddScoped<ApplicationChoosePage>();

        Provider = Service.BuildServiceProvider();
    }

    public void Setup(string appType)
    {
        switch (appType)
        {
            case "Web Application":
                Service.WebAppPostgresSetup();
                break;
            case "Console":
                Service.ConsolePostgresSetup();
                break;
            default:
                throw new ArgumentException("Wrong application type");
        }

        Provider = Service.BuildServiceProvider();
    }
}
