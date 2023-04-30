import {BackgroundImageContainer,CategoryContainer,Body} from './category-item.styles.jsx'

const categoryItem = ({category:{title,imageUrl}}) => {

  
    return(
        <CategoryContainer>
          <BackgroundImageContainer imageUrl={imageUrl}/>
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </CategoryContainer>
    )
}

export default categoryItem