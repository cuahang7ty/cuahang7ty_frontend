import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductManagePage from '../pages/productManage-page'
import CustomerManagePage from '../pages/customerManage-page'
import MakeBillPage from '../pages/makeBill-page'

//Content hiển thị list dựa theo route
class Main extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/product-manage-page" />} />
                    <Route exact path="/product-manage-page" element={<ProductManagePage />} />
                    <Route exact path="/customer-manage-page" element={<CustomerManagePage />} />
                    <Route exact path="/make-bill-page" element={<MakeBillPage />} />

                </Routes>
            </div>
        )
    }
}

export default Main;