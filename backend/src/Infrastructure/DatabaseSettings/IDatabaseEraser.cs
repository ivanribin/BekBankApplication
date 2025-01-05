namespace Src.Infrastructure.DatabaseSettings;

public interface IDatabaseEraser
{
    Task DropAll();
}
