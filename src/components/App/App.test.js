import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow( <App /> );

    it('Renders correctly', () => {
        expect(app).toMatchSnapshot();
    })

    it('Initializes the `state` with and empty list of gifts', () => {
        expect(app.state().gifts).toEqual([])
    })

    describe('When clicking the `add-gift` button', () => {

        const id = 1;
        
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        afterEach(() => {
            app.setState({
                gifts: []
            });
        })

        it('Add a new gift to the gifts `state` when clicking the `add gift` button', () => {
            expect(app.state().gifts).toEqual([{ id: id }]);
        });
    
        it('Adds a new gift to the gifts on clicking the `add gift` button', () => {
            expect(app.find('.gift-list').children().length).toEqual(1)
        });

        it('creates a gift', () => {
            expect(app.find('GiftComponent').exists()).toBe(true);
        })

        describe('User wants to remove a  gift from gifts', () => {
            beforeEach(() => {
                app.instance().removeGift(id);
            })

            it('Removes the gift from the `state`', () => {
                expect(app.state().gifts).toEqual([])
            })
        })
    })
})