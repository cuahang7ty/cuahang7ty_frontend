import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { loadTranscript } from '../actions/speech-action';
import { connect } from 'react-redux'
import * as Icon from 'react-bootstrap-icons'
import { Button, FormControl, Row, Col, Stack } from 'react-bootstrap'
import SearchProductManager from './searchProductManager';

const FindProductBar = (props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening
  } = useSpeechRecognition();

  // if (!listening && transcript.length > 0 && prevTranscript !== transcript) {
  //   prevTranscript = transcript
  //   console.log(prevTranscript)
  //   props.loadTranscript(transcript)
  // }

  const stopListeningHandle = () => {
    SpeechRecognition.abortListening()
    props.loadTranscript(transcript)
  }

  const startContinuousListening = () => {
    resetTranscript()
    if (browserSupportsContinuousListening) {
      SpeechRecognition.startListening({ continuous: true })
    } else {
      console.log('oh no')
    }
  }


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <Stack direction="horizontal" gap={3}>
        {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
        <FormControl defaultValue={transcript} placeholder='Nhập hoặc nói để tìm mặt hàng' />
        {/* <Button variant="outline-danger" onClick={resetTranscript} size="sm">reset</Button> */}
        {/* <div className="vr" /> */}
        {listening ?
          // <Button onClick={e => stopListeningHandle()} style={{ width: '5rem' }} variant="danger"><Icon.MicFill /></Button>
          <Button onClick={e => stopListeningHandle()} style={{ width: '5rem' }} variant="danger"><Icon.MicFill /></Button>
          :
          <Button onClick={e => startContinuousListening()} style={{ width: '5rem' }}><Icon.Mic /></Button>
        }
        {/* <p>{transcript}</p> */}
      </Stack>
      <SearchProductManager />
    </div>
  );
};

const mapDispatchToProps = {
  loadTranscript
}

export default connect(null, mapDispatchToProps)(FindProductBar)