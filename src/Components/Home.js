import React from 'react';
import SubHeading from './SubHeading';
import CountContainer from '../Containers/CountContainer'

const Home = ({greeting}) => {

    return (
        <div>
            <h1>{greeting}</h1>
            <SubHeading />
            <CountContainer min='0' max='10'/>
        </div>
    );
}

export default Home;