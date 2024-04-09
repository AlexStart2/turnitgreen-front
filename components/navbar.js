import styles from "@/styles/navbar.module.css";
import logo from "@/public/Teal Illustrated Iceberg Graph Concept Map Graph.png";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { GetArticles } from "./getArticles";

function OffcanvasExample() {
  const Articles = GetArticles();
  const Compliance = Articles.filter((a) => a.ArticleType === "Compliance")
  const CapitalAdequacy = Articles.filter((a) => a.ArticleType === "Capital Adequacy");
  const CapitalMarkets = Articles.filter((a) => a.ArticleType === "Capital Markets");
  const ConsumerProtection = Articles.filter((a) => a.ArticleType === "Consumer Protection");
  const Governance = Articles.filter((a) => a.ArticleType === "Governance");
  const RiskManagement = Articles.filter((a) => a.ArticleType === "Risk Management");
  
  const expand = "md";
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  var border_bottom = isSmallScreen ? "2px solid #c1f036" : "unset";

  //////////////////////////////////////////////////////////////////////////////////////////////  WARNING!!
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className=" bg-body-tertiary "
        style={{ "--bs-bg-opacity": "unset", "--bs-navbar-padding-x": "unset", borderBottom: "1px solid #c2c2c2" }}
      >
        <Container fluid>
          <Navbar.Brand>
            <Nav.Link href="/">             
              <Image
                src={logo}
                priority={true}
                alt="Turn it Green"
                className={styles.logotip}
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Turn It Green
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ alignItems: "center" }}>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  href="/"
                  style={{
                    paddingLeft: "3vw",
                    paddingRight: "3vw",
                    borderBottom: border_bottom,
                  }}
                  className=" h-100 "
                >
                  <div className={styles.pad}>Home</div>
                </Nav.Link>
                <Nav.Link
                  href="/Search"
                  style={{
                    paddingLeft: "3vw",
                    paddingRight: "3vw",
                    borderBottom: border_bottom,
                  }}
                  className=" h-100 "
                >
                  <div>Search</div>
                </Nav.Link>
                <NavDropdown
                  title="Topics"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  style={{
                    paddingBottom: "unset",
                    paddingTop: "unset",
                    paddingLeft: "3vw",
                    paddingRight: "3vw",
                    borderBottom: "unset",
                  }}
                >
                  <NavDropdown.Item href="/esg">ESG</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/digitalisation">
                    Digitalisation
                  </NavDropdown.Item>

                  {Compliance.length !== 0 ? (
                    <>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/compliance">
                        Compliance
                      </NavDropdown.Item>
                    </>
                  ) : (
                    <></>
                  )}
                  {CapitalAdequacy.length !== 0 ? (
                    <>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/capital-adequacy">
                    Capital Adequacy
                  </NavDropdown.Item>
                  </>
                  ) : (
                    <></>
                  )}
                  {CapitalMarkets.length !== 0 ? (
                    <>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/capital-markets">
                    Capital Markets
                  </NavDropdown.Item>
                  </>
                  ) : (
                    <></>
                  )}
                  {ConsumerProtection.length !== 0 ? (
                    <>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/consumer-protection">
                    Consumer Protection
                  </NavDropdown.Item>
                  </>
                  ) : (
                    <></>
                  )}
                  {Governance.length !== 0 ? (
                    <>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/governance">
                    Governance
                  </NavDropdown.Item>
                  </>
                  ) : (
                    <></>
                  )}
                  {RiskManagement.length !== 0 ? (
                    <>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/risk-management">
                    Risk Management
                  </NavDropdown.Item>
                  </>
                  ) : (
                    <></>
                  )}
                </NavDropdown>
              </Nav>
              <Button
                href="/about-us"
                className={styles.GetInTouchButton}
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "2px solid #c1f036",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Get In Touch
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
