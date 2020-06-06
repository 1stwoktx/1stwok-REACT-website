import React from 'react';

export default () => {
    const placeholder = <span> &nbsp;&nbsp; </span>;
    const star = '*';
    return (
    <div className="column">
        <h2 className='is-size-2'>SOUPS</h2><br />
        <ul>
            <li>	<div className="menu-body">	<p className="dish"> {placeholder}				20	<span>	云吞汤	</span>	<span>	WONTON SOUP	</span>	</p>	<p className="has-text-right price">	2.0	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			21	<span>	蛋花汤	</span>	<span>	EGG DROP SOUP	</span>	</p>	<p className="has-text-right price">	2.0	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	22	<span>	酸辣汤	</span>	<span>	HOT AND SOUR SOUP	</span>	</p>	<p className="has-text-right price">	2.0	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			23	<span>	豆腐汤	</span>	<span>	BEAN CURD AND VEGETABLE SOUP (For 2)	</span>	</p>	<p className="has-text-right price">	5.50	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			24	<span>	海鲜汤	</span>	<span>	SEA TREASURE SOUP (For 2)	</span>	</p>	<p className="has-text-right price">	7.50	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			26	<span>	玉米汤	</span>	<span>	VELVET CORN WITH CHICKEN SOUP (For 2)	</span>	</p>	<p className="has-text-right price">	5.75	</p>	</div>	</li>

        </ul>
    </div>
)}