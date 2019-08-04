import React from 'react';
import { Counter } from './Counter';
import { FetchData } from './FetchData';
import { Home } from './Home';

const components = {
    counter: Counter,
    fetchData: FetchData,
    home: Home
}

export default function Slide(props) {
    const CurrentSlide = components[props.slideType];
    return <CurrentSlide />;
}