import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'

export class MyAlert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            alertList: []
            
        }
    }

    render() {
        const alert =
            <Alert variant='success' style={{ position: 'fixed', bot: '2rem', left: '2rem', width: '10%' }}>
                {this.state.message}
            </Alert>
        return (
            <div>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MyAlert)
