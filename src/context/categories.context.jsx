import { createContext, useState, useEffect} from "react";
import { getCategoriesAndDocuments } from "../firebase/firebase.utils";

//import SHOP_DATA from '../pages/shop/shop.data'

export const CategoriesContext = createContext({
    categoryMap: {},
});

export const CategoriesProvider = ({children})=> {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = {categoriesMap};

    useEffect(()=>{
        const getCategoriesMap = async ()=>{
            const categoryMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    },[]);

    return(
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}