import React, { Component } from "react";
import AddProductForm from "../forms/addProduct-form";
import ProductTable from "../tables/product-table";
import { Row, Col } from 'react-bootstrap'
import FindProductBar from "../findProductBar";

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