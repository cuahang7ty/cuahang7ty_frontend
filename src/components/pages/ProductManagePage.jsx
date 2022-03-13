import React, { Component } from "react";
import ProductTable from "../tables/ProductTable";
import { Row, Col } from 'react-bootstrap'
import FindProductBar from "../FindProductBar";
import AddProductForm from '../forms/AddProductForm'

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