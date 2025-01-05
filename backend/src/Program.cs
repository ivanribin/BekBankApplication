using Microsoft.Extensions.DependencyInjection;
using Src.ApplicationLaunchers;
using Src.EntitiesDI;
using Src.Infrastructure.DatabaseSettings;

namespace Src;

public class Program
{
    public static async Task Main()
    {
        var settings = new ServiceCollectionSettings();
        IServiceProvider provider = settings.Provider;

        ApplicationChoosePage page = provider.GetRequiredService<ApplicationChoosePage>();
        string choice = page.Execute();

        settings.Setup(choice);
        provider = settings.Provider;

        PostgresDatabaseMaker dbmaker = settings.Provider.GetRequiredService<PostgresDatabaseMaker>();
        await dbmaker.MakeDatabase();

        IApplicationLauncher launcher = provider.GetRequiredService<IApplicationLauncher>();
        await launcher.Launch(settings);
    }
}
