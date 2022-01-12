import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Stack, Col, Row } from 'react-bootstrap'
import { getKeywordsOfProduct } from '../actions/keyword-action'
import Badge from 'react-bootstrap/Badge'

export class AddKeyWordModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _show: false,
            _product: {},

            _keywords: []

        }
    }

    componentDidUpdate = (prevProps) => {
        const { keywords } = this.props
        if (prevProps.keywords !== keywords && keywords !== null) {
            this.setState({ _keywords: keywords })
        }
    }

    handleShow = async (index) => {
        const product = this.props.productList[index]
        this.props.getKeywordsOfProduct(product._id).then(keywords => {
            this.setState({
                _show: true,
                _product: product,
                _keywords: keywords
            })
        })
    }

    handleClose = () => {
        this.setState({ _show: false })
    }

    // changeHandler = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    render() {
        const { indexOfProduct, keywords } = this.props
        const { _show, _product, _keywords } = this.state

        const keywordList =
            <div>
                {_keywords.map(keyword => {
                    return (
                        <div>
                            <Row xs="auto">
                                <Col item sm={1}>
                                    <h5>
                                        <Badge bg="primary">{keyword.primaryKey}</Badge>
                                    </h5>
                                </Col>
                                <Col>/</Col>
                                <Col style={{ minWidth: "10rem" }}>
                                    <Stack direction="horizontal" gap={1}>
                                        {
                                            keyword.secondKeys.map(secondKey => {
                                                return (
                                                    <h6>
                                                        <Badge pill bg="secondary">{secondKey}</Badge>
                                                    </h6>)
                                            })
                                        }
                                        <Button size='sm' variant="outline-secondary">+</Button>
                                    </Stack>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </div>
                    )
                })
                }
            </div>

        return (
            <div>
                <Button variant='outline-success' onClick={e => this.handleShow(indexOfProduct)}>khóa tìm kiếm</Button>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={_show}
                // onShow={e => this.setState({_product: this.props.product})}
                >
                    <Modal.Header>
                        <Modal.Title>
                            TỪ KHÓA TÌM KIẾM
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Mặt hàng: {_product.productName}</h4>
                        {keywordList}
                        <Button style={{ marginTop: '1rem' }} size="sm" variant='outline-primary' onClick={e => console.log('them khoa chinh')}>+</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='outline-danger' onClick={e => this.handleClose(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    productList: state.productReducer.productList,
    keywords: state.keywordReducer.keywords
})

const mapDispatchToProps = {
    getKeywordsOfProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddKeyWordModal)
