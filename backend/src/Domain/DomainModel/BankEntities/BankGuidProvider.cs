namespace Src.Domain.DomainModel.BankEntities;

public class BankGuidProvider : IBankAccountGuidProvider
{
    public long GenerateGuid()
    {
        return _newGuid++;
    }

    private long _newGuid = DomainConstants.MinGuid;
}
