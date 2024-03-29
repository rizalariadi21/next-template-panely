import { Row, Col, Container } from "@blueupcode/components"
import { pageChangeHeaderTitle, breadcrumbChange } from "store/actions"
import { bindActionCreators } from "redux"
import { Component, Fragment } from "react"
import { connect } from "react-redux"
import withLayout from "components/layout/withLayout"

import Widget22 from "components/widgets/Widget22"
import Widget23 from "components/widgets/Widget23"
import Widget24 from "components/widgets/Widget24"
import Widget25 from "components/widgets/Widget25"
import Widget26 from "components/widgets/Widget26"
import Widget27 from "components/widgets/Widget27"
import Widget28 from "components/widgets/Widget28"
import Widget29 from "components/widgets/Widget29"
import Widget30 from "components/widgets/Widget30"
import Widget31 from "components/widgets/Widget31"
import Widget32 from "components/widgets/Widget32"
import Head from "next/head"
import PAGE from "config/page.config"

class WidgetsChartPage extends Component {
  componentDidMount() {
    // Set header title
    this.props.pageChangeHeaderTitle("Chart Widget")
    // Set breadcrumb data
    this.props.breadcrumbChange([
      { text: "Dashboard", link: "/" },
      { text: "Widgets" },
      { text: "Chart", link: "/widgets/chart" }
    ])
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Chart Widget | {PAGE.siteName}</title>
        </Head>
        <Container fluid>
          <Row portletFill="xl">
            <Col xl="4">
              <Widget22 />
            </Col>
            <Col xl="4">
              <Widget23 />
            </Col>
            <Col xl="4">
              <Widget24 />
            </Col>
          </Row>
          <Row portletFill="xl">
            <Col xl="6">
              <Widget25 />
            </Col>
            <Col xl="6">
              <Widget26 />
            </Col>
          </Row>
          <Row>
            <Col xl="4">
              <Widget27 />
            </Col>
            <Col xl="8">
              <Row>
                <Col md="6">
                  <Widget28 />
                  <Widget29 />
                </Col>
                <Col md="6">
                  <Widget30 />
                  <Row portletFill="sm">
                    <Col sm="6">
                      <Widget31 />
                    </Col>
                    <Col sm="6">
                      <Widget32 />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
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
)(withLayout(WidgetsChartPage))
