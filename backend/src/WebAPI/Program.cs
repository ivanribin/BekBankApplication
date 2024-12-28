using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Src.WebAPI.Controllers;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy", builder =>
    {
        builder.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

WebApplication app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/admin/authentication/{password}", (string password) =>
    {
        AuthenticationController controller = new();
        return controller.ReceivePassword(password);
    })
    .AllowAnonymous()
    .WithOpenApi();

app.MapGet("/admin/authentication/password={password}&&name={name}", (string password, string name) =>
    {
        return name == "Azim" && password == "postgres";
    })
    .AllowAnonymous()
    .WithOpenApi();

app.UseCors("MyPolicy");
app.Run();
