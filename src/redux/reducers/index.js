import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import recipeReducer from './recipeReducer';
import addRecipeReducer from './addRecipeReducer';
import favRecipeReducer from './favRecipeReducer';
import editFavReducer from './EditFavReducer';
import conformPostReducer from './conformPostReducer';
import recipeViewReducer from './recipeViewreducer';
 import userinfoReducer from './userinfoReducer';
 import profileRecipeReducer from './profileRecipeReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  recipeReducer, //will have an array of the recipe with all items
  addRecipeReducer,
  favRecipeReducer,
  editFavReducer,
  conformPostReducer,
  recipeViewReducer,
  userinfoReducer,
  profileRecipeReducer,
});

export default rootReducer;
