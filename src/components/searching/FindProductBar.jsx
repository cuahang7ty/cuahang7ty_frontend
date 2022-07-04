import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { loadTranscript } from '../../actions/searcher-action';
import { connect } from 'react-redux'
import * as Icon from 'react-bootstrap-icons'
import SearchProductManager from './SearchProductManager';
import { Button, FormControl, Stack } from 'react-bootstrap';


const FindProductBar = (props) => {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening
  } = useSpeechRecognition();

  let input = transcript;

  const stopListeningHandle = () => {
    SpeechRecognition.abortListening()
    input = transcript
    console.log(input)
    props.loadTranscript(transcript)
  }

  const startContinuousListening = () => {
    resetTranscript()
    if (browserSupportsContinuousListening)
      SpeechRecognition.startListening({ continuous: true })
  }

  const changeHandler = (e) => {
    input = e.target.value
  }

  const searchingByKeyboard = () => {
    console.log(input)
    props.loadTranscript(input)
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  const SearchBox = () => <FormControl defaultValue={transcript} onChange={e => changeHandler(e)} placeholder='Nhập hoặc nói để tìm mặt hàng' />

  return (
    <div style={{ marginBottom: '1rem' }}>

      {listening ?
        <Stack direction="horizontal" gap={3}>
          <SearchBox />
          <Button onClick={e => stopListeningHandle()} style={{ width: '5rem' }} variant="danger"><Icon.MicFill /></Button>
        </Stack>
        :
        <div>
          <Stack direction="horizontal" gap={3}>
            <SearchBox/>
            <Button onClick={e => searchingByKeyboard()}>tìm</Button>
            <Button onClick={e => startContinuousListening()} style={{ width: '5rem' }}><Icon.Mic /></Button>
          </Stack>

        </div>
      }
      <SearchProductManager />
    </div >
  )
}

const mapDispatchToProps = {
  loadTranscript
}

export default connect(null, mapDispatchToProps)(FindProductBar)