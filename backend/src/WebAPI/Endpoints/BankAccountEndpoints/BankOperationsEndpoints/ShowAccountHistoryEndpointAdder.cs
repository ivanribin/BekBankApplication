using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Src.Commands.BankAccountCommands;
using Src.EntitiesDI;

namespace Src.WebAPI.Endpoints.BankAccountEndpoints.BankOperationsEndpoints;

public class ShowAccountHistoryEndpointAdder : IEndpointsAdder
{
    public void AddEndpoint(WebApplication app, ServiceCollectionSettings settings)
    {
        app.MapGet("/bankAccount/showHistory/{id:long}",
                async (long id) =>
                {
                    ShowAccountHistoryCommand curCommand =
                        ActivatorUtilities.CreateInstance<ShowAccountHistoryCommand>(settings.Provider, id);

                    return await curCommand.Execute();
                })
            .WithDescription("Return list of logs")
            .WithOpenApi();
    }
}
