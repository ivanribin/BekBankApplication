using Src.ResultType;

namespace Src.Domain.DomainModel.Abstractions.Repository;

public interface IRepository<T>
{
    Result Save(T obj);

    T Find(T obj);

    T FindById(long id);
}
