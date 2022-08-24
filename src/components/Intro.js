import {Container, Row, Col, Button} from "react-bootstrap"
const Intro = () => {
    return(
        <div className="intro">
            <Container className="text-blue d-flex justify-content-center align-item-center ">
            <Row>
                <Col>
                <div className="textmid">PERPUSTAKAAN</div>
                <div className="textmid text-center">ONLINE</div>
                <div className="IntroButton mt-4 text-center">
                    <Button variant="dark"> LIST BUKU </Button>
                </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Intro