import React from 'react';
import Body from 'src/components/Body';
import { shallow } from 'enzyme';
import Row from 'react-bootstrap/Row';

describe('Body', () => {

    it('should render properly', () => {

        const body = (
            <Body />
        );

        const result = shallow(body);
        const root = result.find(Row);
        expect(root).toHaveLength(1);
    });

});