using Microsoft.Extensions.DependencyInjection;

namespace Src.UserInterface.ConsoleUI.Pages.UserActionPages;

public class ShowBalancePage : IPage
{
    public Task<IPage> Execute(PageState state)
    {
        if (state.Account is null)
        {
            PagesWindows.ContinueWindow("[Red]Error.[/] Account is null!");
            return Task.FromResult<IPage>(
                state.Provider.GetRequiredService<RoleChoosePage>());
        }

        PagesWindows.ContinueWindow($"Balance is {state.Account.Balance}");

        return Task.FromResult<IPage>(
            state.Provider.GetRequiredService<UserPage>());
    }
}
