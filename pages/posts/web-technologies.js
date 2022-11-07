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
        NSFNET; in each succeeding year for the remaining seven years of NSFNETs
        existence, networks from 10 or so new countries were added per year.
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
      <h3>1.2 Basic Internet Protocols</h3>
      <p>
        Before covering specific protocols, it may be helpful to explain exactly
        what the term “protocol” means in the context of networked
        communication. A computer communication protocol is a detailed
        specification of how communication between two computers will be carried
        out in order to serve some purpose. For example, as we will learn, the
        Internet Protocol specifies both the high-level behavior of software
        implementing the protocol and the low-level details such as the specific
        fields of information that will be contained in a communication message,
        the order in which these fields will appear, the number of bits in each
        field, and how these bits should be interpreted. We are primarily
        interested in a high-level view of general-purpose Internet protocols in
        this section; we’ll look at a key Web protocol, HTTP, in more detail in
        the next section.
      </p>
      <h3>1.2.1 TCP/IP</h3>
      <p>
        Since TCP/IP is fundamental to the definition of the Internet, it’s
        natural to begin our study of Internet protocols with these protocols.
        Yes, I said protocols (plural), because although so far I have treated
        TCP/IP as if it were a single protocol, TCP and IP are actually two
        different protocols. The reason that they are often treated as one is
        that the bulk of the services we associate with the Internet—e-mail, Web
        browsing, file downloads, accessing remote databases—are built on top of
        both the TCP and IP protocols. But in reality, only one of these
        protocols—IP, the Internet Protocol—is fundamental to the definition of
        the Internet. So we’ll begin our study of Internet protocols with IP.
      </p>
      <p>
        A key element of IP is the IP address, which is simply a 32-bit number.
        At any given moment, each device on the Internet has one or more IP
        addresses associated with it (although the device associated with a
        given address may change over time). IP addresses are normally written
        as a sequence of four decimal numbers separated by periods (called
        “dots”), as in 192.0.34.166. Each decimal number represents one byte of
        the IP address.
      </p>
      <p>
        The function of IP software is to transfer data from one computer (the
        source) to another computer (the destination). When an application on
        the source computer wants to send information to a destination, the
        application calls IP software on the source machine and provides it with
        data to be transferred along with an IP address for each of the source
        and destination computers. The IP software running on the source creates
        a packet, which is a sequence of bits representing the data to be
        transferred along with the source and destination IP addresses and some
        other header information, such as the length of the data. If the
        destination computer is on the same local network as the source, then
        the IP software will send the packet to the destination directly via
        this network. If the destination is on another network, the IP software
        will send the packet to a gateway, which is a device that is connected
        to the source computer’s network as well as to at least one other
        network. The gateway will select a computer on one of the other networks
        to which it is attached and send the packet on to that computer. This
        process will continue, with the packet going through perhaps a dozen or
        more hops, until the packet reaches the destination computer. IP
        software on that computer will receive the packet and pass its data up
        to an application that is waiting for the data.
      </p>
      <p>For example, returning to the Internet as it existed in the mid-1980s, suppose that
