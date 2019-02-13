import React from 'react';
import { shallow } from 'enzyme';
import GiftComponent from './Gifts';

describe('Gift', () => {
    const mockRemove = jest.fn();
    const id = 1;
    const props = { gift: { id }, removeGift: mockRemove }
    const gift = shallow(<GiftComponent {...props} />);

    it('Renders correctly', () => {
        expect(gift).toMatchSnapshot();
    })

    it('Initializes a person and present inside `state`', () => {
        expect(gift.state()).toEqual({person: '', present: ''})
    })

    describe('On typing in person input', () => {
        const person= 'Uncle';
        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: person }});
        })

        it('Updates the person', () => {
            expect(gift.state().person).toEqual(person);
        })
    })

    describe('On typing in present input', () => {
        const present= 'Dinner';
        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target: { value: present }});
        })

        it('Updates the present', () => {
            expect(gift.state().present).toEqual(present);
        })
    })

    describe('On clicking the `remove gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        })

        it ('calls the `removeGift` callback', () => {
            expect(mockRemove).toHaveBeenCalledWith(id);
        })
    })
})