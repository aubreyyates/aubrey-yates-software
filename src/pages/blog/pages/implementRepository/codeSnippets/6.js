const code = `
builder.Services.AddScoped<ICommentRepository, CommentRepository>();
`;

export default code.substring(1);
