using Microsoft.Extensions.DependencyInjection;
using Spectre.Console;
using Src.Application.Commands.BankAccountCommands;

namespace Src.UserInterface.ConsoleUI.Pages.UserActionPages;

public class ShowAccountHistoryPage : IPage
{
    public async Task<IPage> Execute(PageState state)
    {
        if (state.Account is null)
        {
            PagesWindows.ContinueWindow("[Red]Error.[/] Account is null!");
            return state.Provider.GetRequiredService<RoleChoosePage>();
        }

        ShowAccountHistoryCommand curCommand =
            ActivatorUtilities.CreateInstance<ShowAccountHistoryCommand>(state.Provider, state.Account);

        IList<IList<string>> result = await curCommand.Execute();

        var table = new Table();

        table.AddColumns("ID", "Datetime", "Balance before", "Balance after", "Delta", "Type");

        foreach (IList<string> s in result)
        {
            string type = "Add";
            if (s[4][0] == '-')
            {
                type = "Withdraw";
            }

            table.AddRow(s[0], s[1], s[2], s[3], s[4], type);
        }

        AnsiConsole.Write(table);

        PagesWindows.ContinueWindow();

        return state.Provider.GetRequiredService<UserPage>();
    }
}
