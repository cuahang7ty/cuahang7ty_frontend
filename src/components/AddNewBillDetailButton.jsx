import React, { Component } from 'react'
import { connect } from 'react-redux'

export class AddNewBillDetailButton extends Component {
    // constructor(props){
    //     super(props)

    // }

    AddNewBillDetail = () => {
        
    }

    render() {
        return (
            <div>
                <Button variant='outline-success' onClick={e => this.handleConfirm()}>xác nhận</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewBillDetailButton)x