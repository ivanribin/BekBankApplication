using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Src.Commands;
using Src.Domain;
using Src.EntitiesDI;

namespace Src.WebAPI.Endpoints.BankAccountEndpoints;

public class NewBankAccountIdentificationEndpointAdder : IEndpointsAdder
{
    public void AddEndpoint(WebApplication app, ServiceCollectionSettings settings)
    {
        app.MapPost("/bankAccount/identification/{password}",
                async (string password) =>
                {
                    IdentificationNewBankAccountCommand curCommand =
                        ActivatorUtilities.CreateInstance<IdentificationNewBankAccountCommand>(settings.Provider, password);

                    return await curCommand.Execute();
                })
            .WithDescription("Return null if password length is not between "
                             + DomainConstants.MinPasswordLength.ToString() + " and "
                             + DomainConstants.MaxPasswordLength.ToString()
                             + ", else return BankAccount")
            .WithOpenApi();
    }
}
