import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <div className="navbar">
      <Link href='/posts/web-technologies'>WEB TECHNOLOGIES</Link>
      <Link href='/posts/react'>REACT</Link>
      <Link href='/posts/astro'>ASTRO</Link>
      <Link href='/posts/react-router'>REACT ROUTER</Link>
      <Link href='/posts/glosary'>GLOSARY</Link>
      </div>
      
    
      <h3>Development and Production Environments</h3>

      <p>
        You can think of environments as the context in which your code is
        running. During development, you’re building and running the application
        on your local machine. Going to production is the process of making your
        application ready to be deployed and consumed by users.
      </p>
      <p>
        In the development stage, Next.js optimizes for the developer and their
        experience building the application. It comes with features that aim to
        improve the Developer Experience such the TypeScript and ESLint
        integration, Fast Refresh, and more. In the production stage, Next.js
        optimizes for the end-users, and their experience using the application.
        It aims to transform the code to make it performant and accessible.
        Since each environment has different considerations and goals, there is
        a lot that needs to be done to move an application from development to
        production. For instance, the application code needs to be compiled,
        bundled, minified, and code split.
      </p>

      <h3>The RUST Compiler</h3>
      <p>
        Next.js handles much of these code transformations and underlying
        infrastructure to make it easier for your application to go to
        production.This is made possible because Next.js has a compiler written
        in Rust, a low-level programming language, and SWC, a platform that can
        be used for compilation, minification, bundling, and more.
      </p>

      <h3>What is Compiling?</h3>

      <p>
        Developers write code in languages that are more developer-friendly such
        as JSX, TypeScript, and modern versions of JavaScript. While these
        languages improve the efficiency and confidence of developers, they need
        to be compiled into JavaScript before browsers can understand
        them.Compiling refers to the process of taking code in one language and
        outputting it in another language or another version of that language.In
        Next.js, compilation happens during the development stage as you edit
        your code, and as part of the build step to prepare your application for
        production.
      </p>

      <h3>What is Minifying?</h3>
      <p>
        Developers write code that is optimized for human readability. This code
        might contain extra information that is not necessary for the code to
        run, such as comments, spaces, indents, and multiple lines.Minification
        is the process of removing unnecessary code formatting and comments
        without changing the code’s functionality. The goal is to improve the
        application’s performance by decreasing file sizes.In Next.js,
        JavaScript and CSS files are automatically minified for production.
      </p>

      <h3>What is Bundling?</h3>
      <p>
        Developers break up their application into modules, components, and
        functions that can be used to build larger pieces of their application.
        Exporting and importing these internal modules, as well as external
        third-party packages, creates a complex web of file
        dependencies.Bundling is the process of resolving the web of
        dependencies and merging (or ‘packaging’) the files (or modules) into
        optimized bundles for the browser, with the goal of reducing the number
        of requests for files when a user visits a web page.
      </p>
      <h3>What is Code Splitting?</h3>
      <p>
        Developers usually split their applications into multiple pages that can
        be accessed from different URLs. Each of these pages becomes a unique
        entry point into the application. Code-splitting is the process of
        splitting the application’s bundle into smaller chunks required by each
        entry point. The goal is to improve the application's initial load time
        by only loading the code required to run that page.Next.js has built-in
        support for code splitting. Each file inside your pages/ directory will
        be automatically code split into its own JavaScript bundle during the
        build step.
      </p>
      <p>Further:</p>
      <ul>
        <li>
          Any code shared between pages is also split into another bundle to
          avoid re-downloading the same code on further navigation.
        </li>
        <li>
          After the initial page load, Next.js can start pre-loading the code of
          other pages users are likely to navigate to.
        </li>
        <li>
          Dynamic imports are another way to manually split what code is
          initially loaded.
        </li>
      </ul>

      <h3>Build Time and Runtime</h3>
      <p>
        Build time (or build step) is the name given to a series of steps that
        prepare your application code for production.When you build your
        application, Next.js will transform your code into production-optimized
        files ready to be deployed to servers and consumed by users. These files
        include:
      </p>
      <ul>
        <li>HTML files for statically generated pages</li>
        <li>JavaScript code for rendering pages on the server</li>
        <li>JavaScript code for making pages interactive on the client</li>
        <li>CSS files</li>
      </ul>
      <p>
        Runtime (or request time) refers to the period of time when your
        application runs in response to a user’s request, after your application
        has been built and deployed.
      </p>

      <h3>Client and Server</h3>
      <p>
        In the context of web applications, the client refers to the browser on
        a user’s device that sends a request to a server for your application
        code. It then turns the response it receives from the server into an
        interface the user can interact with.
      </p>
      <p>
        Server refers to the computer in a data centre that stores your
        application code, receives requests from a client, does some
        computation, and sends back an appropriate response.
      </p>
      <h3>What is Rendering?</h3>
      <p>
        There is an unavoidable unit of work to convert the code you write in
        React into the HTML representation of your UI. This process is called
        rendering. Rendering can take place on the server or on the client. It
        can happen either ahead of time at build time, or on every request at
        runtime. With Next.js, three types of rendering methods are available:
        Server-Side Rendering, Static Site Generation, and Client-Side
        Rendering.
      </p>

      <h4>Pre-Rendering</h4>
      <p>
        Server-Side Rendering and Static Site Generation are also referred to as
        Pre-Rendering because the fetching of external data and transformation
        of React components into HTML happens before the result is sent to the
        client.
      </p>

    

      <h4>Client-Side Rendering vs. Pre-Rendering</h4>
      <p>
        In a standard React application, the browser receives an empty HTML
        shell from the server along with the JavaScript instructions to
        construct the UI. This is called client-side rendering because the
        initial rendering work happens on the user's device.
      </p>

      <p>
        In contrast, Next.js pre-renders every page by default. Pre-rendering
        means the HTML is generated in advance, on a server, instead of having
        it all done by JavaScript on the user's device. In practice, this means
        that for a fully client-side rendered app, the user will see a blank
        page while the rendering work is being done. Compared to a pre-rendered
        app, where the user will see the constructed HTML
      </p>

      <h3>Server-Side Rendering</h3>
      <p>
        With server-side rendering, the HTML of the page is generated on a
        server for each request. The generated HTML, JSON data, and JavaScript
        instructions to make the page interactive are then sent to the client.
        On the client, the HTML is used to show a fast non-interactive page,
        while React uses the JSON data and JavaScript instructions to make
        components interactive (for example, attaching event handlers to a
        button). This process is called hydration. In Next.js, you can opt to
        server-side render pages by using getServerSideProps.
      </p>
      <h3>Static Site Generation</h3>
      <p>
        With Static Site Generation, the HTML is generated on the server, but
        unlike server-side rendering, there is no server at runtime. Instead,
        content is generated once, at build time, when the application is
        deployed, and the HTML is stored in a CDN and re-used for each request.
        In Next.js, you can opt to statically generate pages by using
        getStaticProps.{" "}
      </p>
      <p>
        Note: You can use Incremental Static Regeneration to create or update
        static pages after you’ve built your site. This means you do not have to
        rebuild your entire site if your data changes.
      </p>
      <p>
        The beauty of Next.js is that you can choose the most appropriate
        rendering method for your use case on a page-by-page basis, whether
        that's Static Site Generation, Server-side Rendering, or Client-Side
        Rendering. To learn more about which rendering method is right for your
        specific use case, see the data fetching docs.
      </p>
      <h3>What is the Network?</h3>
      <p>
        It’s helpful to know where your application code is stored and run once
        it’s deployed to the network. You can think of the network as linked
        computers (or servers) capable of sharing resources. In the case of a
        Next.js application, your application code can be distributed to origin
        servers, Content Delivery Networks (CDNs), and the Edge.
      </p>
      <h3>Origin Servers</h3>
      <p>
        As we discussed earlier, the server refers to the main computer that
        stores and runs the original version of your application code.We use the
        term origin to distinguish this server from the other places application
        code can be distributed to, such as CDN servers and Edge servers.When an
        origin server receives a request, it does some computation before
        sending a response. The result of this computation work can be moved to
        a CDN (Content Delivery Network).
      </p>
      <h3>Content Delivery Network</h3>
      <p>
        CDNs store static content (such as HTML and image files) in multiple
        locations around the world and are placed between the client and the
        origin server. When a new request comes in, the closest CDN location to
        the user can respond with the cached result.
      </p>
      <p>
        This reduces the load on the origin because the computation doesn’t have
        to happen on each request. It also makes it faster for the user because
        the response comes from a location geographically closer to them. In
        Next.js, since pre-rendering can be done ahead of time, CDNs are well
        suited to store the static result of the work - making content delivery
        faster.
      </p>
      <h3>The Edge</h3>
      <p>
        The Edge is a generalized concept for the fringe (or edge) of the
        network, closest to the user. CDNs could be considered part of "the
        Edge" because they store static content at the fringe (edge) of the
        network. Similar to CDNs, Edge servers are distributed to multiple
        locations around the world. But unlike CDNs, which store static content,
        some Edge servers can run code. This means both caching and code
        execution can be done at the Edge closer to the user. By running code at
        the Edge, you can move some of the work that was traditionally done
        client-side or server-side to the Edge (see examples with Next.js here).
        This can make your application more performant because it reduces the
        amount of code sent to the client, and part of the user's request does
        not have to go all the way back to the origin server - thus reducing
        latency. In Next.js, you can run code at the Edge with Middleware, and
        soon with React Server Components.
      </p>


      <center>
        <img
          src='https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png'
          alt=''
        />{" "}
      </center>

      <h3>Wikipedia</h3>
      <p>
        Next.js is an open-source web development framework created by Vercel
        enabling React-based web applications with server-side rendering and
        generating static websites. React documentation mentions Next.js among
        "Recommended Toolchains" advising it to developers as a solution when
        "Building a server-rendered website with Node.js".Where traditional
        React apps can only render their content in the client-side browser,
        Next.js extends this functionality to include applications rendered on
        the server-side.The copyright and trademarks for Next.js are owned by
        Vercel, which also maintains and leads its open-source development.
      </p>

      <h3>Background</h3>

      <p>
        Next.js is a React framework that enables several extra features,
        including server-side rendering and generating static websites.React is
        a JavaScript library that is traditionally used to build web
        applications rendered in the client's browser with JavaScript.Developers
        recognize several problems with this strategy however, such as not
        catering to users who do not have access to JavaScript or have disabled
        it, potential security issues, significantly extended page loading
        times, and harm to the site's overall search engine
        optimization.Frameworks such as Next.js sidestep these problems by
        allowing some or all of the website to be rendered on the server-side
        before being sent to the client.Next.js is one of the most popular
        frameworks for React.It is one of several recommended "toolchains"
        available when starting a new app, all of which provide a layer of
        abstraction to aid in common tasks.Next.js requires Node.js and can be
        initialized using Node Package Manager.
      </p>
      <p>
        Google has contributed to the Next.js project, contributing 43 pull
        requests in 2019, where they helped in pruning unused JavaScript,
        reducing loading time, and adding improved metrics.As of March 2022, the
        framework is used by many large websites, including Walmart, Apple,
        Nike, Netflix, TikTok, Uber, Lyft, and Starbucks.In early 2020, it was
        announced that Vercel had secured twenty-one million dollars in Series A
        funding to support improvements to the software.The framework's original
        author, Guillermo Rauch, is currently the CEO of Vercel, and the
        project's lead maintainer is Tim Neutkens.
      </p>

      <h3>Development History</h3>
      <p>
        Next.js was first released as an open-source project on GitHub on
        October 25, 2016; 5 years ago.It was originally developed based on six
        principles: out-of-the-box functionality requiring no setup, JavaScript
        everywhere, all functions are written in JavaScript, automatic
        code-splitting and server-rendering, configurable data-fetching,
        anticipating requests, and simplifying deployment.Next.js 2.0 was
        announced in March 2017 including several improvements that made it
        easier to work with small websites. It also increased the build
        efficiency and improved the scalability of the hot-module replacement
        feature.Version 7.0 was released in September 2018 with improved error
        handling and support for React's context API for improved dynamic route
        handling. This was also the first version to upgrade to webpack
        4.Version 8.0 was released in February 2019 and was the first version to
        offer serverless deployment of applications, in which the code is split
        up into lambda functions that are run on demand. The version also
        reduced the time and resources required for static exports and improved
        prefetch performance.Version 9.3, announced in March 2020, included
        various optimizations and global Sass and CSS module support.On July 27,
        2020 Next.js version 9.5 was announced, adding new capabilities
        including incremental static regeneration, rewrites, and redirect
        support.On June 15, 2021 Next.js version 11 was released, introducing
        among others: Webpack 5 support, preview of real-time collaborative
        coding functionality "Next.js Live", and experimental function of
        automatic conversion from Create React App to Next.js compatible form
        "Create React App Migration".On October 26, 2021, Next.js 12 was
        released, adding a Rust compiler, making the compilation faster, AVIF
        support, Edge Functions & Middleware, and Native ESM & URL Imports.
      </p>

      <h3>Styling And Features</h3>
      <p>
        Next.js supports styling with CSS as well as precompiled Scss and Sass,
        CSS-in-JS, and styled JSX.In addition, it is built with TypeScript
        support and smart bundling.The open-source transpiler Babel is used to
        transform and compile code into JavaScript usable by a browser. Webpack,
        another open-source tool, is used to bundle the modules afterward. All
        of these tools are used with npm in a terminal. The main feature of
        Next.js is its use of server-side rendering to reduce the burden on web
        browsers and provide enhanced security. This can be done for any part of
        the application or the entire project, allowing for content-rich pages
        to be singled out for server-side rendering.It can also be done only for
        first-time visitors, to reduce the burden on web browsers that have yet
        to download any of the site's assets.The "hot reloading" feature detects
        changes as they are made and re-renders the appropriate pages so the
        server avoids the need to be restarted. This allows changes made to the
        application code to be immediately reflected in the web browser, though
        some browsers will require the page to be refreshed.The software uses
        page-based routing for developer convenience and includes support for
        dynamic routing. Other features include hot-module replacement so that
        modules can be replaced live, automatic code splitting, which only
        includes code necessary to load the page, and page prefetching to reduce
        load time.Next.js also supports Incremental Static Regeneration and
        static site generation - a compiled version of the website is usually
        built during build time and saved as a .next folder. When a user makes a
        request, the pre-built version which are static HTML pages are cached
        and sent to them. This makes the load time very fast, but it's not
        suitable for every website because for interactive sites that change
        often and utilize a lot of user input will not be suitable.
      </p>

     
     

    </div>
  );
}
