import React from 'react';
import './style.css';

export default () => {
    const placeholder = <span> &nbsp;&nbsp; </span>;
    const star = '*';
    return (
    <div className="columns">
        <div className="column"></div>
        <div className="column is-two-thirds menu">
            <h2 className='is-size-2'>HOUSE SPECIALTIES</h2><br /><br />
            <ul className="columns">
                <div className="column">
                    <li>
                        
                        <div className="menu-body has-text-weight-semibold">	<p className="dish">	<span style={{color: "red"}}>	*	</span>	50	<span>	陈皮牛	</span>	<span>	 ORANGE FLAVORED BEEF	</span>	</p>	<p className="has-text-right price">	11.25	</p>	</div>


                        <br />
                        <span className="description">This is a mouth watering dish. Thick slices of prime beef seasoned and coated with lotus flour, deep fried until crispy brown while the inside is still tender, then cooked in an orange flavored sauce.	</span>
                    </li>

                    <li >

                        <div className="menu-body has-text-weight-semibold">	<p className="dish">	{placeholder}	51 <span>	脆皮核桃虾	</span>	<span>	TROPICAL SHRIMP WITH CANDY WALNUTS	</span>	</p>	<p className="has-text-right price">	11.25	</p>	</div>	

                        <br />
                        <span className="description">	Shrimps lightly battered and fried until crispy brown, then sauteed with chef’s special sauce garnished with broccoli.	</span>
                    </li>

                    <li>

                        <div className="menu-body has-text-weight-semibold">	<p className="dish">	<span style={{color: "red"}}>	*	</span>	52	<span>	牛郎织女	</span>	<span>	 LOVER’S NEST	</span>	</p>	<p className="has-text-right price">	9.95	</p>	</div>		


                        <br />
                        <span className="description">	Beef and chicken sauteed with vegetables in a special sauce.</span>
                    </li>

                    <li>

                        <div className="menu-body has-text-weight-semibold">	<p className="dish">	{placeholder}   53	<span>	七彩虾	</span>	<span>	RAINBOW SHRIMP	</span>	</p>	<p className="has-text-right price">	10.25	</p>	</div>	

                        <br />
                        <span className="description">	Shrimp sauteed with a variety of vegetables in a special sauce.</span>
                    </li>

                    <li>

                    	<div className="menu-body has-text-weight-semibold">	<p className="dish">	{placeholder}	54	<span>	海鲜煲	</span>	<span>	SEA TREASURE POT	</span>	</p>	<p className="has-text-right price">	11.25	</p>	</div>	

                        <br />
                        <span className="description">	Combination of seafood sauteed with vegetables and served in the Chinese traditional clay pot.	</span>
                    </li>

                    <li>

                    	<div className="menu-body has-text-weight-semibold">	<p className="dish">	<span style={{color: "red"}}>	*	</span>	56	<span>	大三元	</span>	<span>	 TRIPLE CROWN	</span>	</p>	<p className="has-text-right price">	11.25	</p>	</div>

                        <br />
                        <span className="description">	Combination of beef, chicken and shrimp sauteed with vegetables in a chef’s special sauce.	</span>
                    </li>

                    <li>

                    	<div className="menu-body has-text-weight-semibold">	<p className="dish">	{placeholder}	57	<span>	芝麻牛	</span>	<span>	SESAME BEEF	</span>	</p>	<p className="has-text-right price">	11.25	</p>	</div>

                        <br />
                        <span className="description">	Chunks of frank steak marinated with red wine and cooked with sesame sauce.	</span>
                    </li>

                    <li>

                    	<div className="menu-body has-text-weight-semibold">	<p className="dish">	<span style={{color: "red"}}>	*	</span>	58	<span>	湖南虾	</span>	<span>	 HUNAN SHRIMP	</span>	</p>	<p className="has-text-right price">	10.25	</p>	</div>		

                        <br />
                        <span className="description">	A delicate and remarkable Hunan dish, shrimp stir-fried and sauteed over a high flame with vegetables in a spicy Hunan sauce.	</span>
                    </li>

                    <li>

                    	<div className="menu-body has-text-weight-semibold">	<p className="dish">	{placeholder}	59	<span>	嘟嘟牛（鸡）	</span>	<span>	SIZZLING STEAK POT (CHICKEN)	</span>	</p>	<p className="has-text-right price">	9.95	</p>	</div>		

                        <br />
                        <span className="description">	Slice of tenderloin steak sauteed with vegetables served in a Chinese clay pot.	</span>
                    </li>

                    <li>

                    	<div className="menu-body has-text-weight-semibold">	<p className="dish">	{placeholder}	60	<span>	核桃鸡	</span>	<span>	CANDY WALNUT CHICKEN	</span>	</p>	<p className="has-text-right price">	10.95	</p>	</div>

                        <br />
                        <span className="description">	Chunks of chicken lightly breaded, deep fried until crispy brown, then sauteed with special sauce, topped with candy walnuts.	</span>
                    </li>

                    <li>

                    	<div className="menu-body has-text-weight-semibold">	<p className="dish">	<span style={{color: "red"}}>	*	</span>	61	<span>	陈皮鸡	</span>	<span>	ORANGE FLAVORED CHICKEN	</span>	</p>	<p className="has-text-right price">	10.95	</p>	</div>		


                        <br />
                        <span className="description">	This is a dish recommended by the chef. It is prepared exactly the same way we prepare our Orange Flavored Beef.	</span>	</li>

                    <li>

                    	<div className="menu-body has-text-weight-semibold">	<p className="dish">	<span style={{color: "red"}}>	*	</span>	64	<span>	左宗鸡	</span>	<span>	GENERAL TSO’S CHICKEN	</span>	</p>	<p className="has-text-right price">	10.95	</p>	</div>		


                        <br />
                        <span className="description">	Chunks of chicken lightly breaded, deep fried until crispy brown, then sauteed with special sauce, sauteed with special sauce.</span>
                    </li>

                    <li>

                    	<div className="menu-body has-text-weight-semibold">	<p className="dish">	{placeholder}	66	<span>	芝麻鸡	</span>	<span>	SESAME CHICKEN	</span>	</p>	<p className="has-text-right price">	10.95	</p>	</div>

                        <br />
                        <span className="description">		</span>	<span>		</span>	<span>		</span>
                    </li>

                </div>

            </ul >
        </div >
        <div className="column"></div>
    </div>
)}