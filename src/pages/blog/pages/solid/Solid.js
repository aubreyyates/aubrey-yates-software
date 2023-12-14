import CodeSnippet from 'components/CodeSnippet';
import BlogPage from '../../BlogPage';

import snippet1 from './codeSnippets/1.js';
import snippet2 from './codeSnippets/2.js';
import snippet3 from './codeSnippets/3.js';
import snippet4 from './codeSnippets/4.js';
import snippet5 from './codeSnippets/5.js';

import 'highlight.js/styles/vs2015.css';

const blog = {
  name: 'SOLID Design Principles'
};

const technologies = ['C#'];

const Solid = () => {
  return (
    <BlogPage blog={blog} technologies={technologies}>
      SOLID is a set of design principles that is supposed to make your code cleae, reusable, and easier to maintain.
      <br />
      <br />
      The first principle is the S {'(Single Responsability)'}. This principle states that your classes should only have a single
      responsability. In other words, everything in a class should be highly related. If a class performs tasks that are unrelated, it will
      be less intuitive and less stable. {"Let's"} is an example of a class that violates this principle to see why.
      <br />
      <CodeSnippet language="csharp">{snippet1}</CodeSnippet>
      The methods Drive and Break are highly related to a Car. They have no issue. The PayCarInsurance method is somewhat related, but it is
      performing tasks that the car {"doesn't"} need to know about. For a car to function, it {"doesn't"} need to know about the insurance
      or how to pay the insurance. The PayCarInsurance method should be moved into a different class.
      <br />
      <br />
      {"Let's"} move this code to a different class. Since the amount that is payed depends on the car make and model, we will pass that
      into the method. This new class will be called PaymentActions. Here is what the new code would look like.
      <br />
      <CodeSnippet language="csharp">{snippet2}</CodeSnippet>
      As you can see, car only contains methods that are highly related to the car now. But now we have a few new problems. We have a lot of
      nesting in our PayCarInsurance method, and we have a structure that will need regular modification to add new car make, models, and
      policies.
      <br />
      <br />
      Now is a good time to go to the second principle, O {'(Open/Closed)'}. This principle states that classes should be closed for
      modifications, but open to extensions. By modifying code, bugs can be intruduced. Instead of modifying the code, we want to be able to
      allow users of our classes to add functionality with new code. This can be tricky, but there are several methods of achieving this. We
      can use things like inheritance, the decorator pattern, or the strategy pattern.
      <br />
      <br />
      In our example, we will use the strategy pattern.
      <br />
      <br />
      The first thing we need to do is add an interface for our payment strategy. Then, we need to add classes that implement the interface
      that will perform our calculations for us. These will revolve around the make, model, and policy.
      <br />
      <CodeSnippet language="csharp">{snippet3}</CodeSnippet>
      Our PaymentActions class will have a method for adding the strategies. We will also be able to pay with the PayCarInsurance method.
      <br />
      <CodeSnippet language="csharp">{snippet4}</CodeSnippet>
      Now we can add as many makes, models, or policies that we want without changing existing code in our original classes.
      <br />
      <br />
      The third principle is L {'(Liskov Substitution)'}. This principle states that all classes should be swappable with their subclasses
      without causing the code to break. Any child class should be able to properly use all of the parent methods. If a child class{' '}
      {"can't"}
      properly implement a parent class method, it violates this principle.
      <br />
      <br />
      {"Let's"} look at an example with vehicles.
      <br />
      <CodeSnippet language="csharp">{snippet5}</CodeSnippet>
      The Plane class inherits from the Vehicle class okay, but the Car class {"can't"} use the Fly method from the Vehicle class. Anyone
      who uses the Car class will have access to the Fly method, but they will need to know that they {"shouldn't"} use it. In this case, it
      is somewhat obvious that a Car {"won't"} be able to fly, but less intuitive classes may not be so obvious.
      <br />
      <br />
      The fourth principle is I (Interface Substitution). This principle states that no code should be forced to depend on methods that are
      not used. This can happen when you have an interface that becomes too large. If a class that implements the interface has to implement
      any methods that have nothing to do with the class, then this principle is violated. This problem can sometimes be solved by breaking
      interfaces into several smaller interfaces. Classes can implement one or more of the smaller interfaces.
      <br />
      <br />
      The fifth principle is D {'(Dependency Inversion)'}. This principle states that high-level modules should not depend on low-level
      modules. Instead, there should be an interface in between. The high-level modules {"shouldn't"} need to know anything about the actual
      implementation of the concrete low-level modules.
    </BlogPage>
  );
};

export default Solid;
