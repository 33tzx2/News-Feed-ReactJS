import React from 'react'
import FullNewsPost from './FullNewsPost.jsx'
import './NewsPost.css'

const NewsPost = ({posts}) => {
console.log('props', posts)
  return (
    <span >
        <div className="card-deck"> 
      {posts.map(option => (
         <div className="card" key={option.id}>
         <img className="card-img-top" src={option.fields.thumbnail} alt="Card image cap"/>
         <div className="card-body">
           <h5 className="card-title" style={{fontSize: '17px'}}>{option.webTitle}</h5>
           <p className="card-text">{option.fields.bodyText.slice(0, 150) + '...'}</p>
           <span style={{display:'flex', justifyContent: 'space-between'}}>
           <p>{option.webPublicationDate.slice(0, 10)}</p>
           <FullNewsPost/>
           </span>
         </div>
       </div>
        ))}
        </div>
        </span>
  )
}

export default NewsPost