import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram,faTwitter,faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
import { FaGooglePlay } from "react-icons/fa";
import { IoMdAppstore } from "react-icons/io";
import { 
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
    } from "./FooterStyles";
    
    const Footer = () => {
    return (
        <Box>
        <h1 style={{ color: "green",
                    textAlign: "center",
                    marginTop: "-50px" }}>
            
        </h1>
        <Container>
            <Row>
            <Column>
                <img src="images.png" className='logo'/>
                <br/>
                <p className="text-white">Our Purpose is to sustainably make the pleasure and Benefits of Lakme Beauty Product.</p>
            </Column>
            <Column>
                <Heading>Download Our App</Heading>
                <FooterLink href="#"><IoMdAppstore/>Download on the App store</FooterLink>
                <FooterLink href="#"><FaGooglePlay/>Android App on Google play</FooterLink>
                
            </Column>
            <Column>
                <Heading>Contact Us</Heading>
                <FooterLink href="#">Uttar Pradesh</FooterLink>
                <FooterLink href="#">Ahemdabad</FooterLink>
                <FooterLink href="#">Indore</FooterLink>
                <FooterLink href="#">Mumbai</FooterLink>
            </Column>
            <Column>
                <Heading>Social Media</Heading>
                <FooterLink href="#">
                <FontAwesomeIcon icon={faFacebook} />
                    <span style={{ marginLeft: "10px" }}>
                    Facebook
                    </span>
                
                </FooterLink>
                <FooterLink href="#">
                <FontAwesomeIcon icon={faInstagram} />
                    <span style={{ marginLeft: "10px" }}>
                    Instagram
                    </span>
                
                </FooterLink>
                <FooterLink href="#">
                <FontAwesomeIcon icon={faTwitter} />
                    <span style={{ marginLeft: "10px" }}>
                    Twitter
                    </span>
                
                </FooterLink>
                <FooterLink href="#">
                <FontAwesomeIcon icon={faYoutube} />
                    <span style={{ marginLeft: "10px" }}>
                    Youtube
                    </span>
                
                </FooterLink>
            </Column>
            </Row>
        </Container>
        </Box>
    );
    };
    export default Footer;
    