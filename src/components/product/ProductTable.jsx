import React, { Component } from 'react'
import { deleteAProductForever, getAllProduct, updateProduct } from '../../actions/product-action'
import { connect } from 'react-redux'
import { Table, Button, Stack } from 'react-bootstrap'
import AddKeywordModal from '../keywords/AddKeywordModal'
import { getKeywordsOfProduct } from '../../actions/keyword-action'


class ProductTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _productList: [],
      _updateRow: -1,
      _show: false,

      _id: '',
      _productName: '',
      _retailPrice: 0,
      _costPrice: 0,
      _stock: 0
    }

    // this.onShowModalAddKeyword = this.onShowModalAddKeyword.bind(this);
  }

  async componentWillMount() {
    this.setState({
      _productList: await this.props.getAllProduct()
    })
  }

  componentDidUpdate = (prevProps) => {
    let { productList } = this.props
    if (prevProps.productList !== productList && productList !== null) {
      console.log('productList table', productList)
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
    const { _id, productName, retailPrice, costPrice, stock } = product
    this.setState({
      _updateRow: row,
      _id: _id,
      _productName: productName,
      _retailPrice: retailPrice,
      _costPrice: costPrice,
      _stock: stock
    })
  }

  stopEdit = () => {
    this.setState({
      _updateRow: -1
    })
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  saveChange = async (product) => {
    this.setState({
      _updateRow: -1
    })
    const { _id, _productName, _retailPrice, _costPrice, _stock } = this.state
    await this.props.updateProduct(_id, _productName, _retailPrice, _costPrice, _stock)
    this.props.getAllProduct()
  }

  setShow = (status) => {
    this.setState({ _show: status })
  }

  render() {
    const { _productList, _updateRow } = this.state

    return (
      <div>
        {alert}
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>_id</th>
              <th>Tên mặt hàng</th>
              <th>Giá bán lẻ</th>
              <th>Giá nhập</th>
              <th>Số lượng tồn</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {_productList.map((product, index) => {
              let row = index + 1
              const { _id, productName, retailPrice, costPrice, stock } = product
              if (_updateRow !== row) {
                return (
                  <tr>
                    <td>{row}</td>
                    <td>{_id}</td>
                    <td>{productName}</td>
                    <td>{retailPrice}</td>
                    <td>{costPrice}</td>
                    <td>{stock}</td>
                    <td>
                      <Stack direction="horizontal" gap={1}>
                        <Button style={{ marginRight: '1rem', width: '5rem' }} variant="outline-danger" onClick={e => this.deleteHandler(_id)}>xóa</Button>
                        <Button style={{ marginRight: '1rem', width: '5rem' }} variant="outline-warning" onClick={e => this.setEditRow(row, product)}>sửa</Button>
                        <AddKeywordModal indexOfProduct={index} />
                      </Stack>
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
                      <input defaultValue={productName} placeholder={productName} name='_productName' onChange={e => this.changeHandler(e)} />
                    </td>
                    <td>
                      <input defaultValue={retailPrice} placeholder={retailPrice} name='_retailPrice' onChange={e => this.changeHandler(e)} />
                    </td>
                    <td>
                      <input defaultValue={costPrice} placeholder={costPrice} name='_costPrice' onChange={e => this.changeHandler(e)} />
                    </td>
                    <td>
                      <input defaultValue={stock} placeholder={stock} name='_stock' onChange={e => this.changeHandler(e)} />
                    </td>
                    <td>
                      <Stack direction="horizontal" gap={1}>
                        <Button style={{ marginRight: '1rem', width: '5rem' }} variant="outline-danger" onClick={e => this.stopEdit()}>hủy</Button>
                        <Button style={{ width: '5rem' }} variant="success" onClick={e => this.saveChange(product)}>lưu</Button>
                      </Stack>
                    </td>
                  </tr>
                )
            })}
          </tbody>
        </Table>

      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  productList: state.productReducer.productList,
})

const mapDispatchToProps = {
  getAllProduct,
  deleteAProductForever,
  updateProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable)