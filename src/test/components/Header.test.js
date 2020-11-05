import React from 'react';
import Header from 'src/components/Header';
import { shallow } from 'enzyme';
import Container from 'react-bootstrap/Container';
import styled from '@emotion/styled';

describe('Header', () => {

    it('should render properly', () => {

        const header = (
            <Header />
        );

        const result = shallow(header);
        expect(result.name()).toBe('Styled(Container)');
    });

});