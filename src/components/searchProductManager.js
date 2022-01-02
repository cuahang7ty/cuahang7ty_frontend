import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchByKeywords } from '../actions/product-action'
import ResultSearchingByKeywordModal from '../modals/resultSearchingByKeyword-modal';

export class SearchProductManager extends Component {
    constructor(props) {
        super(props)
    }

    async componentDidUpdate(prevProps) {
        const { transcript, searchByKeywords } = this.props
        if (prevProps.transcript !== transcript && transcript !== []) {
            await searchByKeywords(transcript)
            this.child.handleShow()
        }
    }

    render() {
        return (
            <div>
                <ResultSearchingByKeywordModal onRef={ref => (this.child = ref)}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    transcript: state.keywordReducer.transcript,
    topResults: state.keywordReducer.topResults
})

const mapDispatchToProps = {
    searchByKeywords,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProductManager)
