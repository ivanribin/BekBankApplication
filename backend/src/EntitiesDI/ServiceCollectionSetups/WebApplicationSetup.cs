using Microsoft.Extensions.DependencyInjection;
using Src.ApplicationLaunchers;
using Src.EntitiesDI.ServiceCollectionExtensions.DatabaseExtensions;

namespace Src.EntitiesDI.ServiceCollectionSetups;

public static class WebApplicationSetup
{
    public static void WebAppPostgresSetup(this IServiceCollection collection)
    {
        collection.AddSingleton<IApplicationLauncher, WebApplicationLauncher>();

        collection.AddPostgresDatabase();
        collection.AddPostgresLogger();
    }
}
