using Src.Domain.DomainModel.BankEntities;
using Src.ResultType;
using Xunit;

namespace Lab5.Tests;

public class BankOperationsTests
{
    [Fact]
    public void SuccessWithdrawMoneyTest()
    {
        // arrange
        BankAccount account = new(1, "123");

        // act
        account.AddMoney(100);
        Result result = account.WithdrawMoney(99);

        // assert
        Assert.IsType<Result.Success>(result);
    }

    [Fact]
    public void FailureWithdrawMoneyTest()
    {
        // arrange
        BankAccount account = new(1, "123");

        // act
        account.AddMoney(100);
        Result result = account.WithdrawMoney(101);

        // assert
        Assert.IsType<Result.Fail>(result);
    }

    [Fact]
    public void CheckAccountBalanceTest()
    {
        // arrange
        BankAccount account = new(1, "123");
        IList<long> deltas = [100, -99, 12, 101, 58, -111, 235];
        long resultSum = deltas.Sum();

        // act
        foreach (long delta in deltas)
        {
            if (delta > 0) account.AddMoney(delta);
            else account.WithdrawMoney(-delta);
        }

        // assert
        Assert.Equal(resultSum, account.Balance);
    }
}
