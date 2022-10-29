import Link from "next/link";

export default function React() {
  return (
    <>
      <h1>REACT</h1>
      <p>
        React is a free and open-source front-end JavaScript library for
        building user interfaces based on UI components. It is maintained by
        Meta (formerly Facebook) and a community of individual developers and
        companies.React can be used as a base in the development of single-page,
        mobile, or server-rendered applications with frameworks like Next.js.
        However, React is only concerned with state management and rendering
        that state to the DOM, so creating React applications usually requires
        the use of additional libraries for routing, as well as certain
        client-side functionality
      </p>
      <h3>History</h3>
      <p>
        React was created by Jordan Walke, a software engineer at Facebook, who
        released an early prototype of React called FaxJS.He was influenced by
        XHP, an HTML component library for PHP. It was first deployed on
        Facebooks News Feed in 2011 and later on Instagram in 2012.It was
        open-sourced at JSConf US in May 2013. React Native, which enables
        native Android, iOS, and UWP development with React, was announced at
        Facebooks React Conf in February 2015 and open-sourced in March 2015.On
        April 18, 2017, Facebook announced React Fiber, a new set of internal
        algorithms for rendering, as opposed to Reacts old rendering algorithm,
        Stack.React Fiber was to become the foundation of any future
        improvements and feature development of the React library.The actual
        syntax for programming with React does not change; only the way that the
        syntax is executed has changed.Reacts old rendering system, Stack, was
        developed at a time when the focus of the system on dynamic change was
        not understood. Stack was slow to draw complex animation, for example,
        trying to accomplish all of it in one chunk. Fiber breaks down animation
        into segments that can be spread out over multiple frames. Likewise, the
        structure of a page can be broken into segments that may be maintained
        and updated separately. JavaScript functions and virtual DOM objects are
        called fibers, and each can be operated and updated separately,
        allowing for smoother on-screen rendering.
      </p>

      <h4>
        When building single-page apps, there are three major issues that youll
        encounter:
      </h4>
      <ul>
        <li>
          In a single-page application, the bulk of your time will be spent
          keeping your data in sync with your UI. For example, if a user loads
          new content, do we explicitly clear out the search field? Do we keep
          the active tab on a navigation element still visible? Which elements
          do we keep on the page, and which do we destroy? These are all
          problems unique to single-page apps. When navigating between pages in
          the old model, we just assumed everything in our UI would be destroyed
          and just built back up again. This was never a problem.
        </li>
        <li>
          Manipulating the DOM is really REALLY slow. Manually querying
          elements, adding children, removing subtrees, and performing other DOM
          operations are some of the slowest things you can do in your browser.
          Unfortunately, in a single-page app, youll be doing a lot of this.
          Manipulating the DOM is the primary way you are able to respond to
          user actions and display new content.
        </li>
        <li>
          Working with HTML templates can be a pain. Navigation in a single-page
          app is nothing more than you dealing with fragments of HTML to
          represent whatever it is you wish to display. These fragments of HTML
          are often known as templates, and using JavaScript to manipulate them
          and fill them out with data gets really complicated really quickly.
        </li>
      </ul>

      <h3>Meet React</h3>
      <p>
        Facebook (and Instagram) decided that enough is enough. Given their
        abundance of experience with single-page apps, they released a library
        called React to not only address these shortcomings, but to also change
        how we think about building single-page apps.
      </p>
      <p>
        Because DOM modifications are really slow, you never modify the DOM
        directly using React. Instead, you modify an in-memory virtual DOM
        instead. Figure 1-8 symbolizes that in-memory virtual DOM.Manipulating
        this virtual DOM is extremely fast, and React takes care of updating the
        real DOM when the time is right. It does so by comparing the changes
        between your virtual DOM and the real DOM, figuring out which changes
        actually matter, and making the least amount of DOM changes needed to
        keep everything up-to-date in a process called reconciliation.
      </p>

      <h3>APIs to Create Truly Composable UIs</h3>
      <p>
        Instead of treating the visual elements in your app as one monolithic
        chunk, React encourages you to break your visual elements into smaller
        and smaller components. Just like everything else in programming, it is
        a good idea to have things be modular, compact, and self-contained.
        React extends that well-established idea to how we should think about
        user interfaces as well. Many of Reacts core APIs make it easier to
        create smaller visual components that can later be combined with other
        visual components to make larger and more complex visual components—kind
        of like Russian Matryoshka dolls
      </p>

      <h3>Visuals Defined Entirely in JavaScript</h3>
      <p>
        While this sounds ridiculously crazy and outrageous, hear me out.
        Besides using a really weird syntax, HTML templates traditionally
        suffered from another major problem. The variety of things you can do
        inside them other than simply displaying data is limited. If you wanted
        to choose which piece of UI to display based on a particular condition,
        for example, you had to write JavaScript somewhere else in your app or
        use some weird framework-specific templating command to make it work.
      </p>
      <p>
        What React does is pretty neat. By having your UI defined entirely in
        JavaScript, you get to use all of the rich functionality JavaScript
        provides for doing all sorts of things inside your templates (as you
        will see in a few chapters). You are limited only by what JavaScript
        supports as opposed to any limitations imposed by your templating
        framework. Now, when you think of visuals defined entirely in
        JavaScript, you are probably thinking something horrible involving
        quotation marks, escape characters, and a whole lot of createElement
        calls. Dont worry. React gives you the option to specify your visuals
        using an HTML-like syntax known as JSX that lives fully alongside your
        JavaScript. Instead of writing code to define your UI, you are basically
        specifying markup:
      </p>

      <p>
        By using JSX, you are able to define your visuals very easily using a
        syntax that is very familiar, while still getting all the power and
        flexibility that JavaScript provides. Best of all, in React, your
        visuals and JavaScript often live in the same location. You no longer
        have to jump between multiple files to define the look and behavior of
        one visual component. This is templating done right.
      </p>

      <h3>Just the V in an MVC Architecture</h3>
      <p>
        React is not a full-fledged framework that has an opinion on how
        everything in your app should behave. Instead, React works primarily in
        the View layer where all of its worries and concerns revolve around your
        visual elements and keeping them up to date. This means you are free to
        use whatever you want for the M and C part of your MVC architecture.
        This flexibility enables you to pick and choose what technologies you
        are familiar with, and this makes React useful not only for new web apps
        you create but also for existing apps youd like to enhance without
        removing and refactoring a whole bunch of code.
      </p>

      <h3>Dealing With JSX</h3>
      <p>
        Before we start building our app, there is an important thing we should
        cover first. React isnt like many JavaScript libraries you may have
        used. It isnt very happy when you simply refer to code youve written
        for it using a script tag. React is annoyingly special that way, and it
        has to do with how React apps are built. As you know, your web apps (and
        everything else your browser displays) are made up of HTML, CSS, and
        JavaScript.It doesnt matter if your web app was written using React or
        some other library like Angular, Knockout, or jQuery. The end result has
        to be some combination of HTML, CSS, and JavaScript. Otherwise, your
        browser really wont know what to do.
      </p>
      <p></p>

      <center>
       
        <h2 className='title'>
          <Link href='/'>Back to home</Link>
        </h2>
      </center>
    </>
  );
}