a computer in the SURAnet network (say, at the University of Delaware) was a packet
source and that a computer in a network directly connected to the NSFNET backbone at
San Diego (say, at the San Diego Supercomputer Center) was the destination. The IP packet
would first go through the Delaware local computer network to a gateway device connecting
the Delaware network to SURAnet. The gateway device would then send the packet on to
another SURAnet gateway device (how this gateway is chosen is discussed later in this
subsection) until it reached a gateway on the NSFNET backbone at Ithaca (the primary
SURAnet connection to the NSFNET backbone). As there was no direct connection from
Ithaca to San Diego in the NSFNET at the time (Figure 1.1), the packet would need to
go through at least one other gateway on the NSFNET backbone before reaching the San
Diego node. From there, it would be passed to the San Diego Supercomputer Center local
network, and from there on to the destination machine.</p>
<p>The sequence of computers that a packet travels through from source to destination
is known as its route. How does each computer choose the next computer in the route for a
packet? A separate protocol (the current standard is BGP-4, the Border Gateway Protocol)
is used to pass network connectivity information between gateways so that each can choose
a good next hop for each packet it receives.</p>
<p>IP software also adds some error detection information (a checksum) to each packet it
creates, so that if a packet is corrupted during transmission, this can usually be detected by
the recipient. The IP standard calls for IP software to simply discard any corrupted packets.
Thus, IP-based communication is unreliable: packets can be lost. Obviously, IP alone is not
a particularly good form of communication for many Internet applications.</p>
<p>TCP, the Transmission Control Protocol, is a higher-level protocol that extends IP to
provide additional functionality, including reliable communication based on the concept of
a connection. A connection is established between TCP software running on two machines
by one of the machines (let’s call it A) sending a connection-request message via IP to the
other (B). That is, the IP message contains a message conforming to the TCP protocol and
representing a TCP connection request. If the connection is accepted by B, then B returns a
message toArequesting a connection in the other direction. IfAresponds affirmatively, then
the connection is established. Notice that this means that A and B can both send messages
to one another at the same time; this is known as full duplex communication. When A and B are both done sending messages to one another (or at least done for the time being), a
similar set of three messages is used to close the connection.</p>
<p>Once a connection has been established, TCP provides reliable data transmission by
demanding an acknowledgment for each packet it sends via IP. Essentially, the software
sets a timer after sending each packet. The TCP software on the receiving side sends a
packet containing an acknowledgment for every TCP-based packet it receives that passes
the checksum test. If theTCPsoftware sending a packet does not receive an acknowledgment
packet before its timer expires, then it resends the packet and restarts the timer.</p>
<p>Another important feature that TCP adds to IP is the concept of a port. The port
concept allows TCP to be used to communicate with many different applications on a
machine. For example, a machine connected to the Internet may run a mail server for users
on its local network, a file download server, and also a server that allows users to log in to the
machine and execute commands from remote locations.</p>
<p>Though the connection between port numbers and applications is managed individually
by every machine on the Internet, certain broadly useful applications (such as e-mail
over SMTP) have had port numbers assigned to them by the Internet Assigned Numbers
Authority (IANA) [IANA-PORTS]. These port numbers, in the range 0–1023, can usually
be requested only by applications that are run by the system at boot-up or that are run by
a user with administrative permissions on the system. Other possible port numbers, from
1024 to 65535, can generally be used by the first application on a system that requests the
port.</p>
<p>TCP and IP provide many other functions, such as splitting long messages into shorter
ones for transport over the Internet and transparently reassembling them on the receiving
side. But this brief overview of TCP/IP covers the essential concepts for our purposes.</p>
<h3>1.2.2 UDP, DNS, and Domain Names</h3>
<p>UDP (User Datagram Protocol) is an alternative protocol to TCP that also builds on IP.
The main feature that UDP adds to IP is the port concept that we have just seen in TCP.
However, it does not provide the two-way connection or guaranteed delivery of TCP. Its
advantage over TCP is speed for simple tasks. For example, if all you want to do is send a
short message to another computer, you’re expecting a single short response message, and
you can handle resending if you don’t receive the response within a reasonable amount of
time, then UDP is probably a good alternative to TCP.</p>
<p>One Internet application that is often run using UDP rather than TCP is the Domain
Name Service (DNS). While every device on the Internet has an IP address such
as 192.0.34.166, humans generally find it easier to refer to machines by names, such as
www.example.org. DNS provides a mechanism for mapping back and forth between IP addresses
and host names. Basically, there are a number of DNS servers on the Internet, each
listening through UDP software to a port (port 53 if the server is following the current
IANA assignment). When a computer on the Internet needs DNS services—for example,
to convert a host name such as www.example.org to a corresponding IP address—it uses the
UDP software running on its system to send a UDP message to one of these DNS servers,
requesting the IP address. If all goes well, this server will then send back a UDP message
containing the IP address. Recall that it took three messages just to get a TCP connection
set up, so the UDP approach is much more efficient for sporadic DNS queries. (UDP is
sometimes referred to as a lightweight communication protocol and TCP as a heavyweight
protocol, at least in comparison withUDP. In general, the terms lightweight and heavyweight
in computer science are used to describe alternative software solutions to some problem,
with the lightweight solution having less functionality but also less overhead.)</p>
<p>Internet host names consist of a sequence of labels separated by dots. The final label in
a host name is a top-level domain. There are two standard types of top-level domain: generic
(such as .com, .edu, .org, and .biz) and country-code (such as .de, .il, and .mx). The
top-level domain names are assigned by the Internet Corporation for Assigned Names and Numbers (ICANN), a private nonprofit organization formed to take over technical Internet
functions that were originally funded by the U.S. government.</p>
<p>Each top-level domain is divided into subdomains (second-level domains), which
may in turn be further divided, and so on. The assignment of second-level domains within
each top-level domain is performed (for a fee) by a registry operator selected by ICANN.
The owner of a second-level domain can then further divide that domain into subdomains,
and so on. Ultimately, the subdomains of a domain are individual computers. Such a subdomain,
consisting of a local host name followed by a domain name (typically consisting
of at least two labels) is sometimes called a fully qualified domain name for the computer.
For example, www.example.org is a fully qualified domain name for a host with
local name www that belongs to the example second-level domain of the org top-level
domain.</p>

