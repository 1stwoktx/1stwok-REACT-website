import React from 'react';
import { Route, Link } from 'react-router-dom';
import Luncheon from './Luncheon';
import SpecialDiet from './Special-diet';
import SideCourse from './SideCourse';
import MainCourse from './MainCourse';
import CompleteDinner from './Complete-dinner';
import HouseSpecial from './House-specialties';
import RiceNoodle from './Fried-rice';

import './style.css';
import { createBrowserHistory } from "history";




const history = createBrowserHistory();

export default () => (
    <div className="menu">
        <nav className="breadcrumb is-centered">
            <ul>
                <li className=" "><Link to="/luncheon">Luncheon</Link></li>
                <li><Link to="/specialDiet">Special Diet</Link></li>
                <li><Link to="/houseSpecial">House Specialities</Link></li>
            </ul>
            <ul>
                <li><Link to="/sideCourse">Appetizer/Soup/Dessert </Link></li>
                <li><Link to="/mainCourse">Main Course</Link></li>
                <li><Link to="/friedRiceLoMein">Fried Rice And Lo Mein</Link></li>
                <li><Link to="/completeDinner">Complete Dinner</Link></li>

            </ul>
        </nav>
      
            <Route exact path="/" component={Luncheon} />
            <Route path="/luncheon" component={Luncheon} />
            <Route path="/specialDiet" component={SpecialDiet} />
            <Route path="/houseSpecial" component={HouseSpecial} />
            <Route path="/sideCourse" component={SideCourse} />
            <Route path="/mainCourse" component={MainCourse} />
            <Route path="/friedRiceLoMein" component={RiceNoodle} />
            <Route path="/completeDinner" component={CompleteDinner} />

    </div>
)
