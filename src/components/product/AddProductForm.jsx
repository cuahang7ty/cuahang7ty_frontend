import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { addNewProduct } from '../../actions/product-action'

export class AddProductForm extends Component {
    constructor(props) {
        super(props)

        // this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            _productName: '',
            _retailPrice: 0,
            _costPrice: 0,
            _stock: 0,
        }
        // this.firstText = React.createRef()
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = () => {
        const { _productName, _retailPrice, _costPrice, _stock } = this.state

        this.props.addNewProduct(_productName, _retailPrice, _costPrice, _stock)
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
                                    Tên hàng
                                </Form.Label>
                                <Col>
                                    <Form.Control name="_productName" onChange={(e) => this.changeHandler(e)} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column>
                                    Giá bán lẻ
                                </Form.Label>
                                <Col>
                                    <Form.Control type="number" name="_retailPrice" onChange={(e) => this.changeHandler(e)} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column>
                                    Giá nhập
                                </Form.Label>
                                <Col>
                                    <Form.Control type="number" name="_costPrice" onChange={(e) => this.changeHandler(e)} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column>
                                    Số lượng tồn
                                </Form.Label>
                                <Col>
                                    <Form.Control type="number" name="_stock" onChange={(e) => this.changeHandler(e)} />
                                </Col>
                            </Form.Group>

                            <Button variant="success" type="submit">Submit</Button>
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
    addNewProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm)
