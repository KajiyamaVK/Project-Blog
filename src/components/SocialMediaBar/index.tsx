import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { Main, IconContainer } from './style';

export default function SocialMediaBar() {
  return (
    <Main>
        <IconContainer>
            <FiGithub/>
        </IconContainer>
        <IconContainer>
            <FiLinkedin/>
        </IconContainer>
        <IconContainer>
            <FiInstagram/>
        </IconContainer>
    </Main>
  )};