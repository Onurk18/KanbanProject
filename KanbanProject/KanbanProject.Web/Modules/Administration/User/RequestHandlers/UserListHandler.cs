using Serenity.Services;
using MyRequest = KanbanProject.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<KanbanProject.Administration.UserRow>;
using MyRow = KanbanProject.Administration.UserRow;

namespace KanbanProject.Administration
{
    public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
    {
        public UserListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}