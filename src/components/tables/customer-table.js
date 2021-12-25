import React, { Component } from 'react';
import { deleteACustomerForever, getAllCustomer, editCustomer } from '../../actions/customer-action'
import { connect } from 'react-redux'
import { Table, Button, FormControl } from 'react-bootstrap';


class CustomerTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _customerList: [],
            _editRow: -1,

            _id: '',
            _fullName: '',
            _numberphone: '',
            _address: '',
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
        const { _id, fullName, numberphone, address, level } = customer
        this.setState({
            _editRow: row,
            _id: _id,
            _fullName: fullName,
            _numberphone: numberphone,
            _address: address,
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
            _editRow: -1
        })
        const { _id, _fullName, _numberphone, _address, _level } = this.state
        await this.props.editCustomer(_id, _fullName, _numberphone, _address, _level)
        this.props.getAllCustomer()
    }

    render() {
        const { _customerList, _editRow } = this.state

        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>_id</th>
                            <th>Full Name</th>
                            <th>NumberPhone</th>
                            <th>Address</th>
                            <th>Level</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {_customerList.map(customer => {
                            let row = _customerList.indexOf(customer) + 1
                            const { _id, fullName, numberphone, address, level } = customer
                            if (_editRow !== row) {
                                return (
                                    <tr>
                                        <td>{row}</td>
                                        <td>{_id}</td>
                                        <td>{fullName}</td>
                                        <td>{numberphone}</td>
                                        <td>{address}</td>
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
                                            <input defaultValue={fullName} placeholder={fullName} name='_fullName' onChange={e => this.changeHandler(e)} />
                                        </td>
                                        <td>
                                            <input defaultValue={numberphone} placeholder={numberphone} name='_numberphone' onChange={e => this.changeHandler(e)} />
                                        </td>
                                        <td>
                                            <input defaultValue={address} placeholder={address} name='_address' onChange={e => this.changeHandler(e)} />
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
    editCustomer
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTable)