import React from 'react';
import Beef from './Beef';
import Chicken from './Chicken';
import Pork from './Pork';
import Seafood from './Seafood';
import Vegetables from './Vegetables';


export default () => (
    <div className="columns">
        <div className="column">
            <Beef />
            <Seafood />
        </div>
        <div className="column">
            <Chicken />
            <Pork />
            <Vegetables />
        </div>

    </div>
)