import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Redirect, Route, Routes } from 'react-router-dom'
import ProductManagePage from '../pages/productManage-page';

//Content hiển thị list dựa theo route
class Main extends Component {
    render() {
        return (
            <div>
                <Routes>
                    {/* <Redirect exact from="/" to="/home" /> */}
                    <Route exact path="/product-manage-page" element={<ProductManagePage/>} />
                </Routes>
            </div>
        )
    }
}

export default Main;