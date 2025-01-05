using Npgsql;

namespace Src.Infrastructure.DatabaseEntity;

public interface IBankDatabase
{
    public Task<long?> GetAccount(long id);

    public Task<long?> GetBalanceForAccountById(long id);

    public Task<NpgsqlDataReader> GetTransactionHistoryById(long id);

    public Task AddAccountBalance(long id, long balance);

    public Task UpdateAccountBalance(long id, long newBalance);

    public Task AddAccountPassword(long id, string codedPassword);

    public Task AddTransaction(long id, string datetime, long balanceBefore, long balanceAfter, long delta);
}
