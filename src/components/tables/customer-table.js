import React, { Component } from 'react';
import { deleteACustomerForever, getAllCustomer, updateCustomer } from '../../actions/customer-action'
import { connect } from 'react-redux'
import { Table, Button, FormControl } from 'react-bootstrap';


class CustomerTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _customerList: [],
            _updateRow: -1,

            _id: '',
            _tenKhachHang: '',
            _soDienThoai: '',
            _diaChi: '',
            _level: 0
        }
    }

    async componentWillMount() {
        this.setState({
            _customerList: await this.props.getAllCustomer()
        })
    }

    componentDidUpdate = (prevProps) => {
        let { customerList } = this.props
        if (prevProps.customerList !== customerList && customerList !== null) {
            this.setState({
                _customerList: customerList
            })
        }
    }

    deleteHandler = (_id) => {
        this.props.deleteACustomerForever(_id)
            .then(result => {
                this.props.getAllCustomer()
                alert(result)
            })
    }

    setEditRow = (row, customer) => {
        const { _id, tenKhachHang, soDienThoai, diaChi, level } = customer
        this.setState({
            _updateRow: row,
            _id: _id,
            _tenKhachHang: tenKhachHang,
            _soDienThoai: soDienThoai,
            _diaChi: diaChi,
            _level: level
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveChange = async (customer) => {
        this.setState({
            _updateRow: -1
        })
        const { _id, _tenKhachHang, _soDienThoai, _diaChi, _level } = this.state
        await this.props.updateCustomer(_id, _tenKhachHang, _soDienThoai, _diaChi, _level)
        this.props.getAllCustomer()
    }

    render() {
        const { _customerList, _updateRow } = this.state

        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>_id</th>
                            <th>Full Name</th>
                            <th>soDienThoai</th>
                            <th>diaChi</th>
                            <th>Level</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {_customerList.map(customer => {
                            let row = _customerList.indexOf(customer) + 1
                            const { _id, tenKhachHang, soDienThoai, diaChi, level } = customer
                            if (_updateRow !== row) {
                                return (
                                    <tr>
                                        <td>{row}</td>
                                        <td>{_id}</td>
                                        <td>{tenKhachHang}</td>
                                        <td>{soDienThoai}</td>
                                        <td>{diaChi}</td>
                                        <td>{level}</td>
                                        <td>
                                            <Button variant='danger' onClick={e => this.deleteHandler(_id)}>xóa</Button>
                                            <Button variant='warning' onClick={e => this.setEditRow(row, customer)}>sửa</Button>
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
                                            <input defaultValue={tenKhachHang} placeholder={tenKhachHang} name='_tenKhachHang' onChange={e => this.changeHandler(e)} />
                                        </td>
                                        <td>
                                            <input defaultValue={soDienThoai} placeholder={soDienThoai} name='_soDienThoai' onChange={e => this.changeHandler(e)} />
                                        </td>
                                        <td>
                                            <input defaultValue={diaChi} placeholder={diaChi} name='_diaChi' onChange={e => this.changeHandler(e)} />
                                        </td>
                                        <td>
                                            <input defaultValue={level} placeholder={level} name='_level' onChange={e => this.changeHandler(e)} />
                                        </td>
                                        <td>
                                            <Button variant='danger' onClick={e => this.deleteHandler(_id)}>xóa</Button>
                                            <Button variant='success' onClick={e => this.saveChange(customer)}>lưu</Button>
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
    customerList: state.customerReducer.customerList
})

const mapDispatchToProps = {
    getAllCustomer,
    deleteACustomerForever,
    updateCustomer
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTable)