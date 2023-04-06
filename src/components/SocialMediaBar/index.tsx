import { Main, FormatedLink, GithubIcon, LinkedinIcon } from './style';

export default function SocialMediaBar() {
    return (
        <Main>
            <FormatedLink href="https://github.com/KajiyamaVK/" target='_blank'>
                <GithubIcon />
            </FormatedLink>

            <FormatedLink href="https://www.linkedin.com/in/victor-kajiyama/" target='_blank'>
                <LinkedinIcon />
            </FormatedLink>

        </Main>
    )
};