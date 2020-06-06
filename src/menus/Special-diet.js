import React from 'react';
import './style.css';

export default () => (
    <div className="columns">
        <div className="column"></div>
        <div className="column is-two-thirds menu">
            <h2 className='is-size-2'>SPECIAL DIET MENU</h2><br />
            <p>All dishes are free from salt, sugar, and corn starch. No M.S.G.</p><br />
            <ul>
                <li>	<div className="menu-body">	<p className="dish">					<span>	CHICKEN AND SNOW PEAS AND WATER CHESTNUTS	</span>	</p>	<p className="has-text-right price">	9.95	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">					<span>	CHICKEN AND SNOW PEAS AND WATER CHESTNUTS	</span>	</p>	<p className="has-text-right price">	10.75	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">					<span>	CHICKEN AND SNOW PEAS AND BROCCOLI	</span>	</p>	<p className="has-text-right price">	9.95	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">					<span>	SHRIMP AND SNOW PEAS AND BROCCOLI	</span>	</p>	<p className="has-text-right price">	10.75	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">					<span>	CHICKEN AND MIXED VEGETABLES	</span>	</p>	<p className="has-text-right price">	9.95	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">					<span>	SHRIMP AND MIXED VEGETABLES	</span>	</p>	<p className="has-text-right price">	10.75	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">					<span>	BEAN CURD AND MIXED VEGETABLES	</span>	</p>	<p className="has-text-right price">	9.25	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">					<span>	CHICKEN AND SHRIMP AND VEGETABLES	</span>	</p>	<p className="has-text-right price">	10.75	</p>	</div>	</li>


            </ul>
        </div>
        <div className="column"></div>
    </div>
)