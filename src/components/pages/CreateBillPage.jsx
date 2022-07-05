import React, { Component } from "react";
import { connect } from 'react-redux'
import FindProductBar from "../searching/FindProductBar"
import { Tabs, Tab, Table, Row, Col, Button, Stack } from 'react-bootstrap'
import { addNewCart, loadCartListFromLocalStorage, removeACart } from "../../actions/cart-action";
import BillDetailTable from "../bill/BillDetailTable";

export class CreateBillPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _count: 1,
            _selectedTab: 'Khách 1',
        }
    }

    componentDidMount = () => {
        this.props.loadCartListFromLocalStorage()
    }

    handleTabSelected = async (tabName) => {
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

    test = () => {
        console.log(window.localStorage.cartList)
        // this.props.loadCartListFromLocalStorage()
    }

    render() {
        const { _selectedTab, _count } = this.state
        const { cartList } = this.props

        const table = () => {
            return (
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            )
        }

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
                                {/* {table()} */}
                                <BillDetailTable/>
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
    removeACart
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBillPage)