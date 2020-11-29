import React, { Component } from 'react';
import { Form, Button, Input, Container } from 'semantic-ui-react';
class OrderForm extends Component {
    constructor() {
        super();
        this.state = { base64Image: "", itemName: "", unitPrice: "" };
        this.submitHandle = this.submitHandle.bind(this);
        this.changeHandle = this.changeHandle.bind(this);
    }
    _handleReaderLoaded = (evt) => {
        let binaryString = evt.target.result;
        this.setState({ base64Image: btoa(binaryString) });
        console.log()
    }
    changeHandle(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        let file;
        if (target.type === 'file') {
            file = target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = this._handleReaderLoaded.bind(this);
                reader.readAsBinaryString(file);
            }
        } else {
            this.setState({ [name]: value });
        }


    }
    submitHandle(e) {
        fetch('http://localhost:5000/menu/create', { body: JSON.stringify(this.state), method: 'POST', headers: { 'Content-Type': "application/json" }, mode: 'cors' }).then((req, res) => {
            console.log(req.status);
        });
    }
    render() {
        return (
            <Container>
                <Form styles={{ padding: '30px' }} onSubmit={this.submitHandle} onChange={this.changeHandle}>
                    <Form.Field>
                        <Input placeholder='Item Name' name='itemName' />
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder='Item Price' name='unitPrice' type='number' />
                    </Form.Field>
                    <Form.Field>
                        <Input type='file' placeholder='Upload Image' name='image' accept='.jpeg, .jpg, .png' />
                    </Form.Field>
                    <Button type='submit' content='Submit' />
                </Form>
            </Container>

        );
    }
}

export default OrderForm;