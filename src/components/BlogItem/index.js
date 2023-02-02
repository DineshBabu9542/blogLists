// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props

  const {title, description, publishedDate} = blogDetails

  return (
    <li className="list-items">
      <div className="title-date-container">
        <h1 className="title-heading">{title}</h1>
        <p className="date-para">{publishedDate}</p>
      </div>
      <p className="item-description">{description}</p>
      <hr className="hr-line" />
    </li>
  )
}

export default BlogItem
