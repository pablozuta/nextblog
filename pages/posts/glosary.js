import Link from "next/link";

export default function Glosary() {
  return (
    <>
      <h1>Glosary</h1>
      <h3>Middleware</h3>
      <p>
        Middleware allows you to run code before a request is completed, then
        based on the incoming request, you can modify the response by rewriting,
        redirecting, adding headers, or setting cookies. Middleware runs before
        cached content, so you can personalize static files and pages. Common
        examples of Middleware would be authentication, A/B testing, localized
        pages, bot protection, and more. Regarding localized pages, you can
        start with i18n routing and implement Middleware for more advanced use
        cases.
      </p>

      <h3>Hydration (React)</h3>
      <p>
        React hydration is a technique used that is similar to rendering, but
        instead of having an empty DOM to render all of our react components
        into, we have a DOM that has already been built, with all our components
        rendered as HTML.
      </p>

      <h3>Islands Architecture</h3>
      <p>
        The islands architecture encourages small, focused chunks of
        interactivity within server-rendered web pages. The output of islands is
        progressively enhanced HTML, with more specificity around how the
        enhancement occurs. Rather than a single application being in control of
        full-page rendering, there are multiple entry points. The script for
        these islands of interactivity can be delivered and hydrated
        independently, allowing the rest of the page to be just static HTML.
      </p>
      <h3>Rule of Least Power</h3>
      <p>
        In programming, the rule of least power is a design principle that
        suggests choosing the least powerful [computer] language suitable for a
        given purpose
      </p>
      <p>
        Many Web technologies are designed to exploit the Rule of Least Power.
        HTML is intentionally designed not to be a full programming language, so
        that many different things can be done with an HTML document: software
        can present the document in various styles, extract tables of contents,
        index it, and so on. Similarly, CSS is a declarative styling language
        that is easily analyzed. The Semantic Web is an attempt, largely, to map
        large quantities of existing data onto a common language so that the
        data can be analyzed in ways never dreamed of by its creators.
      </p>

      <center>
        <h1 className='title'>
          <Link href='/'>Back To Home</Link>
        </h1>
      </center>
    </>
  );
}
