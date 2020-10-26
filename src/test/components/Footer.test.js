import React from 'react';
import Footer from 'src/components/Footer';
import { shallow } from 'enzyme';

describe('Footer', () => {

    it('should render properly', () => {

        const footer = (
            <Footer />
        );

        const result = shallow(footer);
        expect(result.name()).toBe('Styled(footer)');
    });

});