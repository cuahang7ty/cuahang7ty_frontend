import React, { Component } from "react";
import { connect } from 'react-redux'
import FindProductBar from "../searching/FindProductBar"
import { Tabs, Tab, Table, Row, Col, Button, Stack } from 'react-bootstrap'
import { addNewCart, loadCartListFromLocalStorage, removeACart, switchCart } from "../../actions/cart-action";
import BillDetailTable from "../bill/BillDetailTable";

export class CreateBillPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _count: 1,
            _selectedTab: 'Đơn 1',
        }
    }

    componentDidMount = () => {
        this.props.loadCartListFromLocalStorage()
    }

    handleTabSelected = async (tabName) => {
        var index = this.props.cartList.map(function(e) { return e.customerName; }).indexOf(tabName);
        this.props.switchCart(index)
        await this.setState({
            _selectedTab: tabName
        })
    }

    handleAddNewCart = async () => {
        //const { cartList } = this.props
        // this.props.addNewCart(cartList.length + 1)
        var today = new Date()
        this.props.addNewCart(today.getHours().toString() + today.getMinutes().toString() + today.getSeconds().toString())
    }

    render() {
        const { _selectedTab, _count } = this.state
        const { cartList } = this.props

        return (
            <div>
                <FindProductBar />
                <Stack direction="horizontal" gap={3}>
                    <Button onClick={() => this.handleAddNewCart()}>thêm đơn</Button>
                    <Button onClick={() => this.test()}>test</Button>
                    <Button onClick={() => window.localStorage.clear()}>clear</Button>
                    <Button onClick={() => this.props.removeACart(this.state._selectedTab)} variant="danger">remove</Button>
                    {/* <SetAmountOfProductModal /> */}
                </Stack>
                <br />
                <Tabs
                    activeKey={_selectedTab}
                    onSelect={tabName => this.handleTabSelected(tabName)}
                >
                    {cartList.map(cart => {
                        return (
                            <Tab eventKey={cart.customerName} title={cart.customerName}>
                                <BillDetailTable props_billDetails = {cart.billDetails}/>
                            </Tab>
                        )
                    })}
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartList: state.cartReducer.cartList
})

const mapDispatchToProps = {
    addNewCart,
    loadCartListFromLocalStorage,
    removeACart,
    switchCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBillPage)