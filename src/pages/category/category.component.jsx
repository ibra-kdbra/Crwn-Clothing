import { useParams } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/prodcut-card.component';
import {CategoryContainer, CategoryTitle} from './category.styles';

const Category = ()=>{
const {category} = useParams()
const {categoriesMap} = useContext(CategoriesContext);  
//const products = categoriesMap[category]; // not very efficient too much rendering time'
const [products, setProducts] = useState(categoriesMap[category]); // made a safe guard because when we fetch the products for the first time it's empty so I put it in encapsulated state

useEffect(()=>{
    setProducts(categoriesMap[category]);
},[category,categoriesMap]);

return(
    <Fragment>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <CategoryContainer>
            { products && products.map((product)=><ProductCard  key={product.id} product={product}/>)}
        </CategoryContainer>
    </Fragment>
);
};
export default Category;

//This component is to list every possible cateogry into their page then render them