using Microsoft.AspNetCore.Builder;
using Src.Domain.DomainModel;

namespace Src.WebAPI.Endpoints.AdminEndpoints;

public class AdminAuthenticationEndPointAdder : IEndPointAdder
{
    public void AddEndPoint(WebApplication app)
    {
        app.MapGet("/admin/authentication/{password}",
                (string password) => SystemAdministrator.TryLogin(password) is not null)
            .WithOpenApi();
    }
}
