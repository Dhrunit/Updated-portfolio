import React from 'react'
import Slider from "react-slick";
import { FaHtml5 ,FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaNpm, FaAws} from "react-icons/fa";
import { ImGit } from "react-icons/im";
import { HiCode } from "react-icons/hi";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { SiTypescript, SiNextDotJs, SiMongodb } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { IconContainer } from './Slider.styles';
import { PageTitle } from '../../sections/About/About.styles';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <BsArrowRight
            className={className}
            style={{ ...style, display: "block", color:'#ffc947' }}
            onClick={onClick}
        />
    );
  }
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <BsArrowLeft
            className={className}
            style={{ ...style, display: "block", color:'#ffc947' }}
            onClick={onClick}
        />
    );
}


class ReactSlickDemo extends React.Component {
    
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
        <div className="container">
            <Slider {...settings}>
                <IconContainer darkMode={this.props.darkMode}>
                        <PageTitle style={{fontSize:'20px', marginBottom:'1.5rem'}} darkMode={this.props.darkMode}>Frontend & Design</PageTitle>
                        <FaHtml5 className='icon'/>
                        <FaCss3Alt className='icon'/>
                        <FaJs className='icon'/>
                        <FaBootstrap className='icon'/>
                        <SiTypescript className='icon'/>
                        <FiFigma className='icon'/>
                        <SiNextDotJs className='icon'/>
                        <FaReact className='icon'/>
                </IconContainer>
                <IconContainer darkMode={this.props.darkMode}>
                        <PageTitle style={{fontSize:'20px', marginBottom:'1.5rem'}} darkMode={this.props.darkMode}>Backend & Other</PageTitle>
                        <FaNodeJs className='icon'/>
                        <HiCode className='icon'/>
                        <SiMongodb className='icon'/>
                        <FaNpm className='icon'/>
                        <FaAws className='icon'/>
                        <ImGit className='icon'/>
                </IconContainer>
            </Slider>
        </div>
        );
    }
}

export default ReactSlickDemo