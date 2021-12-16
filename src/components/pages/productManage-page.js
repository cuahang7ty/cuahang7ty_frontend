import React, { Component } from "react";
import AddProductForm from "../forms/addProduct-form";
import ProductTable from "../tables/product-table";

class ProductManagePage extends Component {
    render() {
        return (
            <div>
                <p>product manage page</p>
                <AddProductForm/>
                <ProductTable/>
            </div>
        )
    }
}

export default ProductManagePage