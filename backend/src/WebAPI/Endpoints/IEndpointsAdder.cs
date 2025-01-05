using Microsoft.AspNetCore.Builder;
using Src.EntitiesDI;

namespace Src.WebAPI.Endpoints;

public interface IEndpointsAdder
{
    void AddEndpoint(WebApplication app, ServiceCollectionSettings settings);
}
