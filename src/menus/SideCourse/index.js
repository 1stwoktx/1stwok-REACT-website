import React from 'react';
import Appetizers from './Appetizers';
import Soups from './Soups';
import Desserts from './Desserts';


export default () => (
    <div className="columns">
        <Appetizers />
        <Soups />
        <Desserts />
    </div>
)