using Src.Domain.DomainModel.BankEntities;
using Src.Infrastructure.DatabaseEntity;
using Src.Infrastructure.Logger;

namespace Src.Infrastructure;

public class BankEntitiesPostgresDatabaseService(BankAccountPostgresDb bankAccDb)
{
    public async Task<bool> AccountExists(long id)
    {
        return await bankAccDb.GetAccount(id) is not null;
    }

    public async Task<long?> GetBalance(long id)
    {
        return await bankAccDb.GetBalanceForAccountById(id);
    }

    public async Task<string?> GetPassword(long id)
    {
        Npgsql.NpgsqlDataReader reader = await bankAccDb.GetPasswordById(id);

        string password = string.Empty;
        while (await reader.ReadAsync())
        {
            password = reader.GetString(0);
        }

        return password;
    }

    public async Task<IList<Log>> GetTransactionHistory(BankAccount acc)
    {
        Npgsql.NpgsqlDataReader reader = await bankAccDb.GetTransactionHistoryById(acc.AccountGuid);

        IList<Log> result = [];

        while (await reader.ReadAsync())
        {
            result.Add(new Log(
                reader.GetInt64(0),
                reader.GetString(1),
                reader.GetInt64(2),
                reader.GetInt64(3),
                reader.GetInt64(4)));
        }

        return result;
    }

    public async Task MakeAccount(BankAccount acc)
    {
        await bankAccDb.AddAccountBalance(acc.AccountGuid, 0);
        await bankAccDb.AddAccountPassword(acc.AccountGuid, acc.CodedPassword);
    }

    public async Task UpdateBalance(BankAccount acc)
    {
        await bankAccDb.UpdateAccountBalance(acc.AccountGuid, acc.Balance);
    }

    public async Task AddTransactionByLog(Log log)
    {
        await bankAccDb.AddTransaction(
            log.AccountId,
            log.Datetime,
            log.BalanceBeforeOperation,
            log.BalanceAfterOperation,
            log.Delta);
    }
}
