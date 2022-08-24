import {Card, Container, Row, Col, Image} from "react-bootstrap"
import novel1 from "../assets/images/novel1.jpg"
import novel2 from "../assets/images/novel2.webp"
import novel3 from "../assets/images/novel3.jpg"
import novel4 from "../assets/images/novel4.jpg"
import novel5 from "../assets/images/novel5.jpg"
const Gengre = () => {
    return (
        <div>
            <Container>
                <div className="texttren">
                <h1>Trending romance</h1>
                </div>
                <Row>
                    <Col md={4} className="pimagewrapper" id="gengre">
                    <Card className="bg-dark text-white pimage">
                        <Image className="imagepost"
                        src={novel1} 
                        alt="Woman"
                         />
                         <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">WOman</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                     </Card>
                    </Col>
                    <Col md={4} className="pimagewrapper">
                    <Card className="bg-dark text-white pimage">
                        <Image className="imagepost"
                        src={novel2} 
                        alt="Woman"
                         />
                         <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">WOman</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                     </Card>
                    </Col>
                    <Col md={4} className="pimagewrapper">
                    <Card className="bg-dark text-white pimage">
                        <Image className="imagepost"
                        src={novel3} 
                        alt="Woman"
                         />
                         <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">WOman</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                     </Card>
                    </Col>
                    <Col md={4} className="pimagewrapper">
                    <Card className="bg-dark text-white pimage">
                        <Image className="imagepost"
                        src={novel4} 
                        alt="Woman"
                         />
                         <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">WOman</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                     </Card>
                    </Col>
                    <Col md={4} className="pimagewrapper">
                    <Card className="bg-dark text-white pimage">
                        <Image className="imagepost"
                        src={novel5} 
                        alt="Woman"
                         />
                         <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">WOman</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                     </Card>
                    </Col>
                    <Col md={4} className="pimagewrapper">
                    <Card className="bg-dark text-white pimage">
                        <Image className="imagepost"
                        src={novel2} 
                        alt="Woman"
                         />
                         <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">WOman</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                     </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Gengre