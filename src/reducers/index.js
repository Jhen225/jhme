import { TOGGLE_OPEN_CONTACT, TOGGLE_OPEN_ABOUT, SET_PAGE_LOADED } from '../actions/types';

export const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_OPEN_CONTACT:
            return {
                ...state,
                openContact: !state.openContact
            }
        case TOGGLE_OPEN_ABOUT:
            return {
                ...state,
                openAbout: !state.openAbout
            }
        case SET_PAGE_LOADED:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}