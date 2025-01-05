using Microsoft.Extensions.DependencyInjection;
using Src.ApplicationLaunchers;
using Src.EntitiesDI.ServiceCollectionExtensions.ConsoleExtensions;
using Src.EntitiesDI.ServiceCollectionExtensions.DatabaseExtensions;

namespace Src.EntitiesDI.ServiceCollectionSetups;

public static class ConsoleSetups
{
    public static void ConsolePostgresSetup(this IServiceCollection collection)
    {
        collection.AddSingleton<IApplicationLauncher, ConsoleApplicationLauncher>();

        collection.AddConsolePages();

        collection.AddPostgresDatabase();
        collection.AddPostgresLogger();
        collection.AddPostgresGuidProvider();
    }
}