<h3>1.2.3 Higher-Level Protocols</h3>
<p>The following analogy may help to relate the computer networking concepts described in
Sections 1.2.1 and 1.2.2 with something more familiar: the telephone network. The Internet is like the physical telephone network: it provides the basic communications infrastructure.
UDP is like calling a number and leaving a message rather than actually speaking with
the intended recipient. DNS is the Internet version of directory assistance, associating
names with numbers. TCP is roughly equivalent to placing a phone call and having the
other party answer: you now have a connection and are able to communicate back and
forth.</p>
<p>However, in the cases of both TCP and a phone call, different protocols can be used
to communicate once a connection has been established. For example, when making a
telephone call, the parties must agree on the language(s) that will be used to communicate.
Beyond that, there are also conventions that are followed to decide which party will speak
first, how the parties will take turns speaking, and so on. Furthermore, different conventions
may be used in different contexts: I answer the phone differently at home (“Hello”) than
I do at work (“Mathematics and Computer Science Department, this is Jeff Jackson”), for
example.</p>
<p>Similarly, a variety of higher-level protocols are used to communicate once a TCP
connection has been established. SMTP and FTP, mentioned earlier, are two examples
of widely used higher-level protocols that are used to communicate over TCP connections.
SMTP supports transfer of e-mail between different e-mail servers, while FTP is
used for transferring files between machines. Another higher-level TCP protocol, Telnet,
is used to execute commands typed into one computer on a remote computer. As we will
see, Telnet can also be used to communicate directly (via keyboard entries) with some
TCP-based applications. As described earlier, which protocol will be used to communicate
over a TCP connection is normally determined by the port number used to establish the
connection.</p>
<p>The primary TCP-based protocol used for communication between web servers and
browsers is called the Hypertext Transport Protocol (HTTP). In some sense, just as IP is a
key component in the definition of the Internet, HTTP is a key component in the definition
of theWorldWideWeb. So, before getting into details of HTTP, let’s briefly consider what
the Web is, and in particular how HTTP figures in its definition.</p>
<h3>1.3 The World Wide Web</h3>
<p>Public sharing of information has been a part of the Internet since its early days. For
example, the Usenet newsgroup service began in 1979 and provided a means of “posting”
information that could be read by users on other systems with the appropriate software
(the Google GroupsTM Usenet discussion forum at http://www.google.com provides one
of several modern interfaces to Usenet). Large files were (and still are) often shared by
running an FTP server application that allowed any user to transfer the files from their
origin machine to the user’s machine. The first Internet chat software in widespread use,
Internet Relay Chat (IRC), provided both public and private chat facilities.</p>
<p>However, as the amount of information publicly available on the Internet grew, the
need to locate information also grew. Various technologies for supporting information management
and search on the Internet were developed. Some of the more popular information
management technologies in the early 1990s were Gopher information servers, which
provided a simple hierarchical view of documents; the Wide Area Information System (WAIS) system for indexing and retrieving information; and the ARCHIE tool for searching
online information archives accessible via FTP.</p>
<p>The World Wide Web also was developed in the early 1990s (we’ll learn more about
its development in the next chapter), and for a while was just one among several Internet
information management technologies. To understand why the Web supplanted the other
technologies, it will be helpful to know a bit about the mechanics of the Web and other
Internet information management technologies. All of these technologies consist of (at
least) two types of software: server and client. An Internet-connected computer that wishes
to provide information to other Internet systems must run server software, and a system
that wishes to access the information provided by servers must run client software (for the
Web, the client software is normally a web browser). The server and client applications
communicate over the Internet by following a communication protocol built on top of
TCP/IP.</p>
<p>The protocol used by the Web, as just noted, is the Hypertext Transport Protocol,
HTTP. As we will learn in the next section, this is a rather generic protocol that for the
most part supports a client requesting a document from a server and the server returning
the requested document. This generic nature of HTTP gives it the advantage of somewhat
more flexibility than is present in the protocols used by WAIS and Gopher.</p>
<p>Perhaps a bigger advantage for the Web is the type of information communicated.
Most web pages are written using the Hypertext Markup Language, HTML, which along
with HTTP is a fundamental web technology. HTML pages can contain the familiar web
links (technically called hyperlinks) to other documents on the Web. While certain Gopher
pages could also contain links, normal Gopher documents were plain text. WAIS and
ARCHIE provided no direct support for links. In addition to hyperlinks, modern versions
of HTML also provide extensive page layout facilities, including support for inline graphics,
which (as you might guess) has added significantly to the commercial appeal of the
Web.</p>
<p>The World Wide Web, then, can be defined in much the same way as the Internet.
While the Internet can be thought of as the collection of machines that are globally connected
via IP, the World Wide Web can be informally defined as the collection of machines (web
servers) on the Internet that provide information via HTTP, and particularly those that
provide HTML documents.
Given this overview, we’ll now spend some time looking closely at HTTP.</p>
<h3>1.3.1 Hypertext Transport Protocol</h3>
<p>HTTP is a form of communication protocol, in particular a detailed specification of how
web clients and servers should communicate. The basic structure of HTTP communication
follows what is known as a request–response model. Specifically, the protocol dictates that
anHTTPinteraction is initiated by a client sending a request message to the server; the server
is then expected to generate a response message. The format of the request and response
messages is dictated by HTTP. HTTP does not dictate the network protocol to be used to
send these messages, but does expect that the request and response are both sent within a
TCP-style connection between the client and the server. So most HTTP implementations
send these messages using TCP.</p>
<p>Let’s relate this to what happens when you browse the Web. Figure 1.3 shows a
browser window in which I typed http://www.example.org in the Location bar (note that
this is technically not a web site address and therefore might not be operational by the
time you read this). When I pressed the Enter key after typing this address, the browser
created a message conforming to the HTTP protocol, used DNS to obtain an IP address for
www.example.org, created a TCP connection with the machine at the IP address obtained,
sent the HTTP message over this TCP connection, and received back a message containing
the information that is shown displayed in the client area of the browser (the portion of the
browser containing the information received from the web server).</p>
<p>A nice feature of HTTP is that these request and response messages often consist
entirely of plain text in a fairly readable form. An HTTP request message consists of a start
line followed by a message header and optionally a message body. The start line always
consists of printable ASCII characters, and the header normally does as well. What’s more,
the HTTP response (or at least most of it) is often also a stream of printable characters.</p>
<h3>1.4.2 HTTP Version</h3>
<p>The initial version of HTTP was referred to as HTTP/0.9, and the first Internet RFC (Request
for Comments; see the References section (Section 1.9) for more on RFCs) regarding
HTTP described HTTP/1.0. In 1997, HTTP/1.1 was formally defined, and is currently an
Internet Draft Standard [RFC-2616]. Essentially all operational browsers and servers support
HTTP/1.1, including the server that generated the example in Section 1.3.1 (as indicated
by the HTTP version portion of the status line). We will therefore focus on HTTP/1.1 in
this chapter. If a new version of HTTP is developed in the future, the new standard defining
this version will specify a new value for the version portion of the start line (assuming that
the new standard has the same start line). The version string for HTTP/1.1 must appear in
the start line exactly as shown, with all capital letters and no embedded white space.</p>
<h3>1.4.3 Request-URI</h3>
<p>The second part of the start line is known as the Request-URI. The concatenation of the
string http://, the value of the Host header field (www.example.org, in this example), and
the Request-URI (/ in this example) forms a string known as a Uniform Resource Identifier
(URI). A URI is an identifier that is intended to be associated with a particular resource
(such as a web page or graphics image) on the World Wide Web. Every URI consists of
two parts: the scheme, which appears before the colon (:), and another part that depends on
the scheme. Web addresses, for the most part, use the http scheme (the scheme name in
URIs is case insensitive, but is generally written in lowercase letters). In this scheme, the
URI represents the location of a resource on the Web. A URI of this type is said to be a
Uniform Resource Locator (URL). Therefore, URIs using the http scheme are both URIs
and URLs. Some other URI schemes that mark the URI as a URL are shown in Table 1.1.
A complete list of the currently registered URI schemes along with references to details on
each scheme can be found at [IANA-SCHEMES].</p>
<p>In addition to the URL type of URI, there is one other type, called a Uniform
Resource Name (URN). While not as common as URLs, URNs are sometimes used in
web development (see Section 8.6 for an example). A URN is designed to be a unique
name for a resource rather than specifying a location at which to find the resource. For
example, an edition of War and Peace has an ISBN (International Standard Book Number)
of 0-1404-4417-3 associated with it, and this is the only book worldwide with this number.</p>
<p>The URI for a URN always consists of three colon-separated parts, as illustrated here.
The first part is the scheme name, which is always urn for a URN-type URI. The second part
is the namespace identifier, which in this example is ISBN. Other currently registered URN
namespace identifiers along with pointers to documentation for each are listed at [IANAURNS].
The third part is the namespace-specific string. The exact format and meaning of
this string varies with the namespace. In this example it represents the ISBN of a book and
has a format defined by the documentation linked to at [IANA-URNS].</p>

