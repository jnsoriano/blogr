import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Header/Header";
import ImageSrc from "./../../assets/images/illustration-editor-desktop.svg";
import Footer from "../Footer/Footer";
const About = () => {
  return (
    <>
      <div className="about">
        {" "}
        <Header />
      </div>
      <Container className="about__details">
        <Row>
          <Col md={12} xs={12}>
            <h2> Content Writing</h2>
            <p>
              Consuming great writing is like listening to a singer. If the
              performer makes an emotional connection with me – even though they
              miss a few notes – I eagerly lock into the rest of the song and
              anticipate the next performance. Your words must be powerful and
              effective as well if you want to captivate as many of your readers
              as possible. Content writing isn’t an easy task. Whether you craft
              words for B2B or B2C audiences, the challenges can be many. I’ve
              created a diverse set of tips, tools, and resources to aid in
              shaping and modifying your work. It’s not an exhaustive
              collection. Some ideas may seem familiar. Others will be fresh.
            </p>
          </Col>
          <Col md={6} xs={12}>
            <img src={ImageSrc} alt="alt text" />
          </Col>
          <Col md={6} xs={12}>
            <p>
              Lorem ipsum dolor sit amet. Sed eligendi dolores est voluptas sunt
              aut deleniti rerum At iure Quis ut similique fugiat sed
              dignissimos neque ut reprehenderit maxime! Eos eveniet culpa et
              veritatis quia sit velit iusto. Est enim temporibus sit ducimus
              quia ut quod quia qui saepe voluptas hic animi eveniet. 33 sunt
              porro rem laborum necessitatibus ea temporibus voluptates et quam
              consequuntur eum illum similique et voluptatem obcaecati cum
              pariatur dolorem.{" "}
            </p>
            <p>
              Aut quia enim et reiciendis autem est ipsa eaque ut praesentium
              voluptates. Vel quibusdam illo est cumque voluptatem aut nostrum
              doloribus et omnis quia id enim fugit quo doloribus voluptas.{" "}
            </p>
            <p>
              Aut voluptate cumque qui voluptatum culpa id facilis laboriosam.
              Sed dolor enim qui omnis quia est ipsum molestias et repellat
              quam. Qui dignissimos architecto in consequatur rerum ut nemo modi
              non quod ipsam et laudantium omnis. Eos adipisci deserunt qui
              consequuntur officia aut omnis expedita ex autem velit et magnam
              quibusdam et quia recusandae vel facere exercitationem.{" "}
            </p>
            <p>
              Qui esse quos aut tempore omnis id minus suscipit a nesciunt
              quaerat ad consequatur animi. Sit omnis eius ut dolor odit At
              voluptatem voluptatem et enim similique aut expedita eaque? Et
              quisquam minus ea quia dolorem ut molestias facere et nulla
              inventore sit laboriosam enim est deleniti voluptas qui officia
              repudiandae!{" "}
            </p>
            <p>
              Est nesciunt deleniti hic rerum atque ab illum quia. Ab
              praesentium atque aut assumenda dolores explicabo voluptatem ut
              quis Quis in rerum aspernatur At soluta temporibus ad recusandae
              eveniet!{" "}
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default About;
