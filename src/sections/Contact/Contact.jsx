import React from 'react'
import { ContactImg, ContactSection, ContactTitle, FooterText, SocialIcon, SocialSection, TitleSection } from './Contact.styles';
import ContactImage from '../../assets/contactImg.jpg'
import { FaTwitter , FaLinkedin, FaGithub, FaGoogle, FaInstagram } from 'react-icons/fa'
import { Hidden } from '@material-ui/core';
import Fade from 'react-reveal/Fade'


export default function Contact() {
    return (
        <ContactSection id="contact">
            <Fade left>
                <TitleSection>
                    <ContactTitle>I would love to help you with your project or maybe you just want to say Hi 👋 and have a quick chat? My inbox is open for all 😁</ContactTitle> 
                </TitleSection>
            </Fade>
            <Hidden only={['xs', 'sm']}>
                <ContactImg src={ContactImage}/>
            </Hidden>
            <Fade left>
                <SocialSection>
                    <SocialIcon href='https://twitter.com/dhrunit_' target='_blank' rel="noreferrer">
                        <FaTwitter/>
                    </SocialIcon>
                    <SocialIcon href='https://www.linkedin.com/in/dhrunitprajapati/' target='_blank' rel="noreferrer">
                        <FaLinkedin/>
                    </SocialIcon>
                    <SocialIcon href='https://github.com/Dhrunit' target='_blank' rel="noreferrer">
                        <FaGithub/>
                    </SocialIcon>
                    <SocialIcon href='mailto:dhrunitprajapati@gmail.com' target='_blank' rel="noreferrer">
                        <FaGoogle/>
                    </SocialIcon>
                    <SocialIcon href='https://www.instagram.com/dhrunit_/' target='_blank' rel="noreferrer">
                        <FaInstagram/>
                    </SocialIcon>
                </SocialSection>
            </Fade>
            <br/>
            <Fade up>
                <FooterText>
                    Made with ❤️ by Dhrunit Prajapati
                </FooterText>
            </Fade>
        </ContactSection>
    )
}
