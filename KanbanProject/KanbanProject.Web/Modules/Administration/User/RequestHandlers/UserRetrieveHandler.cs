using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<KanbanProject.Administration.UserRow>;
using MyRow = KanbanProject.Administration.UserRow;


namespace KanbanProject.Administration
{
    public interface IUserRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }
    public class UserRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUserRetrieveHandler
    {
        public UserRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}