import React from 'react'
import { Grid } from '@material-ui/core';
import { PageTitle } from '../About/About.styles';
import Fade from 'react-reveal/Fade'
import { FiGithub } from "react-icons/fi";
import { SkillsBoxPrimary, SkillsBoxSecondary, SubTitleDiv, TitleDiv, WorkActionButton } from './Work.styles';

export default function Work(props) {
    return (
        <div id="work">
            <Fade up >
                <PageTitle darkMode={props.darkMode}>Work</PageTitle>
                <div style={{textAlign:'center',maxWidth:'85%',margin:'0 auto'}}>
                    <Grid container justifyContent='space-evenly'>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12} className='skills-box'>
                            <a target='_blank' href='https://github.com/Dhrunit/student-corner-frontend' rel="noreferrer">
                                <SkillsBoxPrimary darkMode={props.darkMode}>
                                    <TitleDiv> 
                                        {/* <IoSunnySharp/> */}
                                        <span>
                                            Student Corner
                                        </span>
                                    </TitleDiv>
                                    <SubTitleDiv darkMode={props.darkMode}>
                                        It is a Project built using MERN Stack with helping students and teacher to collaborate as its main goal
                                    </SubTitleDiv>
                                    <SubTitleDiv style={{padding:0}} darkMode={props.darkMode}>
                                        Technology: Full Stack (MERN Stack)
                                    </SubTitleDiv>
                                </SkillsBoxPrimary>
                            </a>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12} className='skills-box'>
                            <a target='_blank' href='https://github.com/Dhrunit/colorapp' rel="noreferrer">
                                <SkillsBoxSecondary darkMode={props.darkMode}>
                                    <TitleDiv> 
                                        {/* <FaRegSmileBeam/> */}
                                        <span>
                                            Color App
                                        </span>
                                    </TitleDiv>
                                    <SubTitleDiv darkMode={props.darkMode}>
                                        It is a Project built using ReactJs , It provides the user to create their color palettes and can also be called Flat Ui Clone
                                    </SubTitleDiv>
                                    <SubTitleDiv style={{padding:0}} darkMode={props.darkMode}>
                                        Technology: ReactJs
                                    </SubTitleDiv>
                                </SkillsBoxSecondary>
                            </a>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12} className='skills-box' rel="noreferrer">
                            <a target='_blank' href='https://github.com/Dhrunit' rel="noreferrer">
                                <SkillsBoxPrimary darkMode={props.darkMode}>
                                    <TitleDiv> 
                                        {/* <IoSunnySharp/> */}
                                        <span>
                                            DevConnector
                                        </span>
                                    </TitleDiv>
                                    <SubTitleDiv darkMode={props.darkMode}>
                                        An Web app which helps interact developers with other developers where they can share their ideas and post them and discuss too.
                                    </SubTitleDiv>
                                    <SubTitleDiv style={{padding:0}} darkMode={props.darkMode}>
                                        Technology: Full Stack (MERN Stack)
                                    </SubTitleDiv>
                                </SkillsBoxPrimary>
                            </a>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12} className='skills-box'>
                            <a target='_blank' href='https://github.com/Dhrunit/crwn-clothing' rel="noreferrer">
                                <SkillsBoxSecondary darkMode={props.darkMode}>
                                    <TitleDiv> 
                                        {/* <FaRegSmileBeam/> */}
                                        <span>
                                            React E-commerce app
                                        </span>
                                    </TitleDiv>
                                    <SubTitleDiv darkMode={props.darkMode}>
                                        ReactJs project using Redux for state management and test Stripe payments functionality with firebase for authentication.
                                    </SubTitleDiv>
                                    <SubTitleDiv style={{padding:0}} darkMode={props.darkMode}>
                                        Technology: Full Stack (MERN Stack)
                                    </SubTitleDiv>
                                </SkillsBoxSecondary>
                            </a>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12} className='skills-box'>
                            <a target='_blank' href='https://github.com/Dhrunit/Place-sharing-app-frontend' rel="noreferrer">
                                <SkillsBoxPrimary darkMode={props.darkMode}>
                                    <TitleDiv> 
                                        {/* <IoSunnySharp/> */}
                                        <span>
                                            Place Sharing App
                                        </span>
                                    </TitleDiv>
                                    <SubTitleDiv darkMode={props.darkMode}>
                                        A web app which lets users sign-up and sign-in using JWT and perform CRUD operation on places added using Rest Apis,
                                    </SubTitleDiv>
                                    <SubTitleDiv style={{padding:0}} darkMode={props.darkMode}>
                                        Technology: Full Stack (MERN Stack)
                                    </SubTitleDiv>
                                </SkillsBoxPrimary>
                            </a>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12} className='skills-box'>
                            <a target='_blank' href='https://github.com/Dhrunit/react-website' rel="noreferrer">
                                <SkillsBoxSecondary darkMode={props.darkMode}>
                                    <TitleDiv> 
                                        {/* <FaRegSmileBeam/> */}
                                        <span>
                                            React Hooks Website
                                        </span>
                                    </TitleDiv>
                                    <SubTitleDiv darkMode={props.darkMode}>
                                        A React website which uses react router for route handling and a responsive reactwebsite built with react hooks
                                    </SubTitleDiv>
                                    <SubTitleDiv style={{padding:0}} darkMode={props.darkMode}>
                                        Technology: ReactJs
                                    </SubTitleDiv>
                                </SkillsBoxSecondary>
                            </a>
                        </Grid>
                    </Grid>
                    <Fade left>
                        <div style={{display:'flex', justifyContent:'center', marginTop:'2rem'}}>
                            <WorkActionButton rel="noreferrer" target='_blank' href='https://github.com/Dhrunit'>
                                <FiGithub style={{fontSize:'1.5rem'}}/>
                                <p>More on my Github</p>
                            </WorkActionButton>
                        </div>
                    </Fade>
                </div>
                <br />
                <br />
                <br />
                <br />
            </Fade>
        </div>
    )
}
