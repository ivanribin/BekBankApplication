using Microsoft.AspNetCore.Builder;

namespace Src.WebAPI.Endpoints;

public interface IEndPointAdder
{
    void AddEndPoint(WebApplication app);
}
