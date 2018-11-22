import React, { Component } from "react";
import {
  StyleSheet,
  Text,
} from 'react-native'
import Video from 'react-native-video'
import Layout from "../components/layout";
import Loader from '../../loader/loader'
import PlayPause from "../components/play-pause";
import ControlLayout from "../components/control-layout";
import ProgressBar from "../components/progress-bar";
import Time from "../components/time";
import Fullscreen from "../components/fullscreen";
import { timeFormatter } from "../../utils/time-formatter"



class Player extends Component {
  state = {
    loading: true,
    paused: false,
    onScreen: true,
    timerActive: false,
    duration: 1,
    time: 0,
    timeLeft: 0,
  }

  onScreenTimeoutHandler = (isPresented) => {
    let onScreenTimeout = setTimeout(() => {
      this.setState({
        onScreen: false
      })
    }, 2000)
    if (isPresented) {

      clearTimeout(onScreenTimeout)
      this.setState({
        onScreen: true
      })
      onScreenTimeout = setTimeout(() => {
        this.setState({
          onScreen: false
        })
      }, 5000)
    } else {
      clearTimeout(onScreenTimeout)
      this.setState({
        onScreen: false
      })
    }
  }
  videoContainerOnPress = () =>{
    this.state.onScreen ?
    this.onScreenTimeoutHandler(false)
    :
    this.onScreenTimeoutHandler(true)
  }


  onBuffer = ({isBuffering}) =>{
    this.setState({
      loading: isBuffering
    })
  }
  onLoad = (data) => {
    this.setState({
      duration: data.duration
    })
    console.log(this.state.duration)
  }

  onProgress = (data) => {
    this.setState({
      time: data.currentTime
    })
    this.setTimeLeft()

  }
  playPause= () => {
    this.setState({
      paused: !this.state.paused,
    })
  }
  

  // onSlidingComplete = value => {
  //   this.setState({
  //     time: value
  //   })
  // }

  onValueChange = value => {
    this.video.seek(value)
    this.onScreenTimeoutHandler(true)
  }

  setTimeLeft = () => {
    this.setState({
      timeLeft: this.state.duration - this.state.time
    })
  }

  fullscreenButtonHandler = () => {
    console.log('hi')
    if (!this.state.isFullscreen) {
      this.video.presentFullscreenPlayer()
    } else {
      this.video.dismissFullscreenPlayer()
    }
  }
  handleFullscreenPresented = () => {
    this.setState({
      isFullscreen: true
    })
  }
  handleFullscreenDismissed = () => {
    console.log('');
    this.setState({
      isFullscreen: false
    })
  }

  setRef = element => {
    this.video = element
  }


  render() {
    return (
      <Layout
        onPress={this.videoContainerOnPress}
        loading={this.state.loading}
        onScreen={this.state.onScreen}
        fullscreen={this.state.isFullscreen}
        video={
          <Video
            ref={this.setRef}
            paused={this.state.paused}
            source={{uri:"https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"}}
            style={styles.video}
            resizeMode={this.state.isFullscreen ? 'cover' : 'contain'}
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onFullscreenPlayerDidPresent={this.handleFullscreenPresented}
            onFullscreenPlayerDidDismiss={this.handleFullscreenDismissed}
            />
        }
        loader={
          <Loader color="red" size="large"/>
        }
        playPause={
          <PlayPause
            onPress={this.playPause}
            paused={this.state.paused}
          />
        }
        controls={
          <ControlLayout>
            <Time time={timeFormatter(this.state.time)}/>
            <ProgressBar
            maximumValue={this.state.duration}
            time={this.state.time}
            onSlidingComplete={this.onSlidingComplete}
            onValueChange={this.onValueChange}
            />
            <Time time={timeFormatter(this.state.timeLeft)}/>
            <Fullscreen
              onPress={this.fullscreenButtonHandler}
              />
          </ControlLayout>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
})

export default Player
