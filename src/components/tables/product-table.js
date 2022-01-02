import React, { Component } from 'react';
import { deleteAProductForever, getAllProduct, updateProduct } from '../../actions/product-action'
import { connect } from 'react-redux'
import { Table, Button, Stack } from 'react-bootstrap';
import AddKeywordModal from '../../modals/addKeyword-modal';


class ProductTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _productList: [],
      _updateRow: -1,
      _show: false,

      _id: '',
      _tenMatHang: '',
      _giaBanLe: 0,
      _giaNhap: 0,
      _soLuongTon: 0
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
    const { _id, tenMatHang, giaBanLe, giaNhap, soLuongTon } = product
    this.setState({
      _updateRow: row,
      _id: _id,
      _tenMatHang: tenMatHang,
      _giaBanLe: giaBanLe,
      _giaNhap: giaNhap,
      _soLuongTon: soLuongTon
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
    const { _id, _tenMatHang, _giaBanLe, _giaNhap, _soLuongTon } = this.state
    await this.props.updateProduct(_id, _tenMatHang, _giaBanLe, _giaNhap, _soLuongTon)
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
              const { _id, tenMatHang, giaBanLe, giaNhap, soLuongTon } = product
              if (_updateRow !== row) {
                return (
                  <tr>
                    <td>{row}</td>
                    <td>{_id}</td>
                    <td>{tenMatHang}</td>
                    <td>{giaBanLe}</td>
                    <td>{giaNhap}</td>
                    <td>{soLuongTon}</td>
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
                      <input defaultValue={tenMatHang} placeholder={tenMatHang} name='_tenMatHang' onChange={e => this.changeHandler(e)} />
                    </td>
                    <td>
                      <input defaultValue={giaBanLe} placeholder={giaBanLe} name='_giaBanLe' onChange={e => this.changeHandler(e)} />
                    </td>
                    <td>
                      <input defaultValue={giaNhap} placeholder={giaNhap} name='_giaNhap' onChange={e => this.changeHandler(e)} />
                    </td>
                    <td>
                      <input defaultValue={soLuongTon} placeholder={soLuongTon} name='_soLuongTon' onChange={e => this.changeHandler(e)} />
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
  productList: state.productReducer.productList
})

const mapDispatchToProps = {
  getAllProduct,
  deleteAProductForever,
  updateProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable)