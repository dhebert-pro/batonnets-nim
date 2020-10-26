import React from 'react';
import { shallow } from 'enzyme';
import AlertMessageContainer from 'src/components/AlertMessage';
import AlertMessage from 'src/components/AlertMessage/AlertMessage';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import { act } from 'react-dom/test-utils';
import Alert from 'react-bootstrap/Alert';

jest.useFakeTimers();
jest.setTimeout(30000);

let store;

const DEFAULT_STATE = {
    control: {
        alert: {
            message: 'MESSAGE',
            type: 'TYPE'
        }
    }
};

const DEFAULT_STATE_2 = {
    control: {
        alert: {
            message: 'MESSAGE_2',
            type: 'TYPE_2'
        }
    }
};

const EMPTY_STATE = {
    control: {
        alert: {
            message: '',
            type: ''
        }
    }
};

const configureMockStore = configureStore([thunk]);

const initState = state => {
    store = configureMockStore(state);

    jest
        .spyOn(redux, 'useSelector')
        .mockImplementation(selector => selector(store.getState()));

};

describe('AlertMessage', () => {

    it('should be shown if message is not empty', () => {
        
        initState(DEFAULT_STATE);

        const alertMessage = (
            <AlertMessageContainer />
        );
        const result = shallow(alertMessage);
        const alertMessageComponent = result.find(AlertMessage);
        expect(alertMessageComponent).toHaveLength(1);
        const props = alertMessageComponent.props();
        expect(props.show).toBeTruthy();
        expect(typeof props.onClose).toBe('function');
        const message = props.message;
        expect(message).toBeDefined();
        expect(message.type).toBe('TYPE');
        expect(message.message).toBe('MESSAGE');
    });

    it('should display good message if called twice', () => {
        
        initState(DEFAULT_STATE);

        const alertMessage = (
            <AlertMessageContainer />
        );
        const result = shallow(alertMessage);
        let alertMessageComponent = result.find(AlertMessage);
        expect(alertMessageComponent).toHaveLength(1);
        let props = alertMessageComponent.props();
        expect(props.show).toBeTruthy();

        initState(DEFAULT_STATE_2);
        result.setProps({});
        alertMessageComponent = result.find(AlertMessage);
        expect(alertMessageComponent).toHaveLength(1);
        props = alertMessageComponent.props();
        expect(props.show).toBeTruthy();
        const message = props.message;
        expect(message).toBeDefined();
        expect(message.type).toBe('TYPE_2');
        expect(message.message).toBe('MESSAGE_2');

    });

    it('should close after timer', () => {
        
        initState(DEFAULT_STATE);

        const alertMessage = (
            <AlertMessageContainer />
        );
        const result = shallow(alertMessage);
        const alertMessageComponent = result.find(AlertMessage);
        expect(alertMessageComponent).toHaveLength(1);
        const props = alertMessageComponent.props();
        expect(props.show).toBeTruthy();
        act(() => jest.runAllTimers());
        result.setProps({});
        expect(result.find(AlertMessage).props().show).toBeFalsy();
    });

    it('should not be shown if message is empty', () => {
        initState(EMPTY_STATE);

        const alertMessage = (
            <AlertMessageContainer />
        );
        const result = shallow(alertMessage);
        const alertMessageComponent = result.find(AlertMessage);
        expect(alertMessageComponent).toHaveLength(1);
        const props = alertMessageComponent.props();
        expect(props.show).toBeFalsy();
    });

    it('should not be shown after closing alert', () => {
        initState(DEFAULT_STATE);

        const alertMessage = (
            <AlertMessageContainer />
        );
        const result = shallow(alertMessage);
        let alertMessageComponent = result.find(AlertMessage);
        expect(alertMessageComponent).toHaveLength(1);
        const props = alertMessageComponent.props();
        expect(props.show).toBeTruthy();
        expect(typeof props.onClose).toBe('function');
        alertMessageComponent.invoke('onClose')();
        alertMessageComponent = result.find(AlertMessage);
        expect(alertMessageComponent.props().show).toBeFalsy();
        
    });

    it('should display bootstrap Alert', () => {
        const onClose = jest.fn();
        const message = {
            type: 'TYPE',
            message: 'MESSAGE'
        };
        const alertMessage = (
            <AlertMessage show={true} onClose={onClose} message={message} />
        );

        const result = shallow(alertMessage);
        let alertMessageComponent = result.find(Alert);
        expect(alertMessageComponent).toHaveLength(1);
        const props = alertMessageComponent.props();
        expect(props.show).toBeTruthy();
        expect(props.variant).toBe('TYPE');
        alertMessageComponent.invoke('onClose')();
        expect(onClose).toHaveBeenCalled();
        expect(alertMessageComponent.text()).toBe('MESSAGE');
    });

});