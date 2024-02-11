// import CodeSnippet from 'components/CodeSnippet';
import BlogPage from '../../BlogPage';

import 'highlight.js/styles/vs2015.css';

const blog = {
  name: 'Clean Architecture'
};

const technologies = ['ASP.NET Core 8', 'C#'];

const CleanArchitecture = () => {
  return (
    <BlogPage blog={blog} technologies={technologies}>
      Clean architecture is a design philosophy that emphasizes the separation of concerns. It separates an application into several layers.
      In ASP.NET Core, the layers are often enforced by having a separate project for each layer. There are generally four layers. The
      layers are called domain, application, presentation, and infrastructure.
      <br />
      <br />
      Clean architecture puts the domain at the center of the system. The domain is a representation of the business rules and logic.
      Business rules are rules from your business. For example, a user has to buy at least $10 dollars of product to get a discount. Another
      example could be that if a user buys a product, they have 30 days to return it. All of this can be coded into the domain layer. This
      layer should not depend on any other layer and should be self-contained. If your business logic changes, it should be easy to change
      inside this layer.
      <br />
      <br />
      The application layer is where the use cases of the application go. A use case is some action that a user can do inside the
      application. For example, a user may withdraw money from their account. The use cases are generally put into service classes. The
      application layer can depend on the domain layer. It may execute business logic inside of a use case.
      <br />
      <br />
      The infrastructure layer contains repositories. Repositories give access to data storage and retrieval. The layers that use the
      infrastructure layer {"don't"} worry about how the infrastructure goes about saving and retrieving data. This way different data
      systems can be used without affecting other layers.
      <br />
      <br />
      The presentation layer contains the endpoints that users interact with. This is often a web API. The web API {"doesn't"} do any heavy
      lifting. It just handles HTTP requests and calls the application layer to take care of use cases.
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </BlogPage>
  );
};

export default CleanArchitecture;
