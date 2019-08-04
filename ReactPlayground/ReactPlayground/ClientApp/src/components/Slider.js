import React from 'react';
import Slide from '..//components/Slide';

export class Slider extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             index: 0,
             slide: "counter"
         }
    }

    render() {
        return (
            <Slide slideType={this.state.slide} />
        );
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.changeSlide(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    changeSlide() {
        const slides = ["counter", "fetchData", "home"];

        this.setState(function (state, props) {
            let currentIndex = state.index + 1;
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            return {
                index: currentIndex,
                slide: slides[currentIndex]
            }
        });
    }
}

