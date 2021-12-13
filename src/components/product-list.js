import React, { Component } from 'react';
import { getAllProduct } from '../actions/product-action'
import { connect } from 'react-redux'

class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _productList: []
    }
  }

  async componentWillMount() {
    let productList = await this.props.getAllProduct()
    this.setState({
      _productList: productList
    })
    console.log('helo',this.state._productList)
  }

  render() {
    return (
      <div>
        <p>welcome to create product list</p>
        {this.state._productList.map(product => <div>{product.productName}</div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  productList: state.productReducer.productList
})

const mapDispatchToProps = {
  getAllProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)