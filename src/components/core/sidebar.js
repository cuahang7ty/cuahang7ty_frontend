import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class Sidebar extends Component {
    constructor(props){
        super(props)

        this.state = {
            isHover: false
        }
    }

    

    render() {
        return (
            <div>
                <ListGroup >
                    <Link to='/make-bill-page' style={{ textDecoration: 'none' }}>
                        <ListGroup.Item>
                            Viết hóa đơn
                        </ListGroup.Item>
                    </Link>
                    <Link to='/product-manage-page' style={{ textDecoration: 'none'}} name="product">
                        <ListGroup.Item>
                            Quản lý hàng hóa
                        </ListGroup.Item>
                    </Link>
                    <Link to='/customer-manage-page' style={{ textDecoration: 'none'}} name="customer">
                        <ListGroup.Item>
                            Quản lý tt khách hàng
                        </ListGroup.Item>
                    </Link>
                    <Link to='/receive-bill' style={{ textDecoration: 'none' }}>
                        <ListGroup.Item>
                            Hóa đơn nhập hàng
                        </ListGroup.Item>
                    </Link>
                    <Link to='/delivery-bill' style={{ textDecoration: 'none' }}>
                        <ListGroup.Item>
                            Hóa đơn xuất hàng
                        </ListGroup.Item>
                    </Link>
                </ListGroup>
            </div>
        )
    }
}

export default Sidebar
