import React from 'react';
import { configure , shallow , mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../components/Image';
import Modal from '../components/Modal';

configure({ adapter: new Adapter() });
describe('<Image/>', () => {
    test('deberia retornar que el componente devuelve un valor ', () => {
        const wrapper = shallow(<Image/>);
        expect(wrapper.find(Image)).toBeDefined();//verifica que el componente este devolviendo "algo"
    });
  });
  describe('<Modal/>', () => {
    test('deberia retornar que el componente devuelve un valor ', () => {
        const wrapper = shallow(<Modal/>);
        expect(wrapper.find(Modal)).toBeDefined();//verifica que el componente este devolviendo "algo"
    });
  });