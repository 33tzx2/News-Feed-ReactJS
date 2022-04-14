import React from 'react'

const NewsCard = ({posts}) => {
  console.log('ASDSDA', posts)
  return (
    <div class="card" style={{width: '18rem', width: '100%'}}>
         <img class="card-img-top" src={posts.fields.thumbnail} alt="Card image cap"/>
         <div class="card-body">
           <h5 class="card-title" style={{fontSize: '17px'}}>zagolovok</h5>
           <p class="card-text">sss</p>
           <span style={{display:'flex', justifyContent: 'space-between'}}>
           <p>sdsd</p>
           <a href="#" class="btn btn-dark">Read more</a>
           </span>
         </div>
       </div>
  )
}

export default NewsCard