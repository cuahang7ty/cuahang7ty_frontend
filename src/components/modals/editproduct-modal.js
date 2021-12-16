import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'

export class EditProductModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _show: false
        }
    }

    handleShow = () => {
        this.setState({
            _show: true
        })
    }

    handleClose = () => {
        this.setState({
            _show: false
        })
    }

    render() {
        let { _show } = this.state
        const { handleClose, handleShow } = this
        return (
            <div>
                <Button variant='warning' onClick={e => handleShow()}>sửa</Button>
                <Modal.Dialog show={_show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductModal
)
