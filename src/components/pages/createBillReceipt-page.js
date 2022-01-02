import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap'
import FindProductBar from "../findProductBar";

export class CreateBillReceiptPage extends Component {
    render() {
        return (
            <div>
                <p>create bill page</p>
                <FindProductBar/>
            </div >
        )
    }
}

export default CreateBillReceiptPage