import React from 'react';

const Blog = () => {
    return (
        <div className="lg:px-24 border border-collapse border-primary my-5">
            <h2 className="text-center text-xl lg:text-4xl text-primary font-bold"> How will you improve the performance of a React Application?</h2>
            <p className="text-center text-xl lg:text-2xl">
                Several ways of Improving Performance of React application
                <ol>
                    <li>When it's required, keep component state local.</li>
                    <li>React components should be remembered to avoid unwanted re-renders.</li>
                    <li>Code-splitting in React using dynamic import()</li>
                    <li>In React, this is known as windowing or list virtualization.</li>
                    <li>To reduce the page load speed of an application with several photos, we can forgo rendering all of the images at once.</li>
                </ol>
            </p>
            <h2 className="text-center text-xl lg:text-4xl text-primary font-bold"> What are the different ways to manage a state in a React application?</h2>
            <p className="text-center text-xl lg:text-2xl">
                The Four Kinds of React State to Manage
                <ul>
                    <li>Local state</li>
                    <li>Global state</li>
                    <li>Server state</li>
                    <li>URL state</li>
                </ul>
            </p>
            <p className="text-center text-xl lg:text-2xl">
                To show or hide a modal component, or to track values for a form component, such as form submission, when the form is disabled, as well as the values of a form's inputs, local state would be required.
            </p>
            <p className="text-center text-xl lg:text-2xl">
                When we wish to receive and change data from everywhere in our app, or at least across many components, we need global state.Authenticated user state is a frequent example of global state. It is important to obtain and alter a user's data across our program if the user is signed in.
            </p>
            <p className="text-center text-xl lg:text-2xl">
                Server state is a basic idea, but it may be difficult to maintain alongside all of our other UI data, both local and global.
            </p>
            <p className="text-center text-xl lg:text-2xl">
                The URL state is generally overlooked as a state category, yet it is an essential one.A lot of significant aspects of our program rely on obtaining URL state in several circumstances. Consider how difficult it would be to create a blog without being able to retrieve a post based on its slug or id in the URL!
            </p>
            <h2 className="text-center text-xl lg:text-4xl text-primary font-bold"> How does prototypical inheritance work?</h2>
            <p className="text-center text-xl lg:text-2xl">
                Prototypal Inheritance is a javascript feature that allows you to add methods and attributes to objects. It's a technique that allows one object to inherit the attributes and methods of another.The ability to access object properties from another object is known as prototype inheritance. To add new attributes and methods to an existing object constructor, we utilize a JavaScript prototype. We may instruct our JS code to inherit attributes from a prototype in this way. Through a reference pointer function, prototypical inheritance allows us to reuse attributes or methods from one JavaScript object to another.
            </p>
            <h2 className="text-center text-xl lg:text-4xl text-primary font-bold"> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
            <p className="text-center text-xl lg:text-2xl">
                If someone updates it directly, the alteration you made may be overwritten if you execute setState() subsequently.
                This.state is not changed quickly when someone updates the state directly. Instead, it generates a pending state transition, which will only yield the current value if accessed after using this function.
                Across all components, we will lose control of the state.
            </p>
            <h2 className="text-center text-xl lg:text-4xl text-primary font-bold"> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <p className="text-center text-xl lg:text-2xl">
                I will use Javascript Array function to search by Name. if the searched name incluedes in the product name then will return the result
            </p>
            <h2 className="text-center text-xl lg:text-4xl text-primary font-bold"> What is a unit test? Why should write unit tests?</h2>
            <p className="text-center text-xl lg:text-2xl">
                UNIT TESTING is a sort of software testing that examines individual software units or components. The goal is to ensure that each unit of software code works as intended. Unit testing is carried out by developers throughout the development (coding) phase of an application. Unit tests are used to isolate a part of code and ensure that it is accurate. An singular function, method, process, module, or object might be considered a unit.
                Unit tests save time and money by catching flaws early in the development cycle.
                It aids developers in comprehending the testing code base and allowing them to make rapid adjustments.
                Unit tests that are well-written serve as project documentation.
                Code reuse is aided by unit testing. Both your code and your tests should be migrated to your new project. Adjust the code till the tests pass.
            </p>
        </div>
    );
};

export default Blog;