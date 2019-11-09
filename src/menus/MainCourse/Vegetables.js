import React from 'react';

export default () => {
    const placeholder = <span> &nbsp;&nbsp; </span>;
    const star = '*';
    return (
    <div className="column">
        <h2 className='is-size-2'>VEGETABLE</h2><br />
        <ul>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			140	<span>	雪豆马蹄	</span>	<span>	SNOW PEAS AND WATER CHESTNUTS	</span>	</p>	<p className="has-text-right price">	8.75	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			141	<span>	清炒芽菜	</span>	<span>	SAUTÉED BEAN SPROUTS	</span>	</p>	<p className="has-text-right price">	8.75	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			142	<span>	青菜豆腐	</span>	<span>	VEGETABLE AND TOFU	</span>	</p>	<p className="has-text-right price">	8.75	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	143	<span>	鱼香芥兰	</span>	<span>	 BROCCOLI IN GARLIC SAUCE	</span>	</p>	<p className="has-text-right price">	8.75	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	144	<span>	四季豆	</span>	<span>	 TANGY SPICY STRING BEANS	</span>	</p>	<p className="has-text-right price">	8.75	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			145	<span>	兰花豆腐	</span>	<span>	BROCCOLI WITH TOFU	</span>	</p>	<p className="has-text-right price">	8.75	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			146	<span>	青菜炒面	</span>	<span>	VEGETABLE CHOW MEIN	</span>	</p>	<p className="has-text-right price">	8.75	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			147	<span>	罗汉斋	</span>	<span>	BUDDHA’S DELIGHT	</span>	</p>	<p className="has-text-right price">	8.75	</p>	</div>	</li>


        </ul>
    </div>
)}