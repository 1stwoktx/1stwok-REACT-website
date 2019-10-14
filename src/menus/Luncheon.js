import React from 'react';
import './style.css'

export default () => {
    const placeholder = <span> &nbsp;&nbsp; </span>;
    const star = '*';
    return (
    <div className="column menu">
        <h2 className='is-size-2'>LUNCHEON SPECIALTIES</h2><br />
        <h3 className='is-size-4'>MONDAY - SATURDAY	11:00 - 3:00</h3>
        <p>Choice of soup:	wonton soup, egg drop soup or hot and sour soup and egg roll, served with fried rice.</p><br />
        <ul className='columns'>
            <div className="column"></div>
            <div className='column is-two-thirds'>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	1	<span>	SWEET AND SOUR PORK	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	2	<span>	SWEET AND SOUR CHICKEN	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	3	<span>	DOUBLE SAUTEED PORK	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	4	<span>	CHICKEN WITH GARLIC SAUCE	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	5	<span>	CHICKEN WITH BROCCOLI	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	6	<span>	CHICKEN WITH CASHEW NUTS	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	7	<span>	CHICKEN WITH MUSHROOM	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	8	<span>	KUAN PAO CHICKEN	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	9	<span>	PORK WITH GARLIC SAUCE	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	10	<span>	 BEEF WITH BROCCOLI	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	11	<span>	PEPPER STEAK	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	12	<span>	BEEF SZECHUAN	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">				13	<span>	CHICKEN AND SHRIMP COMBO	</span>	</p>	<p className="has-text-right price">	7.95	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	14	<span>	SHRIMP WITH GARLIC SAUCE	</span>	</p>	<p className="has-text-right price">	7.95	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	15	<span>	SHRIMP WITH LOBSTER SAUCE	</span>	</p>	<p className="has-text-right price">	7.95	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	16	<span>	SHRIMP SZECHUAN	</span>	</p>	<p className="has-text-right price">	7.95	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	17	<span>	BUDDHA’S DELIGHT	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	18	<span>	BROCCOLI WITH GARLIC SAUCE	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	19	<span>	TUNG TING SHRIMP	</span>	</p>	<p className="has-text-right price">	7.95	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	20	<span>	BEEF WITH OYSTER SAUCE	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	21	<span>	BEEF WITH HOISON SAUCE	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	22	<span>	CHOW MEIN (SHRIMP, BEEF, PORK OR CHICKEN)	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	23	<span>	LO MEIN (SHRIMP, BEEF, PORK OR CHICKEN)	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	24	<span>	KUAN PAO BEEF	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	25	<span>	SWEET AND SOUR SHRIMP	</span>	</p>	<p className="has-text-right price">	7.95	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	26	<span>	GENERAL TSO’S CHICKEN	</span>	</p>	<p className="has-text-right price">	7.95	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	27	<span>	SESAME CHICKEN	</span>	</p>	<p className="has-text-right price">	7.95	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	28	<span>	FRIED RICE (BEEF, CHICKEN, SHRIMP, OR PORK)	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	29	<span>	SWEET AND SOUR COMBINATION (CHICKEN, SHRIMP, PORK)	</span>	</p>	<p className="has-text-right price">	7.95	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	30	<span>	LEMON CHICKEN	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	31	<span>	CHICKEN WITH VEGETABLES	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	32	<span>	BEEF WITH VEGETABLES	</span>	</p>	<p className="has-text-right price">	7.5	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">			{placeholder}	33	<span>	SHRIMP WITH VEGETABLES	</span>	</p>	<p className="has-text-right price">	7.95	</p>	</div>	</li>
                <li>	<div className="menu-body">	<p className="dish">	<span style={{ color: "red" }}>	*	</span>	34	<span>	TRIPLE DELIGHTS	</span>	</p>	<p className="has-text-right price">	7.95	</p>	</div>	</li>

            </div>
            <div className="column"></div>
        </ul>
    </div>

)}