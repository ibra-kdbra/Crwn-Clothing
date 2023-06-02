import { createContext, useEffect,useReducer } from "react";
import { createUserDocFromAuth, onAuthStateChangedListener} from "../firebase/firebase.utils";
import { createAction } from "../utils/reducer.utils";
/* 
This file is for accessing all the components in the react dom tree........
*/
//Actual value to access
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=> null,
});
export const USER_ACTIONS_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state,action)=>{
    const {type,payload}= action;

    switch (type) {
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser:payload
            }

    
        default:
            throw new Error
            (`Unhandeled type ${type} in userReducer`);
    };
};
const INTIAL_STATE ={
    currentUser: null
}

//The actual component itself
export const UserProvider = ({children}) =>{
    //const[currentUser,setCurrentUser] = useState(null);
    const[{currentUser}, dispatch]= useReducer(userReducer, INTIAL_STATE); 
    console.log(currentUser);
    const setCurrentUser = (user)=>{
        dispatch(createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER,user));
    };

    const value = {currentUser, setCurrentUser};

    useEffect(()=>{
        const unsubscribe =  onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    },[]);

    return <UserContext.Provider value={value}>
                {children}
            </UserContext.Provider>
};
/* const userReducer= ()=>{
    return{ 
        currentUser: 
    }
} */