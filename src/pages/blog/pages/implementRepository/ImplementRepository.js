import CodeSnippet from 'components/CodeSnippet';
import BlogPage from '../../BlogPage';

import 'highlight.js/styles/vs2015.css';

import snippet1 from './codeSnippets/1.js';
import snippet2 from './codeSnippets/2.js';
import snippet3 from './codeSnippets/3.js';
import snippet4 from './codeSnippets/4.js';
import snippet5 from './codeSnippets/5.js';
import snippet6 from './codeSnippets/6.js';

const blog = {
  name: 'Implement a repository in ASP.NET Core'
};

const technologies = ['ASP.NET Core 8', 'C#'];

const ImplementRepository = () => {
  return (
    <BlogPage blog={blog} technologies={technologies}>
      Implementing a repository in your ASP.NET Core application is important if you have many database queries. As your application grows,
      it becomes difficult to keep track of all of them. If the database changes, you may have to go through all of your queries and fix
      them to work with a new structure. This is not ideal if your queries are scattered throughout your controllers or razor pages.
      repositories allow you to organize them into a logical location.
      <br />
      <br />
      Another benefit of using a repository is that you can test your code easier because you can use interfaces instead of running tests
      directly on your database. Running tests directly on a database is often not good since databases have volatility and the data can
      change.
      <br />
      <br />
      {"Let's"} say we have an API that returns comments. Our Comment model looks like the following.
      <CodeSnippet language="csharp">{snippet1}</CodeSnippet>
      We have an endpoint for getting all of our comments and an endpoint for getting a single commoent by the ID. Our API Controller looks
      like the following.
      <CodeSnippet language="csharp">{snippet2}</CodeSnippet>
      This is simple and easy to follow, but we {"shouldn't"} be using the DbContext in our API. {"Let's"} create an interface for a
      repository. Right now, we just have two methods that we need GetAllCommentsAsync and GetCommentWithIdAsync. The interface will look
      like the following.
      <CodeSnippet language="csharp">{snippet3}</CodeSnippet>
      Now, {"let's"} create a concrete class that implements the interface. It will look like the following.
      <CodeSnippet language="csharp">{snippet4}</CodeSnippet>
      Next, we should replace our ApplicationDbContext with our repository interface. The EFCore queries will be replaced with the methods
      we put in the repository. That would look like the following.
      <CodeSnippet language="csharp">{snippet5}</CodeSnippet>
      Lastly, in our Program.cs file, we need to add the ICommentRepository and CommentRepository as a service so that the dependency
      container can inject it into the contructor of the API controller. The following lines need to be added to the Program.cs file.
      <CodeSnippet language="csharp">{snippet6}</CodeSnippet>
      This line must go after the DbContext is added. Also, We add the repository as a scoped service because EFCore makes DbContexts scoped
      services by default and since our repository has the DbContext as a dependency, we cannot give it a longer life cycle than any of the
      dependencies.
    </BlogPage>
  );
};

export default ImplementRepository;
