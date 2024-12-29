using Microsoft.AspNetCore.Builder;

namespace Src.WebAPI.WebAppExtensions;

public static class WebApplicationExtension
{
    public static void AddEndpoint(this WebApplication app, string endpoint)
    {
        app.MapGet(endpoint,
            () =>
            {
                return 123;
            });
    }
}
