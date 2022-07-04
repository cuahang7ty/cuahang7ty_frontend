import React, { Component } from "react";
import ProductTable from "../product/ProductTable";
import { Row, Col } from 'react-bootstrap'
import FindProductBar from "../searching/FindProductBar";
import AddProductForm from '../product/AddProductForm'

class ProductManagePage extends Component {
    render() {
        return (
            <div>
                <Col>
                    <Row>
                        <AddProductForm />
                    </Row>
                    <Row>
                        <FindProductBar/>
                    </Row>
                    <Row>
                        <ProductTable />
                    </Row>
                </Col>
            </div >
        )
    }
}

export default ProductManagePage