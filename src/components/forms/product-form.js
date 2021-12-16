import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ProductForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _productName: '',
            _unitPrice: 0,
            _stock: 0,
        }
    }
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = () => {
        //tu 1 form giong nhau vua co the add product vua chinh sua product duoc
    }

    render() {
        return (
            <div>
                <Card
                    bg={"secondary"}
                    text={"white"}
                    style={{ width: '30rem' }}
                    className="mb-2"
                >
                    <Card.Header>Thêm hàng</Card.Header>
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
                                    <Form.Control type="number" name="_unitPrice" onChange={(e) => this.changeHandler(e)}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column>
                                    Số lượng tồn
                                </Form.Label>
                                <Col>
                                    <Form.Control type="number" name="_stock" onChange={(e) => this.changeHandler(e)}/>
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
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)
