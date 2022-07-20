import { AUTH, UNAUTH } from '../action'

const initialState = {
    auth: false,
    data: {},
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return { ...state, ...action.payload }
        case UNAUTH:
            return { ...state, ...initialState }
        default:
            return state
    }
}