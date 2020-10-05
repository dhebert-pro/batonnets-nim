import React from 'react';
import styled from 'styled-components';

const FooterContent = styled.footer`
    height: 50px;
    line-height: 50px;
    color: #FFFFFF;
    background-color: #515B5C;
`;

const Footer = () => (
    <FooterContent className="text-center">
        Créé par David Hébert
    </FooterContent>
);

export default Footer;