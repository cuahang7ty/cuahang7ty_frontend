import React, { Component } from "react";
import { connect } from 'react-redux'
import FindProductBar from "../FindProductBar";
import { Tabs, Tab, Table, Row, Col, Button, Stack } from 'react-bootstrap'
import { addNewCart } from "../../actions/cart-action";

export class CreateBillPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _count: 1,
            _selectedTab: 'Khách 1',
        }
    }

    handleTabSelected = (tabName) => {
        this.setState({
            _selectedTab: tabName
        })
    }

    handleAddNewCart = async () => {
        await this.setState({ _count: this.state._count + 1 })
        this.props.addNewCart(this.state._count)
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
                <Stack direction="horizontal" gap={3}>
                    <Button onClick={() => this.handleAddNewCart()}>thêm đơn</Button>
                </Stack>
                <br />
                <Tabs
                    activeKey={_selectedTab}
                    onSelect={tabName => this.handleTabSelected(tabName)}
                >
                    {cartList.map(cart => {
                        return (
                            <Tab eventKey={cart.customerName} title={cart.customerName}>
                                {table()}
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
    addNewCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBillPage)