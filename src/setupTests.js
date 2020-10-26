import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enableHooks from 'jest-react-hooks-shallow';
import 'jest-canvas-mock';

enableHooks(jest);

Enzyme.configure({
    adapter: new Adapter()
});