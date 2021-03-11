import { FETCH_ALL} from '../constants/actionTypes';


// eslint-disable-next-line import/no-anonymous-default-export
export default (projects = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;   
      default:
        return projects;
    }  
  };