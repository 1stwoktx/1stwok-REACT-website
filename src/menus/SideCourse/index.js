import React from 'react';
import Appetizers from './Appetizers';
import Soups from './Soups';
import Desserts from './Desserts';


export default () => (
    <div className="columns">
        <div className="column"></div>
        <div className="column is-two-thirds">
        <Appetizers />
        <Soups />
        <Desserts />
        </div>
        <div className="column"></div>
    </div>
    
)