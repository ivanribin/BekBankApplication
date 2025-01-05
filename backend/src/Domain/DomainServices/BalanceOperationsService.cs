using Src.Domain.DomainModel.BankEntities;
using Src.ResultType;

namespace Src.Domain.DomainServices;

public class BalanceOperationsService()
{
    public Result AddMoney(BankAccount account, long delta)
    {
        return account.AddMoney(delta);
    }

    public Result WithdrawMoney(BankAccount account, long delta)
    {
        return account.WithdrawMoney(delta);
    }
}
