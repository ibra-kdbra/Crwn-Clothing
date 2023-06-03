export const USER_ACTIONS_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
};
const INTIAL_STATE ={
    currentUser: null
};

export const userReducer = (state= INTIAL_STATE,action)=>{
    const {type,payload}= action;

    switch (type) {
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser:payload
            }

    
        default:
            return state;
    };
};