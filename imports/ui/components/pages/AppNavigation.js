import React from 'react';
import {withHistory, Link} from 'react-router-dom';
import '../../../api/courses.js';

export const AppNavigation = () => 
    <div>
        <Link to="/Course"> <div className="courseBlock"> </div></Link>
        <Link to="/AddCourse"> <h1> Lägg till kurs </h1></Link>
        
    </div>
