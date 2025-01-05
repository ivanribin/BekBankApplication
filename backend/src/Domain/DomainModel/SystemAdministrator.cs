using DotNetEnv;

namespace Src.Domain.DomainModel;

public class SystemAdministrator
{
    public static SystemAdministrator? TryLogin(string password)
    {
        Env.Load();
        return password == Environment.GetEnvironmentVariable("SYSTEM_PASSWORD") ? new SystemAdministrator() : null;
    }

    private SystemAdministrator() { }
}
