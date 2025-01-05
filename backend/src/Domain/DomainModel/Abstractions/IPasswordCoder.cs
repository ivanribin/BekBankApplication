namespace Src.Domain.DomainModel.Abstractions;

public interface IPasswordCoder
{
    string Code(string password);

    string Decode(string codePassword);
}
