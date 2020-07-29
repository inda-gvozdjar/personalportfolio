import React from "react";
import "./music.styles.css"



const goeasy = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const dreams = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3";

const chillout =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3";

const twistter =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3";

const freebird =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3";

class Music extends React.Component {
    state = {
        currentSong: null,
        music: "stopped"
    };

    render() {
        const playlist = [
            {
                id: 1,
                title: "Go Easy",
                url:
                    "https://thumbs-prod.si-cdn.com/Vj7Cmc62xkQLwQZLiX1SbOV89ik=/420x240/https://public-media.si-cdn.com/filer/cd/0e/cd0efbec-bc15-4f38-894a-7e0e6f5968b8/campfire_edit.jpg"
            },
            {
                title: "Chill Out",
                id: 2,
                title: "Dreams",
                url:
                    "https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },

            {
                id: 4,
                title: "Twistter",
                url: "https://i.ytimg.com/vi/VJ52yJwN_K0/maxresdefault.jpg"
            },
            {
                id: 5,
                title: "Free Bird",
                url:
                    "https://www.laurenswilliam.nl/wp-content/uploads/2016/09/Chill-music-update-1.jpeg"
            }
        ].map(item => {
            return (
                <div className="ui list">
                    <div className="item">
                        <img className="ui avatar image" src={item.url} alt="music images" />
                        <div className="content">
                            <li

                                key={item.id}
                                onClick={() => this.setState({ currentSong: item.title })}
                            >
                                {item.title}
                            </li>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <h1 className="header">Music Player</h1>
                <div className="App">
                    <div className="ui card main-container">
                        <div className="info-container">
                            {this.state.music === "playing" ? (
                                <div className="current-song">
                                    Now Playing {this.state.currentSong}
                                </div>
                            ) : null}
                            {this.state.music === "paused" ? (
                                <div className="current-song">
                                    {this.state.currentSong} is paused{" "}
                                </div>
                            ) : null}

                        </div>
                        <div className="button-container">
                            {this.state.music === "paused" && (
                                <button className="music-btn"
                                    onClick={() => this.setState({ music: "playing" })}
                                >
                                    <i className=" large play circle outline icon" />
                  Play
                                </button>
                            )}
                            {this.state.music === "playing" && (
                                <button className="music-btn"
                                    onClick={() => this.setState({ music: "paused" })}
                                >
                                    <i />
                  Pause
                                </button>
                            )}
                            {this.state.music === "playing" ||
                                this.state.music === "paused" ? (
                                    <button className="music-btn"
                                        onClick={() => this.setState({ music: "stop" })}
                                    >
                                        <i />
                  Stop
                                    </button>
                                ) : null}
                        </div>

                        <div className="playlist">{playlist}</div>

                        <audio ref={ref => (this.music = ref)} />
                    </div>
                </div>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentSong !== prevState.currentSong) {
            let track;
            switch (this.state.currentSong) {
                case "Go Easy":
                    track = goeasy;
                    break;
                case "Dreams":
                    track = dreams;
                    break;
                case "Chill Out":
                    track = chillout;
                    break;
                case "Twistter":
                    track = twistter;
                    break;
                case "Free Bird":
                    track = freebird;
                    break;
                default:
                    break;
            }

            if (track) {
                this.music.src = track;
                this.music.play();
                this.setState({
                    music: "playing"
                });
            }
        }

        if (this.state.music !== prevState.music) {
            if (this.state.music === "paused") {
                this.music.pause();
            }
            if (this.state.music === "playing" && prevState.music === "paused") {
                this.music.play();
            }
            if (this.state.music === "stop") {
                this.music.pause();
                this.currentTime = 0;
                this.setState({
                    currentSong: null
                });
            }
        }
    }



}

export default Music