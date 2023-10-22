import { Col, Container, Row } from "react-bootstrap";
import ActivityList from "./ActivityList";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const {loadActivities, activityRegistry} = activityStore

  useEffect(() =>{
    if(activityRegistry.size <= 1) loadActivities();
  }, [loadActivities])

  if(activityStore.loadingInititial) return <LoadingComponent/>
  return (
    <Container>
      <Row>
        <Col xs={12} lg={7} className="order-2 order-md-1">
          <ActivityList/>
        </Col>
        <Col xs={12} lg={5} className="order-1 order-md-2">
          <h2>Event filters</h2>
        </Col>
      </Row>
    </Container>
  );
});
