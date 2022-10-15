import Link from "next/link";

export default function WebTechnologies() {
  return (
    <>
      <h1>WEB TECHNOLOGIES:A Computer Science Perspective</h1>
      <h3>PURPOSE AND SCOPE</h3>
      <p>
        This textbook is designed to provide a careful introduction to key
        technologies that have been developed as part of the birth and
        maturation of the World Wide Web. My goal is for students using this
        book to understand The Web at a fundamental level, much as students who
        learn assembly language understand computers at such a level. This level
        of understanding should provide a solid foundation on which to build as
        students subsequently learn about higher-level web development tools
        based on the technologies covered here. It should also prepare them well
        for further study of web technologies, both those that exist today and
        those that will be developed in the future.
      </p>
      <p>
        The textbook is designed primarily for use in computer science (CS)
        courses, but other uses are mentioned later. I assume that the reader
        has a background roughly equivalent to the first three semesters of an
        undergraduate CS major. For instance, I expect well-developed skills in
        at least one programming language, familiarity with Java or the
        background and ability to learn it quickly from other sources (no Java
        knowledge is required until the last half of the book), and facility
        with basic data structures, especially trees.
      </p>
      <p>
        I have chosen topics so as to treat the subject with reasonable breadth
        while also allowing for significant depth. With respect to breadth, the
        textbook focuses on technologies that are unlikely to receive detailed
        treatment in nonweb CS courses. Conversely, this book covers only
        lightly a number of topics that, while related to the Web, are not web
        technologies per se and are likely to be covered in other CS courses.
        For instance, while an appendix describes how to connect a Java-based
        web application to a database management system (DBMS), the book does
        not attempt to present SQL or database concepts. Other web-related CS
        topics that are covered narrowly—that is, primarily as they relate
        directly to web technologies—include computer networks, software
        engineering, and security. Finally, because of the emphasis on
        foundational technologies that are fundamentally web-related,
        higher-level development tools (such as Macromedia ,Dreamweaver ) and
        content presentation tools (such as Macromedia, Flash) are not covered.
      </p>
      <p>
        Another scope consideration arises from the fact that, especially when
        it comes to server-side software, several web technologies provide
        similar capabilities, forming a technology class. For example, the
        ASP.NET, ColdFusion , JSPTM, and PHP technologies all occupy the same
        server-side software niche, and each is currently in widespread use.
        Even if time and space allowed all of these technologies to be covered
        in some depth, I suspect that most students would tire of seeing similar
        concepts dressed in several different sets of clothes. So I have chosen
        instead to cover one member of each class in some detail and also to
        provide a high-level comparison of the example technology with other
        widely used members of the class. It seems reasonable to expect that a
        student who understands one technology well will be able to quickly
        adapt to conceptually related technologies as the need arises in the
        future.
      </p>
      <p>
        Along these same lines, for each technology class covered I have chosen
        to use a Javabased representative as the example for the class.The
        Java-based technologies covered in this textbook are available for free
        download and run on all major operating systems. Also, it seems that
        most CS students today know Java or a closely related language, so using
        Java-based software should maximize the time that these students can
        spend learning web technologies themselves as opposed to learning
        programming languages. Finally, the significant use of Java-based web
        technologies in support of many major Web sites would seem to imply that
        knowledge of these technologies may be directly beneficial to many
        students when they join real-world development environments.
      </p>
      <p>
        By limiting its scope as described, my hope is that this book will
        provide readers with a depth of understanding of foundational web
        technologies and concepts that will enable them to develop high-quality
        web applications and avoid many of the common mistakes made by
        less-knowledgeable web developers. Furthermore, my expectation is that
        students using this book will be able to quickly learn and adapt to new
        web technologies as they emerge in the future. I also hope that many of
        them will be well prepared for further research on core web technologies
        and to eventually contribute to the development of new technologies. In
        fact, one of my goals is to provide enough background so that anyone who
        has read this book should be able to subsequently read and understand
        (with a reasonable amount of effort) the primary reference sources for
        the standards and technologies covered. From an instructional point of
        view, this depth of coverage also allows the instructor to assign some
        challenging and interesting homework and projects.
      </p>
      <p>
        While the textbook adopts a CS perspective, many courses taught outside
        CS departments (for example, in information systems/technologies
        programs) cover similar topics and may benefit from using this book as
        either a primary or a reference text. Furthermore, I believe that the
        book may also be helpful to web development professionals who have not
        had much formal training in web technologies. In fact, I initially
        taught myself about the Web on the job at a dot-com, and this book to
        some extent represents “what I wish I’d known.”
      </p>
      <h3>Features</h3>
      <h4>Some of the features on this textbook:</h4>
      <ul>
        <li>Hypertext Transport Protocol (HTTP)</li>
        <li>Extensible HyperText Markup Language (XHTML)</li>
        <li>Cascading Style Sheets (CSS)</li>
        <li>JavaScriptTM language</li>
        <li>Document Object Model (DOM)</li>
        <li>Java servlets</li>
        <li>Extensible Markup Language (XML)</li>
        <li>XML namespaces</li>
        <li>Simple API for XML (SAX)</li>
        <li>XML Path Language (XPath)</li>
        <li>Extensible Stylesheet Language Transformations (XSLT)</li>
        <li>Asynchronous JavaScript and XML (Ajax)</li>
        <li>
          JavaServer PagesTM (JSP) technology, including JavaBeansTM object
          usage
        </li>
        <li>SOAP</li>
        <li>Web Services Definition Language (WSDL)</li>
        <li>XML Schema</li>
        <li>Java API for XML Remote Procedure Call (JAX-RPC)</li>
        <li>Common Gateway Interface (CGI)</li>
        <li>Active Server Pages (ASP) and ASP.NET</li>
        <li>PHP</li>
        <li>ColdFusion technology</li>
        <li>Focus on standards, both formal and de facto.</li>
        <li>
          Detailed coverage of common features in web servers and browsers,
          using Apache Tomcat and MozillaTM software as representative examples.
        </li>
        <li>
          Comprehensive bibliography of authoritative reference materials, all
          of which are freely available on theWeb.
        </li>
        <li>
          Historical perspective sections, providing context for several key web
          technologies.
        </li>
      </ul>

      <h3>Acknowledgments</h3>
      <p>
        This book grew from notes I prepared for a course I taught in the spring
        of 2002. Several students in that course, especially Brian Blackburn,
        Matt Hershberger, Alex Mezhinsky, Jon Stanich, and Amy Ulinski,
        encouraged me to turn those notes into a textbook. If I had known then
        how much work this would entail, I doubt that I would have started! But
        I am certain that I would not have begun without their encouraging
        words. Matt’s work with me during a subsequent independent study was
        also a tremendous help. I also appreciate the comments from a number of
        students on a preliminary version of this textbook, especially Matt
        Caporali, Dan Dressler, Bobbie Johnson, and Steve Schwab. Dave Eland, a
        former professor and colleague without whom I would almost certainly not
        be a computer scientist, also provided useful feedback on an early
        manuscript.
      </p>
      <p>
        I learned a great deal about developing software for theWeb while
        working off and on for Essential Surfing Gear, Inc. from 1996 through
        2000. I’m grateful to Merrick Furst for providing both that opportunity
        and the freedom to research a variety of web technologies, and I thank
        all of my former colleagues for making esgear such a stimulating and fun
        place to work. I also appreciate my “day job” employer, Duquesne
        University, and my former department chairman, Tom Keagy, for being
        supportive of my work with esgear, first as a consultant and ultimately
        full time during a leave of absence from Duquesne. In addition, I
        greatly appreciate the later sabbatical from Duquesne that allowed me to
        write the bulk of this book.
      </p>

      <h1>CHAPTER 1</h1>
      <h3>Web Essentials Clients, Servers, and Communication</h3>
      <p>
        The essential elements of the World Wide Web are the web browsers used
        to surf the Web, the server systems used to supply information to these
        browsers, and the computer networks supporting browser-server
        communication. This chapter will provide an overview of all of these
        elements. We’ll begin by considering communication, with a focus on the
        Internet and some of its key communication protocols, especially the
        Hypertext Transport Protocol used for the bulk of web communication. The
        chapter also reviews features common to modern web browsers and
        introduces web servers, the software applications that provide web pages
        to browsers.
      </p>

      <h3>1.1 The Internet</h3>
      <p>
        “So, you’re into computers. Maybe you can answer a question I’ve had for
        a while: I hear people talk about the Internet, and I’m not sure exactly
        what it is, or where it came from. Can you tell me?”
      </p>
      <p>
        You may have already been asked a question like this. If not, if you
        work with computers long enough, you’ll probably hear it at least once
        in your career, and more likely several times. At this point in your
        career, you may even be curious about the Internet yourself: you use it
        a lot, but what exactly is it?
      </p>
      <p>
        The Internet traces its roots to a project of the U.S. Department of
        Defense’s then named Advanced Research Projects Agency, orARPA.
        TheARPANET project was intended to support DoD research on computer
        networking. As this project began in the late 1960s, there had been only
        a few small experimental networks providing communication between
        geographically dispersed computers from different manufacturers running
        different operating systems. The purpose of ARPANET was to create a
        larger such network, both in order to electronically connect
        DoD-sponsored researchers and in order to experiment with and develop
        tools for heterogeneous computer networking.
      </p>
      <p>
        The ARPANET computer network was launched in 1969 and by year’s end
        consisted of four computers at four sites running four different
        operating systems. ARPANET grew steadily, but because it was restricted
        to DoD-funded organizations and was a research project, it was never
        large. By 1983, when many ARPANET nodes were split off to form a
        separate network called MILNET, there were only 113 nodes in the entire
        network, and these were primarily at universities and other
        organizations involved in DoD-sponsored research.
      </p>
      <center><h2 className='title'>
        <Link href='/'>Back To Home</Link>
      </h2></center>
      
    </>
  );
}
