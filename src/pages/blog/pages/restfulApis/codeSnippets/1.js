const code = `
namespace SomeApp.Controllers
{
    [Route("api/projects")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        [HttpGet("GetAllProjects")]
        public async Task<ActionResult<IEnumerable<Project>>> GetAllProjects()
        {
            // Returns all projects.
        }

        [HttpGet("GetProjectByID/{id}")]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjectByID(int id)
        {
            // Returns a project with a given ID.
        }

        [HttpGet("UpdateProject/{id}")]
        public async Task<ActionResult<IEnumerable<Project>>> UpdateProject(int id, Project updatedProject)
        {
            // Updates a project.
        }

        [HttpGet("DeleteProject/{id}")]
        public async Task<ActionResult<IEnumerable<Project>>> DeleteProject(int id)
        {
            // Deletes a project.
        }
    }
}
`;

export default code.substring(1);
