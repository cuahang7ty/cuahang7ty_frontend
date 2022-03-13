import React, { Component } from "react";
import CustomerTable from "../tables/CustomerTable";
import { Row, Col } from 'react-bootstrap'
// import AddCustomerForm from '../forms/AddCustomerForm'

class CustomerManagePage extends Component {
    render() {
        return (
            <div>
                <Col>
                    <Row>
                        {/* <AddCustomerForm /> */}
                    </Row>
                    <Row>
                        <CustomerTable />
                    </Row>
                </Col>
            </div >
        )
    }
}

export default CustomerManagePage