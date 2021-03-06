import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchRecipeSaga() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get('api/recipe', config);

        yield put({ type: 'SET_RECIPES', payload: response.data });
    } catch (error) {
        console.log('user items get recipe request failed', error);
    }
}
function* fetchProfileSaga() {
    try {
       
        const response = yield axios.get('api/recipe/profile');

        yield put({ type: 'SET_PROFILE_RECIPES', payload: response.data });
    } catch (error) {
        console.log('user items get  profile recipe request failed', error);
    }
}


function* postRecipeSaga(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        yield axios.post('/api/recipe', action.payload, config)
        yield put({ type: 'FETCH_RECIPES' })
        yield put({ type: "CONFIRM_POST", payload: true });
    } catch (err) {
        yield put({ type: "CONFIRM_POST", payload: false });
        console.log('error in post recipe',err);
    }
}
//to post the fav recipe 
function* postfavrecipeSaga(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        yield axios.post('/api/favourite', action.payload, config)
        yield put({ type: 'GET_FAV_RECIPES'})
    } catch (err) {
        console.log('error in post fav recipe',err);
    }
}

function* fetchFavRecipesaga() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get('api/favourite', config);

        yield put({ type: 'SET_FAV_RECIPES', payload: response.data });
    } catch (error) {
        console.log('user items get recipe request failed', error);
    }
}

function* removeFavRecipeSaga(action) {
    try { 
        console.log('delete from sagas',action.payload)
        yield axios.delete(`/api/favourite/${action.payload.recipe_id}`)
        yield put({type: 'GET_FAV_RECIPES'})
    }
    catch(error) {
    console.log(error)
  }
}

function* updateFavRecipeSaga(action) {
    try {
        console.log('update from sagas',action.payload.id, action.payload)
        yield axios.put(`/api/favourite/${action.payload.id}`, action.payload);
        yield put({ type: 'GET_FAV_RECIPES' });
    } catch (err) {
        console.log('update saga error:', err);
    }
} 

function* fetchViewRecipeSaga(action) {
    try {
        
        const response = yield axios.get(`api/recipe/viewpage/${action.payload}`);
        console.log('fetch view recipe saga', response.data);
        yield put({ type: 'SET_VIEW_RECIPES', payload: response.data });
    } catch (error) {
        console.log('user items get recipe request failed', error);
    }
}

function* sortViewRecipeSaga(action) {
    
    try {
        console.log('in sortViewRecipeSaga', action.payload)
        const response = yield axios.get(`/api/recipe/sort?search=${action.payload}`);
        console.log('get sort view recipe saga', response.data);
        yield put({ type: 'SET_RECIPES', payload: response.data });
    } catch (error) {
        console.log('user items get Sort recipe request failed', error);
    }
}

// send axios DELETE request to server and re-fetch all items from 'projects' table on database
function* deleteRecipeSaga(action) {
    try { 
        console.log('delete profile page from sagas',action.payload)
        yield axios.delete(`/api/recipe/${action.payload}`)
        yield put({type: 'FETCH_RECIPES'})
        yield put({type: 'FETCH_PROFILE_RECIPES'})
    }
    catch(error) {
    console.log(error)
  }
  }

function* recipeSaga() {
    yield takeLatest('FETCH_RECIPES', fetchRecipeSaga);
    yield takeLatest('ADD_RECIPES', postRecipeSaga);
    yield takeLatest('POST_FAV_RECIPE', postfavrecipeSaga);
    yield takeLatest('GET_FAV_RECIPES', fetchFavRecipesaga);
    yield takeLatest('REMOVE_FAV_RECIPE', removeFavRecipeSaga);
    yield takeLatest('UPDATE_RECIPES', updateFavRecipeSaga);
    yield takeLatest('FETCH_VIEW_RECIPE', fetchViewRecipeSaga);
    yield takeLatest('SORT_VIEW_RECIPE', sortViewRecipeSaga);
    yield takeLatest('DELETE_RECIPE', deleteRecipeSaga);
    yield takeLatest('FETCH_PROFILE_RECIPES', fetchProfileSaga);
}


export default recipeSaga;