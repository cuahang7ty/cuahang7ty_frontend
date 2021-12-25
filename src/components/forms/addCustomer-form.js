import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { addNewCustomer } from '../../actions/customer-action'

export class AddCustomerForm extends Component {
    constructor(props) {
        super(props)

        // this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            _fullName: '',
            _numberphone: 0,
            _level: 0,
        }
        // this.firstText = React.createRef()
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = () => {
        const { _fullName, _numberphone, _level } = this.state
        this.props.addNewCustomer(_fullName, _numberphone, _level)
            .then(result => console.log(result))
    }

    render() {
        return (
            <div>
                <Card
                    bg={"dark"}
                    text={"white"}
                    style={{ width: '30rem' }}
                    className="mb-4"
                >
                    <Card.Header>Thêm mặt hàng</Card.Header>
                    <Card.Body>
                        <Form className="mb-3" onSubmit={this.submitHandler}>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column>
                                    Tên khách
                                </Form.Label>
                                <Col>
                                    <Form.Control name="_fullName" onChange={(e) => this.changeHandler(e)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column>
                                    Số điện thoại
                                </Form.Label>
                                <Col>
                                    <Form.Control type="number" name="_numberphone" onChange={(e) => this.changeHandler(e)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column>
                                    Level
                                </Form.Label>
                                <Col>
                                    <Form.Control type="number" name="_level" onChange={(e) => this.changeHandler(e)} />
                                </Col>
                            </Form.Group>

                            <Button type="submit">Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    addNewCustomer,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomerForm)
