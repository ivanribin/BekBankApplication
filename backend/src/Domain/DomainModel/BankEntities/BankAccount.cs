using Src.ResultType;

namespace Src.Domain.DomainModel.BankEntities;

public class BankAccount
{
    public BankAccount(long accountGuid, string codedPassword, long balance = 0)
    {
        AccountGuid = accountGuid;
        CodedPassword = codedPassword;
        Balance = balance >= 0 ? balance : throw new ArgumentException("Balance must be not negative");
    }

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
        return new Result.Success();
    }

    public long AccountGuid { get; init; }

    public string CodedPassword { get; init; }

    public long Balance { get; private set; } = 0;
}
