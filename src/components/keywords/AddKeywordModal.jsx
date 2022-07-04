import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Stack, Col, Row, FormControl } from 'react-bootstrap'
import { getKeywordsOfProduct, addNewSecondKey, deleteSecondKey } from '../../actions/keyword-action'
import Badge from 'react-bootstrap/Badge'

export class AddKeyWordModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _show: false,
            _product: {},

            _keywords: [],
            _selectedKeywordIndex: -1,
            _secondKeyValue: '',
            _deleteStatus: false
        }
    }

    componentDidUpdate = (prevProps) => {
        const { keywords } = this.props
        if (prevProps.keywords !== keywords && keywords !== null) {
            this.setState({ _keywords: keywords })
        }
    }

    handleShow = async (index) => {
        const product = this.props.productList[index]
        this.props.getKeywordsOfProduct(product._id).then(keywords => {
            this.setState({
                _show: true,
                _product: product,
                _keywords: keywords
            })
        })
    }

    handleClose = () => {
        this.setState({
            _show: false,
            _deleteStatus: false,
            _selectedKeywordIndex: -1,
        })
    }

    cancelAddKeyword = () => {
        this.setState({
            _selectedKeywordIndex: -1,
            _deleteStatus: false
        })
    }

    changeSelectedKeywordIndex = (index) => {
        this.setState({
            _selectedKeywordIndex: index
        })
    }

    changeSecondKeyValue = (e) => {
        this.setState({
            _secondKeyValue: e.target.value
        })
        console.log(this.state.secondKeyValue)
    }

    addSecondKey = async (primaryKey, secondKey) => {
        await this.props.addNewSecondKey(primaryKey, secondKey)
        this.cancelAddKeyword()
        this.props.getKeywordsOfProduct(this.state._product._id)
    }

    changeDeleteStatus = (bool) => {
        this.setState({
            _deleteStatus: bool
        })
    }

    deleteSecondKeyHandle = async (primaryKey, secondKey) => {
        const { deleteSecondKey } = this.props
        await deleteSecondKey(primaryKey, secondKey)
        this.changeDeleteStatus(false)
        this.props.getKeywordsOfProduct(this.state._product._id)
    }

    render() {
        const { indexOfProduct } = this.props
        const { _show, _product, _keywords, _selectedKeywordIndex, _secondKeyValue, _deleteStatus } = this.state
        const { changeSelectedKeywordIndex, cancelAddKeyword, changeSecondKeyValue, addSecondKey, changeDeleteStatus, deleteSecondKeyHandle } = this

        const AddSecondKeyBtn = (index) => {
            const { primaryKey } = _keywords[index]
            return (
                <div>
                    {index === _selectedKeywordIndex ?
                        <Stack direction="horizontal" gap={1}>
                            <FormControl style={{ width: '6rem' }} onChange={e => changeSecondKeyValue(e)} />
                            <Button size='sm' variant='success' onClick={e => addSecondKey(primaryKey, _secondKeyValue)}>Add</Button>
                        </Stack>
                        :
                        <div>
                            {_deleteStatus ?
                                null
                                : <Button size='sm' variant='secondary' onClick={e => changeSelectedKeywordIndex(index)}>+</Button>
                            }
                        </div>
                    }
                </div>
            )
        }

        const BadgeDeletePill = (keyword_id, secondKey) => {
            return (
                <div>
                    <Button variant='danger' size='sm' onClick={e => deleteSecondKeyHandle(keyword_id, secondKey)}>
                        <Stack direction='horizontal'>
                            x {' '}
                            <Badge pill bg="secondary">{secondKey}</Badge>
                        </Stack>
                    </Button>
                </div>
            )
        }

        const keywordList =
            <div>
                {_keywords.map((keyword, index) => {
                    return (
                        <div>
                            <Row xs="auto">
                                <Col item sm={1}>
                                    <h5>
                                        <Badge bg="primary">{keyword.primaryKey}</Badge>
                                    </h5>
                                </Col>
                                <Col>/</Col>
                                <Col style={{ minWidth: "10rem" }}>
                                    <Stack direction="horizontal" gap={1}>
                                        {
                                            keyword.secondKeys.map(secondKey => {
                                                return (
                                                    <h6>
                                                        {_deleteStatus ?
                                                            <div>
                                                                {BadgeDeletePill(keyword.primaryKey, secondKey)}
                                                            </div>
                                                            : <Badge pill bg="secondary">{secondKey}</Badge>
                                                        }
                                                    </h6>)
                                            })
                                        }
                                        {AddSecondKeyBtn(index)}
                                    </Stack>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </div>
                    )
                })
                }
            </div>


        const DeleteBtn =
            <div>
                {
                    _deleteStatus || _selectedKeywordIndex > -1 ?
                        null
                        :
                        <Button size='sm' variant='danger' onClick={e => changeDeleteStatus(true)}>
                            xóa
                        </Button>
                }
            </div >

        const cancelButton =
            <div>
                {_deleteStatus || _selectedKeywordIndex > -1 ?
                    <Button size='sm' variant='danger' onClick={e => cancelAddKeyword()}>
                        hủy
                    </Button>
                    : null
                }
            </div>

        return (
            <div>
                <Button variant='outline-success' onClick={e => this.handleShow(indexOfProduct)}>khóa tìm kiếm</Button>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={_show}
                // onShow={e => this.setState({_product: this.props.product})}
                >
                    <Modal.Header>
                        <Modal.Title>
                            TỪ KHÓA TÌM KIẾM
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stack direction="horizontal" style={{ width: '100%' }}>
                            <h4>Mặt hàng: {_product.productName}</h4>
                            <div className="ms-auto">
                                {cancelButton}
                                {DeleteBtn}
                            </div>
                        </Stack>
                        {keywordList}
                        {_deleteStatus ?
                            null
                            :
                            <Button style={{ marginTop: '1rem' }} size="sm" variant='outline-primary' onClick={e => console.log('them khoa chinh')}>+</Button>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='outline-secondary' onClick={e => this.handleClose()}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    productList: state.productReducer.productList,
    keywords: state.keywordReducer.keywords
})

const mapDispatchToProps = {
    getKeywordsOfProduct,
    addNewSecondKey,
    deleteSecondKey
}

export default connect(mapStateToProps, mapDispatchToProps)(AddKeyWordModal)
