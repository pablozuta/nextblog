import Link from "next/link";

export default function ReactRouter() {
  return (
    <>
      <h1>REACT ROUTER</h1>
      <h3>Main Concepts</h3>
      <p>
        You might be wondering what exactly React Router does. How can it help
        you build your app? What exactly is a router, anyway? If you've ever had
        any of these questions, or you'd just like to dig into the fundamental
        pieces of routing, you're in the right place. This document contains
        detailed explanations of all the core concepts behind routing as
        implemented in React Router.
      </p>
      <p>
        Please don't let this document overwhelm you! For everyday use, React
        Router is pretty simple. You don't need to go this deep to use it. React
        Router isn't just about matching a url to a function or component: it's
        about building a full user interface that maps to the URL, so it might
        have more concepts in it than you're used to. We'll go into detail on
        the three main jobs of React Router:
      </p>
      <ol>
        <li>Subscribing and manipulating the history stack</li>
        <li>Matching the URL to your routes</li>
        <li>Rendering a nested UI from the route matches</li>
      </ol>

      <h3>Definitions</h3>
      <p>
        But first, some definitions! There are a lot of different ideas around
        routing from back and front end frameworks. Sometimes a word in one
        context might have different meaning than another. Here are some words
        we use a lot when we talk about React Router. The rest of this guide
        will go into more detail on each one.
      </p>
      <ul>
        <li>URL - The URL in the address bar. A lot of people use the term "URL" and "route" interchangeably, but this is not a route in React Router, it's just a URL.</li>
        <li>Location - This is a React Router specific object that is based on the built-in browser's window.location object. It represents "where the user is at". It's mostly an object representation of the URL but has a bit more to it than that.</li>
        <li>Location State - A value that persists with a location that isn't encoded in the URL. Much like hash or search params (data encoded in the URL), but stored invisibly in the browser's memory.</li>
        <li>History Stack - As the user navigates, the browser keeps track of each location in a stack. If you click and hold the back button in a browser you can see the browser's history stack right there.</li>
        <li>Client Side Routing (CSR) - A plain HTML document can link to other documents and the browser handles the history stack itself. Client Side Routing enables developers to manipulate the browser history stack without making a document request to the server.</li>
        <li>History - An object that allows React Router to subscribe to changes in the URL as well as providing APIs to manipulate the browser history stack programmatically.</li>
        <li>History Action - One of POP, PUSH, or REPLACE. Users can arrive at a URL for one of these three reasons. A push when a new entry is added to the history stack (typically a link click or the programmer forced a navigation). A replace is similar except it replaces the current entry on the stack instead of pushing a new one. Finally, a pop happens when the user clicks the back or forward buttons in the browser chrome.</li>
        <li>
Segment - The parts of a URL or path pattern between the / characters. For example, "/users/123" has two segments.</li>
        <li>Path Pattern - These look like URLs but can have special characters for matching URLs to routes, like dynamic segments ("/users/:userId") or star segments ("/docs/*"). They aren't URLs, they're patterns that React Router will match.</li>
        <li>Dynamic Segment - A segment of a path pattern that is dynamic, meaning it can match any values in the segment. For example the pattern /users/:userId will match URLs like /users/123
</li>
        <li>URL Params - The parsed values from the URL that matched a dynamic segment.</li>
        <li>Router - Stateful, top-level component that makes all the other components and hooks work.</li>
        <li>Route Config - A tree of routes objects that will be ranked and matched (with nesting) against the current location to create a branch of route matches.</li>
        <li>Route - An object or Route Element typically with a shape of <code>  path, element  </code> or <code>Route path element</code>. The path is a path pattern. When the path pattern matches the current URL, the element will be rendered.</li>
        <li>Route Element - Or <code>Route</code>  . This element's props are read to create a route by <code>Routes</code> , but otherwise does nothing.</li>
        <li>Nested Routes - Because routes can have children and each route defines a portion of the URL through segments, a single URL can match multiple routes in a nested "branch" of the tree. This enables automatic layout nesting through outlet, relative links, and more.</li>
        <li>Relative links - Links that don't start with / will inherit the closest route in which they are rendered. This makes it easy to link to deeper URLs without having to know and build up the entire path.</li>
        <li>Match - An object that holds information when a route matches the URL, like the url params and pathname that matched.</li>
        <li>Matches - An array of routes (or branch of the route config) that matches the current location. This structure enables nested routes.</li>
        <li>Parent Route - A route with child routes.</li>
        <li>Outlet - A component that renders the next match in a set of matches.</li>
        <li>Index Route - A child route with no path that renders in the parent's outlet at the parent's URL.</li>
        <li>Layout Route - A parent route without a path, used exclusively for grouping child routes inside a specific layout.</li>

      </ul>
<center> <h2 className='title'>
        <Link href='/'>Back to home</Link>
      </h2></center>
     
    </>
  );
}
