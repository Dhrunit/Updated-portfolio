import Fade from 'react-reveal/Fade'
import { PageTitle } from '../About/About.styles';
import { GeneralText, SkillsSvgImage } from './Skills.styles';
import ReactSlickDemo from '../../components/Slider/Slider'
import SkillsSvg from '../../assets/svgs/SkillsSvg.svg'

export default function Skills(props) {
    return (
        <div id="skills">
			<Fade down>
                <PageTitle darkMode={props.darkMode}>Skills</PageTitle>
            </Fade>
            <div style={{textAlign:'center',maxWidth:'85%',margin:'0 auto'}}>
                <Fade left>
                    <GeneralText darkMode={props.darkMode}>
                        I make production ready web applications using the technologies mentioned below. I learned all of them by myself which is why I call myself a self-taught web developer 😄.
                    </GeneralText>
                </Fade>
            </div>
                <Fade right>
                    <div style={{textAlign:'center',maxWidth:'85%',margin:'2rem auto', border:'3px solid #ffc947', padding:'1rem', borderRadius: '20px'}}>
                        <ReactSlickDemo darkMode={props.darkMode}/>
                    </div>
                </Fade>
			<Fade up>
                <div style={{textAlign:'center',maxWidth:'85%',margin:'0 auto'}}>
                    <SkillsSvgImage src={SkillsSvg}/>
                </div>
            </Fade>
            <br />
			<br />
			<br />
			<br />
			<br />
        </div>
    )
}
