namespace Src.UserInterface.ConsoleUI.Pages;

public interface IPage
{
    Task<IPage> Execute(PageState state);
}
