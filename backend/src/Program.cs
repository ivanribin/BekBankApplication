/*using Microsoft.Extensions.DependencyInjection;
using Spectre.Console;
using Src.EntitiesDI;
using Src.Infrastructure.DatabaseSettings;
using Src.Infrastructure.Logger;
using Src.UserInterface.ConsoleUI;
using Src.UserInterface.ConsoleUI.Pages;

namespace Src;

public class Program
{
    public static async Task Main()
    {
        var settings = new ServiceCollectionSettings();

        PostgresDatabaseMaker dbmaker = settings.Provider.GetRequiredService<PostgresDatabaseMaker>();
        await dbmaker.MakeDatabase();

        PageState state = new(settings.Provider.GetRequiredService<ILogger>(), settings);

        var start = new RoleChoosePage();
        IPage page = await start.Execute(state);

        while (true)
        {
            page = await page.Execute(state);
            AnsiConsole.Clear();
            if (state.NeedExit)
            {
                break;
            }
        }
    }
}
*/
