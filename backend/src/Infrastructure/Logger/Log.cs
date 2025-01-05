using Src.Domain.DomainModel.BankEntities;

namespace Src.Infrastructure.Logger;

public record Log
{
    public Log(long id, string datetime, long balanceBefore, long balanceAfter, long delta)
    {
        AccountId = id;
        Datetime = datetime;
        BalanceBeforeOperation = balanceBefore;
        BalanceAfterOperation = balanceAfter;
        Delta = delta;
    }

    public Log(long id, DateTime datetime, long balanceBefore, long balanceAfter, long delta)
    {
        AccountId = id;
        Datetime = datetime.ToString();
        BalanceBeforeOperation = balanceBefore;
        BalanceAfterOperation = balanceAfter;
        Delta = delta;
    }

    public Log(BankAccount acc, long delta, bool isAfterOperation)
    {
        AccountId = acc.AccountGuid;
        Datetime = DateTime.Now.ToString();

        if (isAfterOperation)
        {
            BalanceAfterOperation = acc.Balance;
            BalanceBeforeOperation = BalanceAfterOperation - delta;
        }
        else
        {
            BalanceBeforeOperation = acc.Balance;
            BalanceAfterOperation = BalanceBeforeOperation + delta;
        }

        Delta = delta;
    }

    public long AccountId { get; init; }

    public string Datetime { get; init; }

    public long BalanceBeforeOperation { get; init; }

    public long BalanceAfterOperation { get; init; }

    public long Delta { get; init; }
}
