import React from 'react';
import AppRoutes from 'src/components/AppRoutes';
import { shallow } from 'enzyme';
import { Switch } from 'react-router-dom';

describe('AppRoutes', () => {

    it('should render properly', () => {

        const appRoutes = (
            <AppRoutes />
        );

        const result = shallow(appRoutes);
        const root = result.find(Switch);
        expect(root).toHaveLength(1);
    });

});