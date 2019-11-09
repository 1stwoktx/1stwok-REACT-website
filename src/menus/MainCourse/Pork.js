import React from 'react';

export default () => {
    const placeholder = <span> &nbsp;&nbsp; </span>;
    const star = '*';
    return (
    <div className="column">
        <h2 className='is-size-2'>PORK</h2><br />
        <ul>
            <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	70	<span>	鱼香肉	</span>	<span>	 PORK WITH GARLIC SAUCE	</span>	</p>	<p className="has-text-right price">	9.45	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}	71	<span>	芥兰肉	</span>	<span>	PORK WITH BROCCOLI	</span>	</p>	<p className="has-text-right price">	9.45	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">  {placeholder}	72	<span>	甜酸肉	</span>	<span>	SWEET AND SOUR PORK	</span>	</p>	<p className="has-text-right price">	9.45	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}	73	<span>	木须肉	</span>	<span>	MOO SHU PORK	</span>	</p>	<p className="has-text-right price">	9.45	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	74	<span>	回锅肉	</span>	<span>	 DOUBLE SAUTÉED PORK	</span>	</p>	<p className="has-text-right price">	9.45	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	75	<span>	辣椒肉	</span>	<span>	 JALAPENO PORK	</span>	</p>	<p className="has-text-right price">	9.45	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	76	<span>	麻婆豆腐	</span>	<span>	 TANGY SPICY TOFU	</span>	</p>	<p className="has-text-right price">	9.45	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">    {placeholder}	77	<span>	蔬菜肉	</span>	<span>	PORK WITH VEGETABLES	</span>	</p>	<p className="has-text-right price">	9.45	</p>	</div>	</li>

        </ul>
    </div>
)}