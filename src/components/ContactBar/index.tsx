import { Main, WhatsappIcon, EmailIcon, FormatedLink } from './style';

export default function ContactBar() {
    return (
        <Main>
            <FormatedLink href="https://wa.me/+5511988269888" target='_blank'>
                <WhatsappIcon />
            </FormatedLink>

            <FormatedLink href='mailto:victor.kajiyama@gmail.com' target='_blank'>
                <EmailIcon />
            </FormatedLink>
        </Main>
    )
};