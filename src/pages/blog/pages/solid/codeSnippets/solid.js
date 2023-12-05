import CodeSnippet from 'components/CodeSnippet';
import BlogPage from '../../BlogPage';

import snippet1 from './codeSnippets/1.js';

import 'highlight.js/styles/vs2015.css';

const blog = {
  name: 'SOLID Design Principles'
};

const technologies = ['C#'];

const ImplementRepository = () => {
  return (
    <BlogPage blog={blog} technologies={technologies}>
      SOLID is a set of design principles that is supposed to make your code cleaning, more reusable, and easier to maintain.
      <br />
      <br />
      The first princles is the S {'(Single Responsability)'}. This states that your classes should only have a single responsability. In
      other words, they everything that they should be related in a very cohesive way. If your class is performing tasks that are unrelated,
      your class will be less intuitive and less stable. Let is look is an example of a class that violates this principle to see why.
      <br />
      <br />
      <CodeSnippet language="csharp">{snippet1}</CodeSnippet>
    </BlogPage>
  );
};

export default ImplementRepository;
