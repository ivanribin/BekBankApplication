namespace Src.Commands;

public interface ICommand<T>
{
    T Execute();
}
