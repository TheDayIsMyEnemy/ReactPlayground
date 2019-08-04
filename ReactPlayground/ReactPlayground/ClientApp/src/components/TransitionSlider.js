import React from 'react';
import Slide from '..//components/Slide';
import { CSSTransition, TransitionGroup } from "react-transition-group";

export class TransitionSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            slide: "counter"
        }
    }

    render() {
        return (
            <TransitionGroup>
                <CSSTransition
                    key={this.state.index}
                    timeout={5000}
                    classNames="slide"
                >
                    <Slide slideType={this.state.slide} />
                </CSSTransition>
            </TransitionGroup>
        );
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.changeSlide(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
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

