import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductManagePage from '../pages/ProductManagePage'
import CustomerManagePage from '../pages/CustomerManagePage'
import CreateBillPage from '../pages/CreateBillPage'

//Content hiển thị list dựa theo route
class Main extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/product-manage-page" />} />
                    <Route exact path="/product-manage-page" element={<ProductManagePage />} />
                    <Route exact path="/customer-manage-page" element={<CustomerManagePage />} />
                    <Route exact path="/create-bill-page" element={<CreateBillPage />} />

                </Routes>
            </div>
        )
    }
}

export default Main;