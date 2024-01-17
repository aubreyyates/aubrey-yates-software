import CodeSnippet from 'components/CodeSnippet';
import BlogPage from '../../BlogPage';

import 'highlight.js/styles/vs2015.css';

import snippet1 from './codeSnippets/1.js';
import snippet2 from './codeSnippets/2.js';

const blog = {
  name: 'RESTful APIs'
};

const technologies = ['ASP.NET Core 8', 'C#'];

const RestfulApis = () => {
  return (
    <BlogPage blog={blog} technologies={technologies}>
      RESTful APIs are APIs that follow a set of principles. These REST principles are a standard for many APIs on the web. Rarely do all
      REST principles get implemented. Some of them can be difficult to achieve perfectly across every API. It is still a good practice to
      implement REST standards in your API, even if you {"can't"} implement every one.
      <br />
      <br />
      There are seven principles we will look at. We will also look at some code examples.
      <br />
      <br />
      The first principle is Client-Server architecture. This principle states that the client and server should be seperate from each
      other. The presentation front end and API backend can change independantly of one another. For example, if your API sends HTML ready
      to be rendered on the frontend, that would violate this principle. Instead, it should send data in a format such as JSON. Then, the
      client will figure out how to display it.
      <br />
      <br />
      The second principle is Statelessness. This states that every request from the client should contain the data required for the server
      to complete the request. The server should not need to store any information about the client. It {"shouldn't"} need to keep
      information about the session, or keep track of a counter from request to request, for example. When a client makes a request, the
      server knows nothing about previous requests it has made.
      <br />
      <br />
      Statelessness makes it easier to scale the API because any server anywhere should be able to respond to a request. Session data{' '}
      {"won't"} need to be duplicated across several machines.
      <br />
      <br />
      The third principle is Cacheablility. This principle states that responses from the API should specify whether they can be cached or
      not. The cacheability of an endpoint is often specified in the header of a responce. This principle boosts performance by taking a
      load off the server for cacheable data. Some data {"isn't"} good to cache, such as information specific to a user. However, some data
      that {"doesn't"} change much or at all can be cached.
      <br />
      <br />
      The forth principle is Layered System. This principle states that the client should be unable tell if it is talking to the end server
      or some layer in the middle. If there are proxy servers or API gateways in between, they should be indistinguishable from the end
      server.
      <br />
      <br />
      The fifth principle is Uniform Interface. This principle states a few things. The API should be resource based. Also, it should use
      standard HTTP methods such as GET, POST, PUT, etc... instead of action names. Also, any resource returned from the API should be
      received in a represonation such as JSON. Lastly, responces should include hyperlinks to any related actions and resources so the user
      can discover the rest of the API.
      <br />
      <br />
      {"Let's"} look at an example of code that should be changed to follow the Uniform Interface principle.
      <br />
      <br />
      Here is an API controller that contains action based API endpoint names and only uses the GET method.
      <br />
      <CodeSnippet language="csharp">{snippet1}</CodeSnippet>
      This code should be changed to use the GET, PUT, and DELETE method. The names of the endpoints should also be changed. Here is the
      changed code.
      <br />
      <CodeSnippet language="csharp">{snippet2}</CodeSnippet>
      Now the code is following the Uniform Interface REST principle.
      <br />
      <br />
      The sixth principle is Code On Demand. This principle is considered optional. Code snippets can be sent to the client providing new
      functionality.
      <br />
      <br />
      The seventh principle is Resource-Based. The data should be divided into resources that can be accessed with a URI{' '}
      {'(Uniform Resource Identifier)'}. The state of the resource can change over time. In the last code example, projects were the
      resource.
    </BlogPage>
  );
};

export default RestfulApis;
