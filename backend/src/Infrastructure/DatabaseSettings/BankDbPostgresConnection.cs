using Npgsql;

namespace Src.Infrastructure.DatabaseSettings;

public class BankDbPostgresConnection
{
    private readonly NpgsqlDataSource _dataSource;

    public BankDbPostgresConnection()
    {
        DotNetEnv.Env.Load();

        string connectionString = string.Empty;
        connectionString += "Host=" + Environment.GetEnvironmentVariable("DB_HOST") + ";";
        connectionString += "Port=" + Environment.GetEnvironmentVariable("DB_PORT") + ";";
        connectionString += "Database=" + Environment.GetEnvironmentVariable("DB_NAME") + ";";
        connectionString += "Username=" + Environment.GetEnvironmentVariable("DB_USERNAME") + ";";
        connectionString += "Password=" + Environment.GetEnvironmentVariable("DB_PASSWORD") + ";";

        var dataSourceBuilder = new NpgsqlDataSourceBuilder(connectionString);
        _dataSource = dataSourceBuilder.Build();
    }

    public async Task<NpgsqlConnection> GetOpeningConnection()
    {
        return await _dataSource.OpenConnectionAsync();
    }
}
