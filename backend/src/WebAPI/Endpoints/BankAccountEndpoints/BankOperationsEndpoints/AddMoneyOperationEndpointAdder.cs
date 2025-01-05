using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Src.Commands.BankAccountCommands;
using Src.EntitiesDI;

namespace Src.WebAPI.Endpoints.BankAccountEndpoints.BankOperationsEndpoints;

public class AddMoneyOperationEndpointAdder : IEndpointsAdder
{
    public void AddEndpoint(WebApplication app, ServiceCollectionSettings settings)
    {
        app.MapPost("/bankAccount/addMoney/{id:long}/{delta:long}",
                async (long id, long delta) =>
                {
                    AddMoneyCommand curCommand =
                        ActivatorUtilities.CreateInstance<AddMoneyCommand>(settings.Provider, id, delta);

                    return await curCommand.Execute();
                })
            .WithDescription("Return BankOperationAnswer")
            .WithOpenApi();
    }
}
