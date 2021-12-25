import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { loadTranscript } from '../actions/speech-action';
import { connect } from 'react-redux'
import * as Icon from 'react-bootstrap-icons'
import { Button, FormControl, Row, Col, Stack } from 'react-bootstrap'

const SpeechRecognitionTool = (props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!listening && transcript.length > 0) {
    props.loadTranscript(transcript)
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const micIcon = () => {
    if (listening)
      return <Icon.Mic />
    else
      return <Icon.MicFill />
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <Stack direction="horizontal" gap={3}>
        {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
        <FormControl defaultValue={transcript} placeholder='Nhập hoặc nói để tìm mặt hàng' />
        {/* <Button variant="outline-danger" onClick={resetTranscript} size="sm">reset</Button> */}
        {/* <div className="vr" /> */}
        {listening ?
          <Button onClick={SpeechRecognition.stopListening} style={{width: '5rem'}} variant="danger"><Icon.MicFill /></Button>
          :
          <Button onClick={SpeechRecognition.startListening} style={{width: '5rem'}}><Icon.Mic /></Button>
        }
        {/* <p>{transcript}</p> */}
      </Stack>
    </div>
  );
};

const mapDispatchToProps = {
  loadTranscript
}

export default connect(null, mapDispatchToProps)(SpeechRecognitionTool)