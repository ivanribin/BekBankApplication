namespace Src.Infrastructure;

public static class DbConstants
{
    public static string DefaultIdDatabaseType { get; } = "bigserial";

    public static string DefaultBalanceDatabaseType { get; } = "bigint";

    public static string DefaultPasswordDatabaseType { get; } = "varchar(64)";
}
