import {
  Row,
  Col,
  Card,
  Button,
  Portlet,
  Container,
  CarouselItem
} from "@blueupcode/components"
import { pageChangeHeaderTitle, breadcrumbChange } from "store/actions"
import { bindActionCreators } from "redux"
import { Component, Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from "react-redux"
import * as SolidIcon from "@fortawesome/free-solid-svg-icons"
import withLayout from "components/layout/withLayout"

import Carousel from "@blueupcode/slick"
import Head from "next/head"
import PAGE from "config/page.config"

class CarouselPage extends Component {
  componentDidMount() {
    // Set header title
    this.props.pageChangeHeaderTitle("Carousel")
    // Set breadcrumb data
    this.props.breadcrumbChange([
      { text: "Dashboard", link: "/" },
      { text: "Elements" },
      { text: "Advanced" },
      { text: "Carousel", link: "/elements/advanced/carousel" }
    ])
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Carousel | {PAGE.siteName}</title>
        </Head>
        <Container fluid>
          <Row>
            <Col md="6">
              {/* BEGIN Portlet */}
              <Portlet>
                <Portlet.Header bordered>
                  <Portlet.Title>Basic</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body>
                  <p>
                    These carousels are powered by{" "}
                    <a
                      href="http://kenwheeler.github.io/slick"
                      target="_blank"
                      rel="noreferrer"
                    >
                      slick.js
                    </a>
                    . The example below is a basic initialization. Put your
                    content or any elements into <code>CarouselItem</code>{" "}
                    component.
                  </p>
                  {/* BEGIN Carousel */}
                  <Carousel>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-4.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-4.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                  </Carousel>
                  {/* END Carousel */}
                </Portlet.Body>
              </Portlet>
              {/* END Portlet */}
              {/* BEGIN Portlet */}
              <Portlet>
                <Portlet.Header bordered>
                  <Portlet.Title>Center mode</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body>
                  <p>
                    Centered carousel, you can enable this feature by setting{" "}
                    <code>{"centerMode={true}"}</code> property.
                  </p>
                  {/* BEGIN Carousel */}
                  <Carousel
                    centerMode={true}
                    prevArrow={<CarouselPrev2 />}
                    nextArrow={<CarouselNext2 />}
                  >
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-4.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-4.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-4.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                  </Carousel>
                  {/* END Carousel */}
                </Portlet.Body>
              </Portlet>
              {/* END Portlet */}
              {/* BEGIN Portlet */}
              <Portlet>
                <Portlet.Header bordered>
                  <Portlet.Title>Sync</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body>
                  <p>
                    Sync your carousels and make one of them as navigation, look
                    the example.
                  </p>
                  <SyncCarousel />
                </Portlet.Body>
              </Portlet>
              {/* END Portlet */}
            </Col>
            <Col md="6">
              {/* BEGIN Portlet */}
              <Portlet>
                <Portlet.Header bordered>
                  <Portlet.Title>Number of slides</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body>
                  <p>
                    Set number of slides to show for carousel by setting{" "}
                    <code>slidesToShow</code> property.
                  </p>
                  {/* BEGIN Carousel */}
                  <Carousel slidesToShow={3} slidesToScroll={2}>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-2.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-2.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-2.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-2.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                  </Carousel>
                  {/* END Carousel */}
                </Portlet.Body>
              </Portlet>
              {/* END Portlet */}
              {/* BEGIN Portlet */}
              <Portlet>
                <Portlet.Header bordered>
                  <Portlet.Title>Alternative navigation</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body>
                  <p>
                    We provide custom navigation that you can use like example
                    below
                  </p>
                  {/* BEGIN Carousel */}
                  <Carousel
                    prevArrow={<CarouselPrev3 />}
                    nextArrow={<CarouselNext3 />}
                  >
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-4.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-4.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                  </Carousel>
                  {/* END Carousel */}
                </Portlet.Body>
              </Portlet>
              {/* END Portlet */}
              {/* BEGIN Portlet */}
              <Portlet>
                <Portlet.Header bordered>
                  <Portlet.Title>Autoplay</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body>
                  <p>
                    Set <code>{"autoplay={true}"}</code> to enabled autoplay
                    features and set <code>autoplaySpeed</code> property for
                    autoplay speed.
                  </p>
                  {/* BEGIN Carousel */}
                  <Carousel
                    autoplay={true}
                    autoplaySpeed={1000}
                    slidesToShow={2}
                  >
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-2.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-2.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-2.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                  </Carousel>
                  {/* END Carousel */}
                </Portlet.Body>
              </Portlet>
              {/* END Portlet */}
              {/* BEGIN Portlet */}
              <Portlet>
                <Portlet.Header bordered>
                  <Portlet.Title>Dot indicator</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body>
                  <p>
                    To enable dot indicator, you must set{" "}
                    <code>{"dots={true}"}</code>. The dots have navigation
                    functionality, you can click those to change slides.
                  </p>
                  {/* BEGIN Carousel */}
                  <Carousel dots={true}>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-4.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-4.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                    <CarouselItem>
                      {/* BEGIN Card */}
                      <Card>
                        <Card.Img
                          src="/images/banner/banner-4.webp"
                          alt="Card Image"
                        />
                      </Card>
                      {/* END Card */}
                    </CarouselItem>
                  </Carousel>
                  {/* END Carousel */}
                </Portlet.Body>
              </Portlet>
              {/* END Portlet */}
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

class SyncCarousel extends Component {
  state = {
    main: null,
    nav: null
  }

  componentDidMount() {
    // Set carousel elements references and store to states
    this.setState({
      main: this.mainRef,
      nav: this.navRef
    })
  }

  render() {
    return (
      <Fragment>
        {/* BEGIN Carousel */}
        <Carousel
          arrows={false}
          asNavFor={this.state.nav}
          ref={(ref) => (this.mainRef = ref)}
        >
          <CarouselItem>
            {/* BEGIN Card */}
            <Card>
              <Card.Img src="/images/banner/banner-4.webp" alt="Card Image" />
            </Card>
            {/* END Card */}
          </CarouselItem>
          <CarouselItem>
            {/* BEGIN Card */}
            <Card>
              <Card.Img src="/images/banner/banner-4.webp" alt="Card Image" />
            </Card>
            {/* END Card */}
          </CarouselItem>
          <CarouselItem>
            {/* BEGIN Card */}
            <Card>
              <Card.Img src="/images/banner/banner-4.webp" alt="Card Image" />
            </Card>
            {/* END Card */}
          </CarouselItem>
          <CarouselItem>
            {/* BEGIN Card */}
            <Card>
              <Card.Img src="/images/banner/banner-4.webp" alt="Card Image" />
            </Card>
            {/* END Card */}
          </CarouselItem>
        </Carousel>
        {/* END Carousel */}
        {/* BEGIN Carousel */}
        <Carousel
          centerMode={true}
          slidesToShow={3}
          asNavFor={this.state.main}
          focusOnSelect={true}
          prevArrow={<CarouselPrev2 />}
          nextArrow={<CarouselNext2 />}
          ref={(ref) => (this.navRef = ref)}
          className="mt-4"
        >
          <CarouselItem>
            {/* BEGIN Card */}
            <Card>
              <Card.Img src="/images/banner/banner-2.webp" alt="Card Image" />
            </Card>
            {/* END Card */}
          </CarouselItem>
          <CarouselItem>
            {/* BEGIN Card */}
            <Card>
              <Card.Img src="/images/banner/banner-2.webp" alt="Card Image" />
            </Card>
            {/* END Card */}
          </CarouselItem>
          <CarouselItem>
            {/* BEGIN Card */}
            <Card>
              <Card.Img src="/images/banner/banner-2.webp" alt="Card Image" />
            </Card>
            {/* END Card */}
          </CarouselItem>
          <CarouselItem>
            {/* BEGIN Card */}
            <Card>
              <Card.Img src="/images/banner/banner-2.webp" alt="Card Image" />
            </Card>
            {/* END Card */}
          </CarouselItem>
        </Carousel>
        {/* END Carousel */}
      </Fragment>
    )
  }
}

function CarouselNext2(props) {
  const { style, onClick } = props

  return (
    <Button
      className="slick-next-2"
      variant="flat-primary"
      style={{ ...style }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={SolidIcon.faAngleRight} />
    </Button>
  )
}

function CarouselPrev2(props) {
  const { style, onClick } = props
  return (
    <Button
      className="slick-prev-2"
      variant="flat-primary"
      style={{ ...style }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={SolidIcon.faAngleLeft} />
    </Button>
  )
}

function CarouselNext3(props) {
  const { style, onClick } = props
  return (
    <Button
      className="slick-next-3"
      variant="flat-primary"
      style={{ ...style }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={SolidIcon.faAngleRight} />
    </Button>
  )
}

function CarouselPrev3(props) {
  const { style, onClick } = props
  return (
    <Button
      className="slick-prev-3"
      variant="flat-primary"
      style={{ ...style }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={SolidIcon.faAngleLeft} />
    </Button>
  )
}

function mapDispathToProps(dispatch) {
  return bindActionCreators(
    { pageChangeHeaderTitle, breadcrumbChange },
    dispatch
  )
}

export default connect(
  null,
  mapDispathToProps
)(withLayout(CarouselPage))
