import React, {Component} from 'react'
import Videos from '../dummy/dummyVideo'
import Button from './Button'
class VideoViewer extends Component{

    state = {
        videos : Videos,
        index: 0
    }

    decrease = () => {
        let prev = this.state.index -1
        this.setState({index : prev < 0 ? Videos.length-1 : prev })
    }
    
    increase = () => {
        let next = this.state.index +1
        this.setState({index : next > Videos.length-1 ? 0 : next })
    }

    boxStyle = {
        width: '600px',
        height: '400px'
    }

    render(){

        const {videos, index} = this.state
        const selectedVideo = videos[index]
        const {decrease, increase} = this

        return(
            <>
                <div style={this.boxStyle}>
                    <iframe style={this.boxStyle} src={selectedVideo.src} ></iframe>
                    <Button f={decrease}>prev</Button>
                    <Button f={increase}>next</Button>
                </div>
            </>
        )
    }
}

export default VideoViewer

