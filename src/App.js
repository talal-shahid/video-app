import React, { Component } from "react";
import "./App.css";
import VideoPlayer from "react-video-js-player";

class App extends Component {
  state = {
    baseUrl: "https://uandibucketwixvideorecorder.s3.us-west-1.amazonaws.com/",
    videoUrl: "",
  };

  componentWillMount() {
    let videoUrl = window.location.href.split("/")[4].split("=")[1];
    this.setState({ videoUrl: videoUrl });
  }

  onPlayerReady(player) {
    console.log("Player is ready: ", player);
    this.player = player;
  }

  onVideoPlay(duration) {
    console.log("Video played at: ", duration);
  }

  onVideoPause(duration) {
    console.log("Video paused at: ", duration);
  }

  onVideoTimeUpdate(duration) {
    console.log("Time updated: ", duration);
  }

  onVideoSeeking(duration) {
    console.log("Video seeking: ", duration);
  }

  onVideoSeeked(from, to) {
    console.log(`Video seeked from ${from} to ${to}`);
  }

  onVideoEnd() {
    console.log("Video ended");
  }
  render() {
    return (
      <div
        className="App"
        style={{ margin: "auto", width: "50%", marginTop: "10rem" }}
      >
        <VideoPlayer
          controls={true}
          src={this.state.baseUrl + this.state.videoUrl}
          width="720"
          height="420"
          onReady={this.onPlayerReady.bind(this)}
          onPlay={this.onVideoPlay.bind(this)}
          onPause={this.onVideoPause.bind(this)}
          onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
          onSeeking={this.onVideoSeeking.bind(this)}
          onSeeked={this.onVideoSeeked.bind(this)}
          onEnd={this.onVideoEnd.bind(this)}
        />
      </div>
    );
  }
}

export default App;
