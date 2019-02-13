import React, { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap'

class GiftComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: '',
            present: ''
        }
    }

    onTextBoxChange = (type, ev) => {
        const value = ev.target.value;
        this.setState({
            ...this.state,
            [type]: value
        })
    }

    render () {
        return (
            <div className='each-gift'>
                <Form>
                    <FormGroup>
                        <FormLabel>Person</FormLabel>
                        <FormControl
                            className='input-person'
                            onChange={ev => this.onTextBoxChange('person', ev)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Present</FormLabel>
                        <FormControl
                            className='input-present'
                            onChange={ev => this.onTextBoxChange('present', ev)}
                        />
                    </FormGroup>
                </Form>
                <Button 
                    className='btn-remove'
                    onClick={() => this.props.removeGift(this.props.gift.id)}
                >
                    Remove Gift
                </Button>
            </div>
        )
    }
}

export default GiftComponent;