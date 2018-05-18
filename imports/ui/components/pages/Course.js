import React from 'react';
import {withHistory, Link} from 'react-router-dom';
import {Comment} from '../Comment';

export const Course = () => 
    <div>
        <Link to="/"><h1>Back</h1></Link>
        <Comment />
    </div>