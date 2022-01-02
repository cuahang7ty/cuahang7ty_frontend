import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Stack } from 'react-bootstrap'
// import { addKeyword } from '../actions/product-action'

export class AddKeyWordModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _show: false,
            _product: {},

            _primaryKey: '',
            _secondKeys: []

        }
    }

    handleShow = (index) => {
        this.setState({
            _show: true,
            _product: this.props.productList[index]
        })
    }

    handleClose = () => {
        this.setState({ _show: false })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeHandlerSecondKey = (e) => {
        let secondKeys = [...this.state._secondKeys]
        secondKeys[0] = e.target.value
        this.setState({
            _secondKeys: [...secondKeys]
        })
    }

    handleAddKeyword = (_id) => {
        const { _primaryKey, _secondKeys } = this.state
        const keywords = {
            primaryKey: _primaryKey,
            secondKeys: _secondKeys
        }
        // this.props.addKeyword(_id, keywords)
    }

    render() {
        const { indexOfProduct } = this.props
        const { _show, _product, _keyword } = this.state
        return (
            <div>
                <Button variant='outline-success' onClick={e => this.handleShow(indexOfProduct)}>thêm khóa tìm kiếm</Button>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={_show}
                // onShow={e => this.setState({_product: this.props.product})}
                >
                    <Modal.Header>
                        <Modal.Title>
                            THÊM KHÓA TÌM KIẾM
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Mặt hàng: {_product.tenMatHang}</h4>
                            <p>Khóa chính: </p>
                            <input name='_primaryKey' onChange={(e) => this.changeHandler(e)}></input>

                            <p>Khóa phụ: </p>
                            <input name='secondKeys[0]' type="text" value={this.state._secondKeys[0]} onChange={e => this.changeHandlerSecondKey(e)} />

                        <Button style={{ marginLeft: '1rem' }} variant='success' onClick={e => this.handleAddKeyword(_product._id)}>thêm</Button>
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
    productList: state.productReducer.productList
})

const mapDispatchToProps = {
    // addKeyword
}

export default connect(mapStateToProps, mapDispatchToProps)(AddKeyWordModal
)
