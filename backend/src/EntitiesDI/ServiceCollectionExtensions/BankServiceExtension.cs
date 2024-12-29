using Microsoft.Extensions.DependencyInjection;
using Src.Domain.DomainModel.BankEntities;
using Src.Domain.DomainServices;

namespace Src.EntitiesDI.ServiceCollectionExtensions;

public static class BankServiceExtension
{
    public static void AddBankServicesAndEntities(this IServiceCollection collection)
    {
        collection.AddScoped<BalanceOperationsService>();
        collection.AddScoped<AccountService>();

        collection.AddScoped<BankAccount>();
    }
}
