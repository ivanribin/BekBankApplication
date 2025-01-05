using Src.Domain.DomainModel.BankEntities;
using Src.Infrastructure.Logger;
using Src.ResultType;

namespace Src.Commands.BankAccountCommands;

public class BankOperationAnswer(bool isSuccess, Result result, BankAccount? bankAccount = null, Log? log = null)
{
    public bool IsSuccess { get; init; } = isSuccess;

    public Result Result { get; init; } = result;

    public BankAccount? BankAccount { get; init; } = bankAccount;

    public Log? NewLog { get; init; } = log;
}
