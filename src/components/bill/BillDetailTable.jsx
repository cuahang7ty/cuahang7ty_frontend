import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Button, Stack } from 'react-bootstrap';

class BillDetailTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      billDetails: []
    }

    this.setState({
      billDetails: props.billDetails
    })
  }

  render() {
    const { billDetails } = this.state

    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên mặt hàng</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {billDetails.map((billDetail, index) => {
            let row = index + 1
            const { productName, retailPrice, quantity } = billDetail
            return (
              <tr>
                <td>{row}</td>
                <td>{productName}</td>
                <td>{retailPrice}</td>
                <td>{quantity}</td>
                <td>
                  <Stack direction="horizontal" gap={1}>
                    <Button style={{ marginRight: '1rem', width: '5rem' }} variant="outline-danger">xóa</Button>
                  </Stack>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

const mapStateToProps = (state) => ({
  cartList: state.cartReducer.cartList
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(BillDetailTable)