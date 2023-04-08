import styled from 'styled-components';
import Link from 'next/link';



const LinkLabel = styled.span`
    color:#ddd
`;

const LinkComponent = styled(Link)`
    text-decoration: none;
`;

export { LinkLabel, LinkComponent }