using Src.Domain.DomainModel;
using Src.ResultType;

namespace Src.Application.Commands;

public class SystemAdministratorLoginCommand(string password) : ICommand<Result>
{
    public Result Execute()
    {
        var account = SystemAdministrator.TryLogin(Password);
        return account is null
            ? new Result.Fail("System password is wrong")
            : new Result.Success();
    }

    private string Password { get; init; } = password ?? string.Empty;
}
