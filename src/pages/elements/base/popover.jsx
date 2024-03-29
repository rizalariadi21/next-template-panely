import {
  Row,
  Col,
  Form,
  Label,
  Button,
  Popover,
  Portlet,
  Container
} from "@blueupcode/components"
import { pageChangeHeaderTitle, breadcrumbChange } from "store/actions"
import { bindActionCreators } from "redux"
import { Component, Fragment } from "react"
import { connect } from "react-redux"
import withLayout from "components/layout/withLayout"

import Head from "next/head"
import PAGE from "config/page.config"

class PopoverPage extends Component {
  componentDidMount() {
    // Set header title
    this.props.pageChangeHeaderTitle("Popover")
    // Set breadcrumb data
    this.props.breadcrumbChange([
      { text: "Dashboard", link: "/" },
      { text: "Elements" },
      { text: "Base" },
      { text: "Popover", link: "/elements/base/popover" }
    ])
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Popover | {PAGE.siteName}</title>
        </Head>
        <Container fluid>
          <Row>
            <Col xs="12">
              {/* BEGIN Portlet */}
              <Portlet>
                <Portlet.Header bordered>
                  <Portlet.Title>Popover examples</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body>
                  {/* BEGIN Form Group */}
                  <Form.Group row>
                    <Label sm="4" lg="3" className="text-muted text-sm-right">
                      Basic popover
                    </Label>
                    <Col sm="8" lg="9">
                      <PopoverControlled />
                      <Button id="popover2" className="ml-2">
                        Uncontrolled
                      </Button>
                      <Popover.Uncontrolled
                        target="popover2"
                        title="Popover title"
                      >
                        And here&apos;s some amazing content. It&apos;s very
                        engaging. Right?
                      </Popover.Uncontrolled>
                    </Col>
                  </Form.Group>
                  {/* END Form Group */}
                  {/* BEGIN Form Group */}
                  <Form.Group row>
                    <Label sm="4" lg="3" className="text-muted text-sm-right">
                      Positions
                    </Label>
                    <Col sm="8" lg="9">
                      <div>
                        <Button id="popover3">Top</Button>{" "}
                        <Button id="popover4">Bottom</Button>{" "}
                        <Button id="popover5">Left</Button>{" "}
                        <Button id="popover6">Right</Button>
                        <Popover.Uncontrolled placement="top" target="popover3">
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus.
                        </Popover.Uncontrolled>
                        <Popover.Uncontrolled
                          placement="bottom"
                          target="popover4"
                        >
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus.
                        </Popover.Uncontrolled>
                        <Popover.Uncontrolled
                          placement="left"
                          target="popover5"
                        >
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus.
                        </Popover.Uncontrolled>
                        <Popover.Uncontrolled
                          placement="right"
                          target="popover6"
                        >
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus.
                        </Popover.Uncontrolled>
                      </div>
                      <p className="mb-0 mt-2">
                        Change popover placement by setting{" "}
                        <code>placement</code> property with{" "}
                        <code>top|bottom|right|left</code>
                      </p>
                    </Col>
                  </Form.Group>
                  {/* END Form Group */}
                  {/* BEGIN Form Group */}
                  <Form.Group row>
                    <Label sm="4" lg="3" className="text-muted text-sm-right">
                      Dismiss on next click
                    </Label>
                    <Col sm="8" lg="9">
                      <Button id="popover7">Click me</Button>
                      <Popover.Uncontrolled
                        trigger="focus"
                        target="popover7"
                        title="Dismissible popover"
                      >
                        And here&apos;s some amazing content. It&apos;s very
                        engaging. Right?
                      </Popover.Uncontrolled>
                      <p className="mb-0 mt-2">
                        Use the <code>trigger=&quot;focus&quot;</code> property
                        to dismiss popovers on the user’s next click of a
                        different element than the toggle element
                      </p>
                    </Col>
                  </Form.Group>
                  {/* END Form Group */}
                  {/* BEGIN Form Group */}
                  <Form.Group row className="mb-0">
                    <Label sm="4" lg="3" className="text-muted text-sm-right">
                      HTML content
                    </Label>
                    <Col sm="8" lg="9">
                      <Button id="popover8">Click me</Button>
                      <Popover.Uncontrolled
                        trigger="focus"
                        target="popover8"
                        title="Popover title"
                      >
                        And here&apos;s some amazing <b>HTML</b> content.
                        It&apos;s very <code>engaging</code>. Right?
                      </Popover.Uncontrolled>
                      <p className="mb-0 mt-2">
                        You can put popover html content inside popover body
                      </p>
                    </Col>
                  </Form.Group>
                  {/* END Form Group */}
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

// Controlled popover example
class PopoverControlled extends Component {
  // Default states
  state = { isOpen: false }

  // Handle popover toggle event
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <Fragment>
        <Button id="popover1" onClick={this.toggle}>
          Controlled
        </Button>
        <Popover
          target="popover1"
          title="Popover title"
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          {...this.props}
        >
          And here&apos;s some amazing content. It&apos;s very engaging. Right?
        </Popover>
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
)(withLayout(PopoverPage))
