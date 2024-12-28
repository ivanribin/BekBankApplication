namespace Src.Application.Commands;

public interface ICommand<T>
{
    T Execute();
}
