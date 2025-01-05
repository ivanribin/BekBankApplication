using Npgsql;

namespace Src.Infrastructure.DatabaseSettings;

public class PostgresDatabaseEraser(BankDbPostgresConnection connection) : IDatabaseEraser
{
    public async Task DropAll()
    {
        await DropTableAccountBalance();
        await DropTableAccountPassword();
        await DropTableTransactionsHistory();
    }

    private async Task DropTableAccountBalance()
    {
        string cmdString = "drop table if exists accountbalance";

        await using var command = new NpgsqlCommand(cmdString, await connection.GetOpeningConnection());
        await command.ExecuteNonQueryAsync();
    }

    private async Task DropTableAccountPassword()
    {
        string cmdString = "drop table if exists accountpassword";

        await using var command = new NpgsqlCommand(cmdString, await connection.GetOpeningConnection());
        await command.ExecuteNonQueryAsync();
    }

    private async Task DropTableTransactionsHistory()
    {
        string cmdString = "drop table if exists transactionshistory";

        await using var command = new NpgsqlCommand(cmdString, await connection.GetOpeningConnection());
        await command.ExecuteNonQueryAsync();
    }
}