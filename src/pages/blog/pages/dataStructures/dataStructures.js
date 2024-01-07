// import CodeSnippet from 'components/CodeSnippet';
import BlogPage from '../../BlogPage';

import 'highlight.js/styles/vs2015.css';

const blog = {
  name: 'Implement a repository in ASP.NET Core'
};

const technologies = ['ASP.NET Core 8', 'C#'];

const DataStructures = () => {
  return (
    <BlogPage blog={blog} technologies={technologies}>
      When talking about Big O notation, all we care about is whether the algorithm runs in constant, logorithmic, linear, quadratic, or
      exponential time. It is an approximation. logorithmic curves slow down as you add more inputs {'(n)'}
    </BlogPage>
  );
};

export default DataStructures;
