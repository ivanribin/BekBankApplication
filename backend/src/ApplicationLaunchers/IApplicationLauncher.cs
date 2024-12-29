using Src.EntitiesDI;

namespace Src.ApplicationLaunchers;

public interface IApplicationLauncher
{
    Task Launch(ServiceCollectionSettings settings);
}
