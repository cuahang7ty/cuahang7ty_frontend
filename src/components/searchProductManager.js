import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchByKeywords } from '../actions/product-action'
import { resetTranscript } from '../actions/keyword-action'
import ResultsSearchingModal from '../modals/resultsSearching-modal'

export class SearchProductManager extends Component {
    constructor(props) {
        super(props)
    }

    async componentDidUpdate(prevProps) {
        const { transcript, searchByKeywords, resetTranscript } = this.props
        this.child.handleShow()
        if (prevProps.transcript !== transcript && transcript !== []) {
            await searchByKeywords(transcript)
            resetTranscript()
        }
    }

    render() {
        return (
            <div>
                <ResultsSearchingModal onRef={ref => (this.child = ref)}/>
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
    resetTranscript
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProductManager)