<h3>1.4.4 Request Method</h3>
<p>The standard HTTP methods and a brief description of each are shown in Table 1.2. The
method part of the start line of an HTTP request must be written entirely in uppercase
letters, as shown in the table. In addition to the methods shown, the HTTP/1.1 standard
defines a CONNECT method, which can be used to create certain types of secure connections.
However, its use is beyond our scope and therefore will not be discussed further
here.</p>
<p>The primary HTTP method is GET. This is the method used when you type a URL
into the Location bar of your browser. It is also the method that is used by default when you
click on a link in a document displayed in your browser and when the browser downloads
images for display within an HTML document. The POST method is typically used to send
information collected from a form displayed within a browser, such as an order-entry form,
back to the web server. The other methods are not frequently used by web developers, and
we will therefore not discuss them further here.</p>

<h3>1.4.5 Header Fields and MIME Types</h3>
<p>We have already learned that the Host header field is used when forming the URI associated
with an HTTP request. The Host header field is required in every HTTP/1.1 request message.
HTTP/1.1 also defines a number of other header fields, several of which are commonly used
by modern browsers. Each header field begins with a field name, such as Host, followed
by a colon and then a field value. White space is allowed to precede or follow the field
value, but such white space is not considered part of the value itself. The following slightly
modified example of an actual HTTP request sent by a browser consists of a start line, 10
header fields, and a short message body:</p>
<p>Before describing each of the header fields, it will be helpful to understand some
common header field features. First, header names are not case sensitive, although I will
throughout this text refer to header field names following the capitalization used by the
HTTP/1.1 reference [RFC-2616]. So, while the browser used “host” to name the first header
field, I will refer to this as the “Host” header field. Second, a header field value may wrap
onto several lines by preceding each continuation line with one or more spaces or tabs, as
shown for the User-Agent and Accept fields of the preceding example. This also means that
a header field name must begin at the first character of a line, with no preceding white space.</p>
<p>A third common feature is the use of so-called MIME types in several header field
values. MIME is an acronym standing for Multipurpose Internet Mail Extensions, and refers
to a standard that can be used to pass a variety of types of information, including graphics
and applications, through e-mail as well as through other Internet message protocols. In particular,
as defined in the MIME Internet Draft Standard [RFC-2045], the content of a MIME
message is specified using a two-part, case-insensitive string which, in web applications, is
known as the content type of the message. Two examples of standard MIME content-type
strings are text/html and image/jpeg. The substring preceding the slash in these strings
is the top-level type, and is normally one of a small number of standard types shown in
Table 1.3. The substring following the slash, called the subtype, specifies the particular type
of content relative to the top-level type. A complete list of current registered top-level types
and subtypes can be found at [IANA-MIME]. In addition, private (unregistered) MIME
top-level types and subtypes may be used. A private type or subtype is indicated by an “x-”
(or “X-”) prefix. Table 1.4 lists some common MIME types.</p>
<p>Each of the header fields shown in the example, along with the Referer field (yes, this
misspelling of “referrer” is the name of the field in the HTTP/1.1 standard), are briefly
described in Table 1.5. The field values for Accept-Charset are discussed in detail in
Section 1.5.4. Full details on all of these header fields, along with descriptions of the
many other header fields defined in HTTP/1.1 plus an explanation of how you can define
your own header fields, are contained in [RFC-2616].</p>





      <center>
        <h2 className='title'>
          <Link href='/'>Back To Home</Link>
        </h2>
      </center>
    </>
  );
}
