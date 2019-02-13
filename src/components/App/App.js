import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import GiftComponent from '../Gifts/Gifts';

import { max_number, array_check } from '../../helper';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gifts: []
        }
    }

    addGifts = () => {
        const { gifts } = this.state;
        gifts.push({id: max_number(this.state.gifts.map(gift => gift.id)) + 1})
        this.setState({
            ...this.state,
            gifts
        })
    }

    removeGift = id => {
        const filteredList = this.state.gifts.filter(gift => {
            return gift.id !== id
        })
        this.setState({
            ...this.state,
            gifts: array_check(filteredList)
        })
    }

    render() {
        return (
            <section>
                <h2>Gift Giver</h2>
                <div className='gift-list'>
                    {
                        this.state.gifts.map (gift => {
                            return (
                                <GiftComponent 
                                    key={gift.id}
                                    gift={gift}
                                    removeGift={this.removeGift}
                                />
                            )
                        })
                    }
                </div>
                <Button
                    className='btn-add'
                    onClick={ev => this.addGifts()}
                >
                    Add Gift
                </Button>
            </section>
        )
    }
}

export default App;