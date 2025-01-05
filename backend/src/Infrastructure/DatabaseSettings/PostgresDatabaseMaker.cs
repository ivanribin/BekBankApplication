using Npgsql;

namespace Src.Infrastructure.DatabaseSettings;

public class PostgresDatabaseMaker(BankDbPostgresConnection connection) : IDatabaseMaker
{
    public async Task MakeDatabase()
    {
        await MakeTableAccountBalance();
        await MakeTableAccountPassword();
        await MakeTableTransactionsHistory();
    }

    public async Task MakeTableAccountBalance()
    {
        string cmdString = "create table if not exists AccountBalance (AccountId bigserial, Balance bigint)";

        await using var command = new NpgsqlCommand(cmdString, await connection.GetOpeningConnection());
        await command.ExecuteNonQueryAsync();
    }

    public async Task MakeTableAccountPassword()
    {
        string cmdString = "create table if not exists AccountPassword (AccountId bigserial, Password varchar(64))";

        await using var command = new NpgsqlCommand(cmdString, await connection.GetOpeningConnection());
        await command.ExecuteNonQueryAsync();
    }

    public async Task MakeTableTransactionsHistory()
    {
        string cmdString = "create table if not exists TransactionsHistory(AccountId bigserial, DataTime varchar(30), " +
                           "BalanceBefore bigint, BalanceAfter bigint, Delta bigint)";

        await using var command = new NpgsqlCommand(cmdString, await connection.GetOpeningConnection());
        await command.ExecuteNonQueryAsync();
    }
}
