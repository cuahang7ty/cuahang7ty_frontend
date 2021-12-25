import React, { Component } from "react";
import AddProductForm from "../forms/addProduct-form";
import ProductTable from "../tables/product-table";
import { Row, Col } from 'react-bootstrap'
import SpeechRecognitionTool from "../speechRecognitionTool";

class ProductManagePage extends Component {
    render() {
        return (
            <div>
                <Col>
                    <Row>
                        <AddProductForm />
                    </Row>
                    <Row>
                        <SpeechRecognitionTool/>
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