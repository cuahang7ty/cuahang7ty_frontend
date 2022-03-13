import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { clearResults } from '../actions/searcher-action'

export class ResultsSearchingModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _show: false
        }
    }

    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    handleShow = () => {
        this.setState({
            _show: true,
        })
        console.log('top', this.props.topResults)
    }

    handleClose = () => {
        // this.props.clearResults()
        this.setState({ _show: false })
    }

    render() {
        const { topResults } = this.props

        return (
            <div>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state._show}
                >
                    <Modal.Header>
                        <Modal.Title>
                            KẾT QUẢ TÌM KIẾM
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {topResults.length > 0 ?
                            topResults.map(product => {
                                return (
                                    <div>
                                        <h4>Mặt hàng: {product.productName}</h4>
                                        <p>giá bán: {product.retailPrice}</p>
                                        <p>giá nhập: {product.costPrice}</p>
                                        <p>số lượng tồn: {product.stock}</p>
                                    </div>
                                )
                            }) : <p>không tìm thấy bất kỳ mặt hàng nào</p>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='outline-danger' onClick={e => this.handleClose(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    topResults: state.searcherReducer.topResults
})

const mapDispatchToProps = {
    clearResults
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsSearchingModal)
