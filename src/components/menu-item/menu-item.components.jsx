import {useNavigate} from 'react-router-dom';
import {MenuItemContainer,Body,BackgroundImage} from './menu-item.styles';


function MenuItem ({title ,imageUrl,size, linkUrl}){
    let  navigate = useNavigate();

    return(
    <MenuItemContainer
    onClick ={()=> navigate(`/${linkUrl}`)}
    >
        <BackgroundImage 
        imageUrl = {imageUrl}
        />
                <Body>
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <p className="subtitle">Shop Now</p>
                </Body>
            </MenuItemContainer>)
}
export default MenuItem;