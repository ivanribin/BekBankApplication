using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Src.Commands;
using Src.EntitiesDI;
using Src.ResultType;

namespace Src.WebAPI.Endpoints.AdminEndpoints;

public class AdminAuthenticationEndpointAdder : IEndpointsAdder
{
    public void AddEndpoint(WebApplication app, ServiceCollectionSettings settings)
    {
        app.MapGet("/admin/authentication/{password}",
                (string password) =>
                {
                    SystemAdministratorLoginCommand curCommand =
                        ActivatorUtilities.CreateInstance<SystemAdministratorLoginCommand>(settings.Provider, password);

                    return curCommand.Execute() is Result.Success;
                })
            .WithDescription("Return true if password is correct, otherwise false")
            .WithOpenApi();
    }
}
