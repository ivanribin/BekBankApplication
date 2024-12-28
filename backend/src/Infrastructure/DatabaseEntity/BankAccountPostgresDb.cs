using Npgsql;
using Src.Infrastructure.DatabaseSettings;

namespace Src.Infrastructure.DatabaseEntity;

public class BankAccountPostgresDb(BankDbPostgresConnection connection) : IBankDatabase
{
    public async Task<long?> GetAccount(long id)
    {
        string commandString = "select * from accountbalance where accountid = @id";

        var command = new NpgsqlCommand(commandString, await connection.GetOpeningConnection());
        command.Parameters.AddWithValue("@id", id);

        return await command.ExecuteScalarAsync() as long?;
    }

    public async Task<long?> GetBalanceForAccountById(long id)
    {
        string commandString = "select Balance from AccountBalance where accountid = @id";
        var command = new NpgsqlCommand(commandString, await connection.GetOpeningConnection());
        command.Parameters.AddWithValue("@id", id);

        return await command.ExecuteScalarAsync() as long?;
    }

    public async Task<NpgsqlDataReader> GetPasswordById(long id)
    {
        string commandString = "select password from AccountPassword where accountid = @id";

        var command = new NpgsqlCommand(commandString, await connection.GetOpeningConnection());
        command.Parameters.AddWithValue("@id", id);

        return await command.ExecuteReaderAsync();
    }

    public async Task<NpgsqlDataReader> GetTransactionHistoryById(long id)
    {
        string commandString = "select * from TransactionsHistory where accountid = @id";

        var command = new NpgsqlCommand(commandString, await connection.GetOpeningConnection());
        command.Parameters.AddWithValue("@id", id);

        return await command.ExecuteReaderAsync();
    }

    public async Task AddAccountBalance(long id, long balance = 0)
    {
        string commandString = "insert into AccountBalance values (@id, @balance)";

        var command = new NpgsqlCommand(commandString, await connection.GetOpeningConnection());
        command.Parameters.AddWithValue("@id", id);
        command.Parameters.AddWithValue("@balance", balance);

        await command.ExecuteNonQueryAsync();
    }

    public async Task UpdateAccountBalance(long id, long newBalance)
    {
        string commandString = "update AccountBalance set balance = @newBalance where accountid = @id";
        var command = new NpgsqlCommand(commandString, await connection.GetOpeningConnection());
        command.Parameters.AddWithValue("@id", id);
        command.Parameters.AddWithValue("@newBalance", newBalance);

        await command.ExecuteNonQueryAsync();
    }

    public async Task AddAccountPassword(long id, string codedPassword)
    {
        string commandString = "insert into AccountPassword values (@id, @password)";

        var command = new NpgsqlCommand(commandString, await connection.GetOpeningConnection());
        command.Parameters.AddWithValue("@id", id);
        command.Parameters.AddWithValue("@password", codedPassword);

        await command.ExecuteNonQueryAsync();
    }

    public async Task AddTransaction(long id, string datetime, long balanceBefore, long balanceAfter, long delta)
    {
        string commandString = "insert into TransactionsHistory values " +
                               "(@id, @datetime, @balanceBefore, @balanceAfter, @delta)";

        var command = new NpgsqlCommand(commandString, await connection.GetOpeningConnection());
        command.Parameters.AddWithValue("@id", id);
        command.Parameters.AddWithValue("@datetime", datetime);
        command.Parameters.AddWithValue("@balanceBefore", balanceBefore);
        command.Parameters.AddWithValue("@balanceAfter", balanceAfter);
        command.Parameters.AddWithValue("@delta", delta);

        await command.ExecuteReaderAsync();
    }
}
