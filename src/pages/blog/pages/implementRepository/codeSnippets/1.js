const code = `
using System;
using System.ComponentModel.DataAnnotations;

public class Comment
{
    [Key]
    public int Id { get; set; }

    [Required]
    [StringLength(500, MinimumLength = 1)]
    public string Content { get; set; }

    public DateTime CreatedDate { get; set; }

    [Required]
    public int UserId { get; set; }

    [Required]
    public int PostId { get; set; }

    public User User { get; set; } // User who made the comment
    public Post Post { get; set; } // Post to which the comment belongs
}
`;

export default code.substring(1);
