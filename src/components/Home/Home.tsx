import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Header/Header";
import ImageSrc from "./../../assets/images/illustration-laptop-mobile.svg";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
      </div>
      <Container className="home__details">
        <Row>
          <Col md={6} xs={12}>
            <h2>What should be on your homepage?</h2>
            <p>
              There are four essential pieces of information you should have on
              your homepage: value proposition, differentiation, proof, and
              calls to action. Though the role of the homepage has changed,
              chances are it's still the most highly trafficked and most
              important page on your website. Deciding what to put on your
              homepage, however, can prove tricky and it's easy to end up with
              one containing too much information, duplicating what appears on
              other pages and failing to generate leads. The objectives for your
              homepage should be to:
            </p>
            <ul>
              <li>Engage new visitors quickly</li>
              <li>Channel visitors to the right content</li>
              <li>Convert those visitors that are ready to try or buy</li>
              <li>
                Achieving these objectives requires that you provide four pieces
                of information.
              </li>
            </ul>
          </Col>
          <Col md={6} xs={12}>
            <img src={ImageSrc} alt="alt text" />
          </Col>
          <Col md={12} xs={12}>
            <h4> 1. Value proposition</h4>
            <p>
              When a new visitor arrives on your homepage you only have a few
              seconds, and therefore a few words, to engage them. The most
              effective way to establish the desired engagement is to state what
              you do and who you do it for – your value proposition. When
              properly communicated, your value proposition can convey what
              problem you solve and for which users, all in a very short space
              of time. The effect of this on the right visitor is to instantly
              remove all doubt that they are on the right site. When crafting
              your value proposition statement for your homepage we urge you to
              get specific, citing actual services and customers. Avoid the kind
              of vague puffery that has plagued the web for years. You'll find
              it easier to grow your market share if you do. Don’t be afraid to
              change and update your value proposition statement, or even better
              A/B test it to find out what performs best.
            </p>
            <h4>2. Differentiation</h4>
            <p>
              While your value proposition may have got your visitor to stay
              past the 'blink test', they are still looking for signals to help
              them decide if they should stay or go. To keep their interest, and
              their visit going, tell them is why you're better than any
              alternative - your differentiation. Differentiation can be
              conveyed in many ways. The most important thing, however, is that
              it's real, not just make-believe or matched by every serious
              competitor. Remember, points of differentiation aren't only found
              in your product or service. They can also be found in other areas
              of the value chain such as your culture, organisation or the way
              in which you meet the needs of specific users.
            </p>
            <h4>3. Proof</h4>

            <p>
              By now your visitor may well be close to spending some real-time
              on your website. By providing proof that you can do what you say
              you can, you can tip them over the line. In B2B buying, proof
              plays a particularly important and valuable role, helping buyers
              de-risk and justify their purchase decisions. The easiest and most
              widely used way to communicate proof (although there are others)
              is to show customer logos, testimonials, or case studies. If you
              can source these, use them. But remember, this is your homepage so
              keep it brief here and link to longer content if necessary.
            </p>

            <h4>4. Calls to action</h4>

            <p>
              The new role of the website is to convert a visitor into a lead.
              The homepage is just one step on this journey and so should
              feature calls to action that are relevant to a visitor's stage in
              their decision-making process. For buyers at the early stages of
              the process, provide links that channel them to the most relevant
              pages and content within your site. For buyers who are later in
              the process, make sure your homepage features your bottom of the
              funnel offer e.g. a free trial or consultation.
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
