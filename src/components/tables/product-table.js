import React, { Component } from 'react';
import { deleteAProductForever, getAllProduct, editProduct } from '../../actions/product-action'
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap';


class ProductTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _productList: [],
      _editRow: -1,

      _id: '',
      _barcode: '',
      _productName: '',
      _unitPrice: 0,
      _stock: 0
    }
  }

  async componentWillMount() {
    this.setState({
      _productList: await this.props.getAllProduct()
    })
  }

  componentDidUpdate = (prevProps) => {
    let { productList } = this.props
    if (prevProps.productList !== productList && productList !== null) {
      this.setState({
        _productList: productList
      })
    }
  }

  deleteHandler = (_id) => {
    var answer = window.confirm("Bạn thật sự muốn xóa?");
    if (answer) {
      this.props.deleteAProductForever(_id)
        .then(result => {
          this.props.getAllProduct()
          alert(result.msg)
        })
    }
  }

  setEditRow = (row, product) => {
    const { _id, productName, barcode, unitPrice, stock } = product
    this.setState({
      _editRow: row,
      _id: _id,
      _barcode: barcode,
      _productName: productName,
      _unitPrice: unitPrice,
      _stock: stock
    })
  }

  stopEdit = () => {
    this.setState({
      _editRow: -1
    })
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  saveChange = async (product) => {
    this.setState({
      _editRow: -1
    })
    const { _id, _barcode, _productName, _unitPrice, _stock } = this.state
    await this.props.editProduct(_id, _barcode, _productName, _unitPrice, _stock)
    this.props.getAllProduct()
  }

  render() {
    const { _productList, _editRow } = this.state

    return (
      <div>
        {alert}
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>_id</th>
              <th>Barcode</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {_productList.map(product => {
              let row = _productList.indexOf(product) + 1
              const { _id, barcode, productName, unitPrice, stock } = product
              if (_editRow !== row) {
                return (
                  <tr>
                    <td>{row}</td>
                    <td>{_id}</td>
                    <td>{barcode}</td>
                    <td>{productName}</td>
                    <td>{unitPrice}</td>
                    <td>{stock}</td>
                    <td>
                      <Button style={{ marginRight: '1rem', width: '5rem' }} variant="outline-danger" onClick={e => this.deleteHandler(_id)}>xóa</Button>
                      <Button style={{ width: '5rem' }} variant="outline-warning" onClick={e => this.setEditRow(row, product)}>sửa</Button>
                    </td>
                  </tr>
                )
              }
              else
                return (
                  <tr>
                    <td>{row}</td>
                    <td>{_id}</td>
                    <td>
                      <input defaultValue={barcode} placeholder={barcode} name='_barcode' onChange={e => this.changeHandler(e)} />
                    </td>
                    <td>
                      <input defaultValue={productName} placeholder={productName} name='_productName' onChange={e => this.changeHandler(e)} />
                    </td>
                    <td>
                      <input defaultValue={unitPrice} placeholder={unitPrice} name='_unitPrice' onChange={e => this.changeHandler(e)} />
                    </td>
                    <td>
                      <input defaultValue={stock} placeholder={stock} name='_stock' onChange={e => this.changeHandler(e)} />
                    </td>
                    <td>
                      {/* <Button variant="outline-danger" onClick={e => this.deleteHandler(_id)}>xóa</Button> */}
                      <Button style={{ marginRight: '1rem', width: '5rem' }} variant="outline-danger" onClick={e => this.stopEdit()}>hủy</Button>
                      <Button style={{ width: '5rem' }} variant="success" onClick={e => this.saveChange(product)}>lưu</Button>
                    </td>
                  </tr>
                )
            })}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  productList: state.productReducer.productList
})

const mapDispatchToProps = {
  getAllProduct,
  deleteAProductForever,
  editProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable)