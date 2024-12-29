using Microsoft.Extensions.DependencyInjection;
using Src.Infrastructure;
using Src.Infrastructure.DatabaseEntity;
using Src.Infrastructure.DatabaseSettings;
using Src.Infrastructure.Implementations;
using Src.Infrastructure.Logger;

namespace Src.EntitiesDI.ServiceCollectionExtensions.DatabaseExtensions;

public static class PostgresExtensions
{
    public static void AddPostgresDatabase(this IServiceCollection collection)
    {
        collection.AddScoped<PostgresDatabaseEraser>();
        collection.AddScoped<PostgresDatabaseMaker>();

        collection.AddScoped<BankDbPostgresConnection>();

        collection.AddScoped<BankAccountPostgresDb>();

        collection.AddScoped<BankEntitiesPostgresDatabaseService>();
    }

    public static void AddPostgresLogger(this IServiceCollection collection)
    {
        collection.AddScoped<ILogger, PostgresLogger>();
    }
}
