import { Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/activities/home/homepage";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container>
            <Row className="pt-3">
              <Outlet />
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default observer(App);
