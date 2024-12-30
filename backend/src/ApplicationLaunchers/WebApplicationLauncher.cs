using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Src.EntitiesDI;

namespace Src.ApplicationLaunchers;

public class WebApplicationLauncher : IApplicationLauncher
{
    public async Task Launch(ServiceCollectionSettings settings)
    {
        WebApplicationBuilder builder = WebApplication.CreateBuilder();

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        builder.Services.AddCors(options =>
        {
            options.AddPolicy("MyPolicy",
                builder =>
                {
                    builder.WithOrigins("http://localhost:3000")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
        });

        WebApplication app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.MapGet("/admin/authentication/password={password}&&name={name}",
                (string password, string name) =>
                {
                    return name == "Azim" && password == "postgres";
                })
            .AllowAnonymous()
            .WithOpenApi();

        app.UseCors("MyPolicy");
        await app.RunAsync();
    }
}
