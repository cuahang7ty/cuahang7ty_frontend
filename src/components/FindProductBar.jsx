import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { loadTranscript } from '../actions/searcher-action';
import { connect } from 'react-redux'
import * as Icon from 'react-bootstrap-icons'
// import { Button, FormControl, Row, Col, Stack } from 'react-bootstrap'
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

  const stopListeningHandle = () => {
    SpeechRecognition.abortListening()
    props.loadTranscript(transcript)
  }

  const startContinuousListening = () => {
    resetTranscript()
    if (browserSupportsContinuousListening)
      SpeechRecognition.startListening({ continuous: true })
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <Stack direction="horizontal" gap={3}>
        <FormControl defaultValue={transcript} placeholder='Nhập hoặc nói để tìm mặt hàng' />
        {listening ?
          <Button onClick={e => stopListeningHandle()} style={{ width: '5rem' }} variant="danger"><Icon.MicFill /></Button>
          :
          <Button onClick={e => startContinuousListening()} style={{ width: '5rem' }}><Icon.Mic /></Button>
        }

      </Stack>
      <SearchProductManager />
    </div>
  );
};

const mapDispatchToProps = {
  loadTranscript
}

export default connect(null, mapDispatchToProps)(FindProductBar)