import React, { Component } from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import AddNewBillDetailButton from './AddNewBillDetailButton'
import {addBillDetailToCart} from '../../actions/cart-action'

export class SetAmountOfProductModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _show: false,
            _amount: 1
        }
    }

    handleOpen = () => {
        this.setState({
            _show: true
        })
    }

    handleClose = () => {
        this.setState({
            _show: false
        })
        this.props.props_handleCloseResultModal()
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleConfirm = () => {
        const {product, cartSelected, cartList} = this.props
        this.props.addBillDetailToCart(product, this.state._amount, cartSelected, cartList)
    }

    render() {
        return (
            <div>
                <Button onClick={e => this.handleOpen()}>Chọn</Button>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state._show}
                    onHide={this.handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Nhập số lượng cho {this.props.product.productName}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl type="number" name="_amount" defaultValue={1} onChange={(e) => this.changeHandler(e)}></FormControl>

                        {/* <FormControl type="number" value={this.state._amount} onChange={}></FormControl> */}
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <AddNewBillDetailButton product = {this.props.product}/> */}
                        <Button onClick={e => this.handleConfirm()}>Xác nhận</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartSelected: state.cartReducer.cartSelected,
    cartList: state.cartReducer.cartList
})

const mapDispatchToProps = {
    addBillDetailToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(SetAmountOfProductModal)