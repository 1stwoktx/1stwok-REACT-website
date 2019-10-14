import React from 'react';

export default () => {
    const placeholder = <span> &nbsp;&nbsp; </span>;
    const star = '*';
    return (
    <div className="column">
        <h2 className='is-size-2'>DESSERTS</h2><br />
        <ul>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			150       	<span>	PINEAPPLE	</span>	</p>	<p className="has-text-right price">	1.30	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			151         	<span>	SOFT DRINK	</span>	</p>	<p className="has-text-right price">	1.45	</p>	</div>	</li>
            <li>	<div className="menu-body">	<p className="dish">	{placeholder}			152         	<span>	ICE TEA	</span>	</p>	<p className="has-text-right price">	1.45	</p>	</div>	</li>


        </ul>
    </div>
)}