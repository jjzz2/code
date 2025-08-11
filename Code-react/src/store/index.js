
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    count: 0,
    user: null,
};
//定义一个简单的reducer函数，改变状态
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + (action.payload || 1) };
        case 'SET_USER':
            return { ...state, user: action.payload };
        default:
            return state;
    }
}
//创建action
export const increment = (payload) => ({
    type: 'INCREMENT',
    payload,
});
export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});
//创建异步action
export const fetchUser = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await response.json();
            dispatch(setUser(data));
        } catch (error) {
            console.error('Failed to fetch user:', error);
        }
    };
};