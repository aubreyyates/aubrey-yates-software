const code = `
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using MyApp.Data;
using MyApp.Models;

public class CommentRepository : ICommentRepository
{
    private readonly ApplicationDbContext _context;

    public CommentRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Comment>> GetAllCommentsAsync()
    {
        return await _context.Comments.ToListAsync();
    }

    public async Task<Comment> GetCommentWithIdAsync(int commentId)
    {
        return await _context.Comments.FindAsync(commentId);
    }
}
`;

export default code.substring(1);
