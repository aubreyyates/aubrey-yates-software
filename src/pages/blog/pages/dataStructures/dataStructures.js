// import CodeSnippet from 'components/CodeSnippet';
import BlogPage from '../../BlogPage';

import 'highlight.js/styles/vs2015.css';
import CodeSnippet from 'components/CodeSnippet';

import snippet1 from './codeSnippets/1.js';
import snippet2 from './codeSnippets/2.js';
import snippet3 from './codeSnippets/3.js';

const blog = {
  name: 'Implement a repository in ASP.NET Core'
};

const technologies = ['ASP.NET Core 8', 'C#'];

const DataStructures = () => {
  return (
    <BlogPage blog={blog} technologies={technologies}>
      Data structures can be categorized into two types, linear and non-linear. Linear structures can be arranged sequentially. Non-leaner
      structures can branch out by having multiple children for each element.
      <br />
      <br />
      A linked list is a common linear structure where the elements are linked together in a chain. Each element is referred to as a node.
      The nodes have a value and a reference to the next node in the chain. This makes it easy to move forward through the list. However,
      moving backward through the list can be tricky since there is no reference to previous nodes in each node. Here is what the code looks
      like for a node.
      <br />
      <CodeSnippet language="csharp">{snippet2}</CodeSnippet>
      You can see that the next node is accessible to the current node. If the next node is null, it means you are at the end of the list.
      With that in mind, you can loop through the list, checking to see if the next node is null. Here is an example of how you might loop
      through a linked list.
      <br />
      <CodeSnippet language="csharp">{snippet1}</CodeSnippet>
      To search a linked list takes {'O(n)'} time because items have to be traversed in order starting from the first node. If the element
      you are searching for is in the last node, the entire list will be traversed.
      <br />
      <br />A Stack is a linear structure where elements are put on the stack and will build up in a stack. You can either remove{' '}
      {`(also
      known as popping) `}
      or look {'(also known as peeking)'} at the top element on the stack. To get to the bottom of the stack, each element will have to be
      popped off first.
      <br />
      <br />
      A Queue is a linear structure where elements that are put in first come out first. To get the latest element that was put in the
      queue, you will have to remove all of the elements that were put in before the latest element.
      <br />
      <br />A common non-linear structure is a binary tree. The binary tree has a root node at the top of the tree. Each node in the tree
      has up to two children. The tree node contains a pointer to the left and right children nodes. If a pointer is null, it {
        "doesn't"
      }{' '}
      contain a child node yet. Here is the code for a tree node.
      <CodeSnippet language="csharp">{snippet3}</CodeSnippet>
    </BlogPage>
  );
};

export default DataStructures;
