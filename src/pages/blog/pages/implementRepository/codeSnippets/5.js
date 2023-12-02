const code = `
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using MyApp.Models;
using MyApp.Services;

[Route("api/[controller]")]
[ApiController]
public class CommentsController : ControllerBase
{
    private readonly ICommentRepository _commentRepository;

    public CommentsController(ICommentRepository commentRepository)
    {
        _commentRepository = commentRepository;
    }

    // GET: api/Comments
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Comment>>> GetComments()
    {
        return Ok(await _commentService.GetAllCommentsAsync());
    }

    // GET: api/Comments/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Comment>> GetComment(int id)
    {
        var comment = await _commentService.GetCommentWithIdAsync(id);

        if (comment == null)
        {
            return NotFound();
        }

        return comment;
    }
}
`;

export default code.substring(1);
