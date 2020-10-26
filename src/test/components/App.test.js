import React from 'react';
import App from 'src/components/App';
import { shallow } from 'enzyme';
import Container from 'react-bootstrap/Container';

describe('App', () => {

    it('should render properly', () => {

        const app = (
            <App />
        );

        const result = shallow(app);
        const root = result.find(Container);
        expect(root).toHaveLength(1);
    });

});