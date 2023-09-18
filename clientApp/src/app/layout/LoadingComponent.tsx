import { Spinner, Container } from 'react-bootstrap';
interface Props {
    inverted?: boolean;
    content?: string;
}

export default function LoadingComponent({inverted=false, content="Loading..."}: Props) {
    return(
        <Container className={`d-flex align-items-center justify-content-center vh-100 ${inverted ? 'bg-dark text-light' : ''}`}>
        <div className="text-center">
          <Spinner animation="border" role="status">
          </Spinner>
          <p>{content}</p>
        </div>
      </Container>
    )
}