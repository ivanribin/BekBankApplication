using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Src.Commands.BankAccountCommands;
using Src.Domain.DomainModel.BankEntities;
using Src.EntitiesDI;

namespace Src.WebAPI.Endpoints.BankAccountEndpoints.BankOperationsEndpoints;

public class WithdrawMoneyOperationEndpointAdder : IEndpointsAdder
{
    public void AddEndpoint(WebApplication app, ServiceCollectionSettings settings)
    {
        app.MapPost("/bankAccount/withdrawMoney/{id:long}/{delta:long}",
                async (long id, long delta) =>
                {
                    BankAccount account = new(id);

                    WithdrawMoneyCommand curCommand =
                        ActivatorUtilities.CreateInstance<WithdrawMoneyCommand>(settings.Provider, id, delta);

                    return await curCommand.Execute();
                })
            .WithDescription("Return BankOperationAnswer")
            .WithOpenApi();
    }
}
