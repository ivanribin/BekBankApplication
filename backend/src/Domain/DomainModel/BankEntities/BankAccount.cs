using Src.ResultType;

namespace Src.Domain.DomainModel.BankEntities;

public class BankAccount(long accountGuid, long balance = 0)
{
    public Result AddMoney(long delta)
    {
        if (delta <= 0)
        {
            return new Result.Fail("Add value must be positive");
        }

        Balance += delta;
        return new Result.Success($"Now balance is {Balance}");
    }

    public Result WithdrawMoney(long delta)
    {
        if (delta <= 0)
        {
            return new Result.Fail("Withdraw value must be positive");
        }

        if (Balance < delta)
            return new Result.Fail("Not enough money");

        Balance -= delta;
        return new Result.Success($"Now balance is {Balance}");
    }

    public long AccountGuid { get; init; } = accountGuid;

    public long Balance { get; private set; } = balance >= 0 ? balance : throw new ArgumentException("Balance must be not negative");
}
