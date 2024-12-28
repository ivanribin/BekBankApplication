namespace Src.WebAPI.Controllers;

public class AuthenticationController
{
    public bool ReceivePassword(string password)
    {
        return password == "postgres";
    }
}
