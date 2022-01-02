import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductManagePage from '../pages/productManage-page'
import CustomerManagePage from '../pages/customerManage-page'
import CreateBillReceiptPage from '../pages/createBillReceipt-page'

//Content hiển thị list dựa theo route
class Main extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/product-manage-page" />} />
                    <Route exact path="/product-manage-page" element={<ProductManagePage />} />
                    <Route exact path="/customer-manage-page" element={<CustomerManagePage />} />
                    <Route exact path="/create-bill-receipt-page" element={<CreateBillReceiptPage />} />

                </Routes>
            </div>
        )
    }
}

export default Main;