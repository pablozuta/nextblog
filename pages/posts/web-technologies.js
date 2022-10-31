import Link from "next/link";

export default function WebTechnologies() {
  return (
    <>
      <h3>Features</h3>
      <h4>Some of the features on this textbook:</h4>
      <ul>
        <li>Hypertext Transport Protocol (HTTP)</li>
        <li>Extensible HyperText Markup Language (XHTML)</li>
        <li>Cascading Style Sheets (CSS)</li>
        <li>JavaScript language</li>
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
        words. Matts work with me during a subsequent independent study was also
        a tremendous help. I also appreciate the comments from a number of
        students on a preliminary version of this textbook, especially Matt
        Caporali, Dan Dressler, Bobbie Johnson, and Steve Schwab. Dave Eland, a
        former professor and colleague without whom I would almost certainly not
        be a computer scientist, also provided useful feedback on an early
        manuscript.
      </p>
      <p>
        I learned a great deal about developing software for theWeb while
        working off and on for Essential Surfing Gear, Inc. from 1996 through
        2000. Im grateful to Merrick Furst for providing both that opportunity
        and the freedom to research a variety of web technologies, and I thank
        all of my former colleagues for making esgear such a stimulating and fun
        place to work. I also appreciate my day job employer, Duquesne
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
        elements. Well begin by considering communication, with a focus on the
        Internet and some of its key communication protocols, especially the
        Hypertext Transport Protocol used for the bulk of web communication. The
        chapter also reviews features common to modern web browsers and
        introduces web servers, the software applications that provide web pages
        to browsers.
      </p>

      <h3>1.1 The Internet</h3>
      <p>
        “So, youre into computers. Maybe you can answer a question Ive had for a
        while: I hear people talk about the Internet, and Im not sure exactly
        what it is, or where it came from. Can you tell me?”
      </p>
      <p>
        You may have already been asked a question like this. If not, if you
        work with computers long enough, youll probably hear it at least once in
        your career, and more likely several times. At this point in your
        career, you may even be curious about the Internet yourself: you use it
        a lot, but what exactly is it?
      </p>
      <p>
        The Internet traces its roots to a project of the U.S. Department of
        Defenses then named Advanced Research Projects Agency, orARPA.
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
        The ARPANET computer network was launched in 1969 and by years end
        consisted of four computers at four sites running four different
        operating systems. ARPANET grew steadily, but because it was restricted
        to DoD-funded organizations and was a research project, it was never
        large. By 1983, when many ARPANET nodes were split off to form a
        separate network called MILNET, there were only 113 nodes in the entire
        network, and these were primarily at universities and other
        organizations involved in DoD-sponsored research.
      </p>
      <p>
        Despite the relatively small number of machines actually on the ARPANET,
        the benefits of networking were becoming known to a wide audience. For
        example, e-mail was available on ARPANET beginning in 1972, and it soon
        became an extremely popular application for those who had ARPANET
        access. It wasnt long before other networks were being built, both
        internationally and regionally within the United States. The regional
        U.S. networks were often cooperative efforts between universities. As
        one example, SURAnet (Southeastern University Research Association
        Network)was organized by the University of Maryland beginning in 1982
        and eventually included essentially all of the major universities and
        research institutions in the southeastern United States. Another of
        these networks, CSNET (Computer Science Network), was partially funded
        by the U.S. National Science Foundation (NSF) to aid scientists at
        universities without ARPANET access, laying the groundwork for future
        network developments that well say more about in a moment.
      </p>
      <p>
        While these other networks were springing up, the ARPANET project
        continued to fund research on networking. Several of the most widely
        used Internet protocols— including the File Transfer Protocol (FTP) and
        Simple Mail Transfer Protocol (SMTP), which underlie many of the
        Internets file transfer and e-mail operations, respectively— were
        initially developed under ARPANET. But perhaps most crucial to the
        emergence of the Internet as we know it was the development of the
        TCP/IP (Transmission Control Protocol/Internet Protocol) communication
        protocol. TCP/IP was designed to be used for host-to-host communication
        both within local area networks (that is, networks of computers that are
        typically in close proximity to one another, such as within a building)
        and between networks. ARPANET switched from using an earlier protocol to
        TCP/IP during 1982. At around the same time, an ARPA Internet was
        created, allowing computers on some outside networks such as CSNET to
        communicate via TCP/IP with computers on the ARPANET.
      </p>
      <p>
        A “connection” from CSNET to the ARPA Internet often meant that a modem
        connection was made from one computer to another for the purpose of
        sending along an e-mail message. This form of communication was
        asynchronous. That is, the e-mail might be delayed some time before it
        was actually delivered, which precluded interactive communication of any
        type. Furthermore, each institution connecting to CSNET was largely on
        its own in determining how it was going to connect to the network. At
        first, many institutions connected through the so-called PhoneNet
        (modem) approach for passing e-mail messages. This generally involved
        long distance calls, and the expense of these calls could be a problem.
        Other options, such as leasing telephone lines for dedicated use, could
        be even more expensive. It was obvious to everyone that the CSNET
        institutions were still not enjoying all the potential benefits of the
        ARPA Internet.
      </p>
      <p>
        Beginning in 1985, the NSF began work on a new network based on TCP/IP,
        called NSFNET. One of the primary goals of this network was to connect
        the NSF’s new regional supercomputing centers. But it was also decided
        that regional networks should be able to connect to NSFNET, so that the
        NSFNET would provide a backbone through which other networks could
        interconnect synchronously. Figure 1.1 shows the geographic distribution
        of the six supercomputer centers connected by the early NSFNET backbone.
        Regional networks connecting to the backbone included SURAnet as well as
        NYSERNet (with primary connections through the Ithaca center), JvNCnet
        (with primary connection through the Princeton center) and SDSCnet (with
        primary connection through the San Diego center). In addition, many
        universities and other organizations connected to the NSFNET backbone
        either directly or through agreements with other institutions that had
        NSFNET access, either directly or indirectly.
      </p>
      <p>
        The original backbone operated at only 56 kbit/s, the maximum speed of a
        home dial-up line today. But at the time the primary network traffic was
        still textual, so this was a reasonable starting point. Once
        operational, the number of machines connected to NSFNET grew quickly, in
        part because the NSF directly or indirectly provided significant
        support— both technically and with monetary grants—to educational and
        research organizations that wished to connect. The backbone rate was
        upgraded to 1.5 Mbit/s (T1) in 1988 and then to 45 Mbit/s (T3) in 1991.
        Furthermore, the backbone was expanded to directly include several
        research networks in addition to the supercomputer centers, making it
        that much easier for sites near these research networks to connect to
        the NSFNET. In 1988, networks in Canada and France were connected to
        NSFNET; in each succeeding year for the remaining seven years of
        NSFNETs existence, networks from 10 or so new countries were added per
        year.
      </p>

      <p>
        NSFNET quickly supplanted ARPANET, which was officially decommissioned
        in 1990. At this point, NSFNET was at the center of the Internet, that
        is, the collection of computer networks connected via the public
        backbone and communicating across networks using TCP/IP. This same year,
        commercial Internet dial-up access was first offered. But the NSFNET
        terms of usage stipulated that purely commercial traffic was not to be
        carried over the backbone: the purpose of the Internet was still, in the
        eyes of the NSF, research and education.
      </p>
      <p>
        Increasingly, though, it became clear that there could be significant
        benefits to allowing commercial traffic on the Internet as well. One of
        the arguments for allowing commercial traffic was economic: commercial
        traffic would increase network usage, leading to reduced unit costs
        through economies of scale. This in turn would provide a less expensive
        network for research and educational purposes. Whatever the motivation,
        the restriction on commercial traffic was rescinded in 1991, spurring
        further growth of the Internet and laying the groundwork for the
        metamorphosis of the Internet from a tool used primarily by scientists
        at research institutions to the conduit for information, entertainment,
        and commerce that we know today. This also led fairly quickly to the NSF
        being able to leave its role as the operator of the Internet backbone in
        the United States. Those responsibilities were assumed by private
        telecommunication firms in 1995. These firms are paid by other firms,
        such as some of the larger Internet service providers (ISPs), who
        connect directly with the Internet backbone. These ISPs, in turn, are
        paid by their users, which may include smaller ISPs as well as end
        users.
      </p>
      <p>
        In summary, the Internet is the collection of computers that can
        communicate with one another using TCP/IP over an open, global
        communications network. Before describing how theWorldWideWeb is related
        to the Internet, well take a closer look at several of the key Internet
        protocols. This will be helpful in understanding the place of the Web
        within the wider Internet.
      </p>

      <center>
        <h2 className='title'>
          <Link href='/'>Back To Home</Link>
        </h2>
      </center>
    </>
  );
}
