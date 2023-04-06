import styled from 'styled-components';
import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { ReactElement, ReactNode } from 'react';



const Main = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 20px;
    font-size:30px;
    color: #ddd;
    &::after{
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: #ddd;
}
`;

const FormatedLink = styled(Link)`
    color: #ddd;
    
`;

const IconContainer = styled.div`
    margin: 5px 0;
    &:hover{
        cursor: pointer;
        color: #00bf63;
    }
`;

type IconProps = {
    icon: React.ComponentType<{ size?: number }>;
    children?: ReactNode;
};

const Icon = ({ icon: IconComponent, children }: IconProps): ReactElement => (
    <IconContainer>
        <IconComponent />
        {children}
    </IconContainer>
);

const GithubIcon = () => <Icon icon={FiGithub} />;
const LinkedinIcon = () => <Icon icon={FiLinkedin} />;

export { Main, IconContainer, FormatedLink, GithubIcon, LinkedinIcon }