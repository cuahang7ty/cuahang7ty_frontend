import React, { Component } from "react";
import CustomerTable from "../tables/customer-table";
import { Row, Col } from 'react-bootstrap'
import AddCustomerForm from '../forms/addCustomer-form'

class CustomerManagePage extends Component {
    render() {
        return (
            <div>
                <Col>
                    <Row>
                        <AddCustomerForm />
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