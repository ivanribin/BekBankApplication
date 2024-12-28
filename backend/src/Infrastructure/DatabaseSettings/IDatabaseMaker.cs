namespace Src.Infrastructure.DatabaseSettings;

public interface IDatabaseMaker
{
    Task MakeDatabase();

    Task MakeTableAccountBalance();

    Task MakeTableAccountPassword();

    Task MakeTableTransactionsHistory();
}
