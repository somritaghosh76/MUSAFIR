import React from "react";
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import worldImg from '../assets/images/world.png';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from './../shared/Subtitle';

const Home = () => {
    return <>

        {/* ======= hero section start ======= */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-centre">
                                <Subtitle subtitle={'Know Before You Go'} />
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>Travelling opens the dooor to creating{" "} <span className="highlight">
                                memories</span></h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus libero, voluptas, laboriosam quos impedit incidunt ratione corporis dolorem natus eum eius! Vel?</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* ======= hero section end ======= */}
    </>
};

export default Home;