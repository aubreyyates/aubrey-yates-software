const code = `
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class CommentsController : ControllerBase
{
    private readonly ApplicationDbContext _content;

    public CommentsController(ApplicationDbContext context)
    {
        _content = content;
    }

    // GET: api/Comments
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Comment>>> GetComments()
    {
        return Ok(await _context.Comments.ToListAsync());
    }

    // GET: api/Comments/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Comment>> GetComment(int id)
    {
        var comment = _context.Comments.FindAsync(id);

        if (comment == null)
        {
            return NotFound();
        }

        return comment;
    }
}
`;

export default code.substring(1);
