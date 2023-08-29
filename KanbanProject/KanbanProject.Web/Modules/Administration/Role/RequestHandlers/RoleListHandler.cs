using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<KanbanProject.Administration.RoleRow>;
using MyRow = KanbanProject.Administration.RoleRow;


namespace KanbanProject.Administration
{
    public interface IRoleListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class RoleListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRoleListHandler
    {
        public RoleListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}