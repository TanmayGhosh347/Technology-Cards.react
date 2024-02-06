import './index.css'

// Write your code here.
const CardItem = props => {
  const {cardDetails} = props
  const {imgUrl, title, description, className} = cardDetails

  return (
    <li className={`${className}  card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt={title} className="card-img" />
      </div>
    </li>
  )
}

export default CardItem
