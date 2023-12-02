const code = `
using System.Collections.Generic;
using System.Threading.Tasks;
using MyApp.Models;

public interface ICommentRepository
{
    Task<IEnumerable<Comment>> GetAllCommentsAsync();
    Task<Comment> GetCommentWithIdAsync(int id);
}
`;

export default code.substring(1);
