import { combineReducers } from 'redux';

import posts from './posts';
import projects from './projects';

export const reducers = combineReducers({ posts, projects });