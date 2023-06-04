import ProductCard from '../product-card/prodcut-card.component';
//import { Link } from 'react-router-dom';
import {CateogryPreviewContainer, Title, Preview} from './category-preview.syles';

const CategoryPreview = ({title, products})=>{
    return(
        <CateogryPreviewContainer>
            <h2>
                <Title to={title} >{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {
                    products.filter((_,idx)=> idx < 4 )
                    .map((product)=>
                    <ProductCard key={product.id} product = {product}/>
                    )
                }
            </Preview>
        </CateogryPreviewContainer>
    );
};

export default CategoryPreview;