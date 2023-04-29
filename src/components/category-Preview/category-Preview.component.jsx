import { Link } from "react-router-dom"
import ProductsCard from "../product-card/product-card.component"
import './category-preview.styles.scss'

const CategoryPreview = ({title,products}) => {

    return(
        <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {products.map((product, index) => index < 4 ? <ProductsCard product={product} key={product.id} /> : "")}
      </div>
    
        </div>
    )
}

export default CategoryPreview