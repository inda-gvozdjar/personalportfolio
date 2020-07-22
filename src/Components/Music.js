import React from 'react'
class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
            url: "http://streaming.tdiradio.com:8000/house.mp3"
        }
        this.audio = new Audio(this.state.url);
    }

    play = () => {
        this.setState({ play: true, pause: false })
        this.audio.play();
    }

    pause = () => {
        this.setState({ play: false, pause: true })
        this.audio.pause();
    }


    render() {

        return (
            <div>
                <h1> List of my fav songs</h1>
                <ul>
                    <button onClick={console.log("inda")}><li>one</li></button>
                    <li onClick={this.change}>two</li>
                    <li onClick={this.change}>three</li>
                </ul>
                <button onClick={this.play}>Play</button>
                <button onClick={this.pause}>Pause</button>
            </div>
        );
    }
}
export default Music