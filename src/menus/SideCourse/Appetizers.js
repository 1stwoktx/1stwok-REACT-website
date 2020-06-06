import React from 'react';


export default () => {
    const placeholder = <span> &nbsp;&nbsp; </span>;
    const star = '*';
    
    return (
    <div className="column">
        <h2 className='is-size-2'>APPETIZERS</h2><br />
        <ul>

            <li>	<div className="menu-body">	<p className="dish"> {placeholder}				01	<span>	广东春捲	</span>	<span>	EGG ROLL (1)	</span>	</p>	<p className="has-text-right price">	1.55	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish"> {placeholder}				02	<span>	素春捲	</span>	<span>	VEGETARIAN ROLL (1)	</span>	</p>	<p className="has-text-right price">	1.55	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish"> {placeholder}				03	<span>	凤尾虾	</span>	<span>	FANTAIL SHRIMP (8)	</span>	</p>	<p className="has-text-right price">	7.25	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">{placeholder}				04	<span>	虾吐司	</span>	<span>	SHRIMP TOAST	</span>	</p>	<p className="has-text-right price">	6.75	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish"> {placeholder}				05	<span>	蒸饺锅贴	</span>	<span>	DUMPLINGS (STEAMED OR FRIED)(8)	</span>	</p>	<p className="has-text-right price">	6.75	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish"> {placeholder}				07	<span>	蟹角	</span>	<span>	CRAB PUFFS (10)	</span>	</p>	<p className="has-text-right price">	8.25	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			08	<span>	鸡翅膀	</span>	<span>	CHICKEN WINGS (6) pieces	</span>	</p>	<p className="has-text-right price">	5.50	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			09	<span>	烤排骨	</span>	<span>	B.B.Q. RIBS (4)	</span>	</p>	<p className="has-text-right price">	6.95	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	12	<span>	椒麻虾	</span>	<span>	TANGY SPICY SHRIMP	</span>	</p>	<p className="has-text-right price">	7.75	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			13	<span>	宝宝盘	</span>	<span>	PU-PU PLATTER	</span>	</p>	<p className="has-text-right price">	11.95	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			14	<span>	牛肉串	</span>	<span>	BEEF STICKS (4)	</span>	</p>	<p className="has-text-right price">	6.75	</p>	</div>	</li>

        </ul>
    </div>
)}