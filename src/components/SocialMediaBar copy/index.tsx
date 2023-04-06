import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { Main, IconContainer } from './style';

export default function ContactBar() {
    return (
        <Main>
            <IconContainer>
                <BsWhatsapp />
            </IconContainer>

            <IconContainer>
                <HiOutlineMail />
            </IconContainer>

        </Main>
    )
};