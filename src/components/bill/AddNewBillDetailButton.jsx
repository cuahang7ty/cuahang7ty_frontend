import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import {addBillDetailToCart} from '../../actions/cart-action'

export class AddNewBillDetailButton extends Component {
    // constructor(props){
    //     super(props)

    // }

    

    render() {
        return (
            <div>
                <Button variant='outline-success' onClick={e => this.handleConfirm()}>xác nhận</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartList: state.cartReducer.cartList
})

const mapDispatchToProps = {
    addBillDetailToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewBillDetailButton)