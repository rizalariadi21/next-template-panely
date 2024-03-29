import {
  Row,
  Col,
  Portlet,
  Pagination,
  Container
} from "@blueupcode/components"
import { pageChangeHeaderTitle, breadcrumbChange } from "store/actions"
import { bindActionCreators } from "redux"
import { Component, Fragment } from "react"
import { connect } from "react-redux"
import withLayout from "components/layout/withLayout"

import Head from "next/head"
import PAGE from "config/page.config"

class PaginationPage extends Component {
  componentDidMount() {
    // Set header title
    this.props.pageChangeHeaderTitle("Pagination")
    // Set breadcrumb data
    this.props.breadcrumbChange([
      { text: "Dashboard", link: "/" },
      { text: "Elements" },
      { text: "Base" },
      { text: "Pagination", link: "/elements/base/pagination" }
    ])
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Pagination | {PAGE.siteName}</title>
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
                    We use a large block of connected links for our pagination,
                    making links hard to miss and easily scalable—all while
                    providing large hit areas.
                  </p>
                  {/* BEGIN Pagination */}
                  <Pagination>
                    <Pagination.Item>
                      <Pagination.Link href="#">Previous</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">1</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">2</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">3</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">4</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">5</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">Next</Pagination.Link>
                    </Pagination.Item>
                  </Pagination>
                  {/* END Pagination */}
                </Portlet.Body>
              </Portlet>
              {/* END Portlet */}
              {/* BEGIN Portlet */}
              <Portlet>
                <Portlet.Header bordered>
                  <Portlet.Title>Sizing</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body>
                  <p>
                    Fancy larger or smaller pagination? Apply <code>size</code>{" "}
                    property for additional sizes.
                  </p>
                  {/* BEGIN Pagination */}
                  <Pagination size="lg" className="mb-3">
                    <Pagination.Item>
                      <Pagination.Link href="#">Previous</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">1</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">2</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">3</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">Next</Pagination.Link>
                    </Pagination.Item>
                  </Pagination>
                  {/* END Pagination */}
                  {/* BEGIN Pagination */}
                  <Pagination className="mb-3">
                    <Pagination.Item>
                      <Pagination.Link href="#">Previous</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">1</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">2</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">3</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">Next</Pagination.Link>
                    </Pagination.Item>
                  </Pagination>
                  {/* END Pagination */}
                  {/* BEGIN Pagination */}
                  <Pagination size="sm">
                    <Pagination.Item>
                      <Pagination.Link href="#">Previous</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">1</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">2</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">3</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">Next</Pagination.Link>
                    </Pagination.Item>
                  </Pagination>
                  {/* END Pagination */}
                </Portlet.Body>
              </Portlet>
              {/* END Portlet */}
            </Col>
            <Col md="6">
              {/* BEGIN Portlet */}
              <Portlet>
                <Portlet.Header bordered>
                  <Portlet.Title>Disabled and active states</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body>
                  <p>
                    Pagination links are customizable for different
                    circumstances. Use <code>disabled</code> for links that
                    appear un-clickable and <code>active</code> to indicate the
                    current page.
                  </p>
                  {/* BEGIN Pagination */}
                  <Pagination>
                    <Pagination.Item>
                      <Pagination.Link href="#">Previous</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">1</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item active>
                      <Pagination.Link href="#">2</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">3</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">4</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item disabled>
                      <Pagination.Link href="#">5</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">Next</Pagination.Link>
                    </Pagination.Item>
                  </Pagination>
                  {/* END Pagination */}
                </Portlet.Body>
              </Portlet>
              {/* END Portlet */}
              {/* BEGIN Portlet */}
              <Portlet>
                <Portlet.Header bordered>
                  <Portlet.Title>Alignments</Portlet.Title>
                </Portlet.Header>
                <Portlet.Body>
                  <p>
                    Change the alignment of pagination component with flexbox
                    utilities.
                  </p>
                  {/* BEGIN Pagination */}
                  <Pagination className="mb-3">
                    <Pagination.Item>
                      <Pagination.Link href="#">Previous</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">1</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">2</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">3</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">4</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">5</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">Next</Pagination.Link>
                    </Pagination.Item>
                  </Pagination>
                  {/* END Pagination */}
                  {/* BEGIN Pagination */}
                  <Pagination
                    listClassName="justify-content-center"
                    className="mb-3"
                  >
                    <Pagination.Item>
                      <Pagination.Link href="#">Previous</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">1</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">2</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">3</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">4</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">5</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">Next</Pagination.Link>
                    </Pagination.Item>
                  </Pagination>
                  {/* END Pagination */}
                  {/* BEGIN Pagination */}
                  <Pagination listClassName="justify-content-end">
                    <Pagination.Item>
                      <Pagination.Link href="#">Previous</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">1</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">2</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">3</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">4</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">5</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                      <Pagination.Link href="#">Next</Pagination.Link>
                    </Pagination.Item>
                  </Pagination>
                  {/* END Pagination */}
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

function mapDispathToProps(dispatch) {
  return bindActionCreators(
    { pageChangeHeaderTitle, breadcrumbChange },
    dispatch
  )
}

export default connect(
  null,
  mapDispathToProps
)(withLayout(PaginationPage))