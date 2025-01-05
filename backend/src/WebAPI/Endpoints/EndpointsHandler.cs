using Microsoft.AspNetCore.Builder;
using Src.EntitiesDI;

namespace Src.WebAPI.Endpoints;

public class EndpointsHandler : IEndpointsAdder
{
    public EndpointsHandler AddEndpointAdder(IEndpointsAdder endpointsAdder)
    {
        EndPointsAdders.Add(endpointsAdder);
        return this;
    }

    public void AddEndpoint(WebApplication app, ServiceCollectionSettings settings)
    {
        foreach (var elem in EndPointsAdders)
        {
            elem.AddEndpoint(app, settings);
        }
    }

    private IList<IEndpointsAdder> EndPointsAdders { get; set; } = [];
}
