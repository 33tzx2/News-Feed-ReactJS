import React, { useEffect, useState } from "react";
import "./App.css"
import Menu from './components/Menu/Menu';
import NewsPost from "./components/NewsPosts/NewsPost.jsx";



function App() {
  const [menuActive, setMenuActive] = useState(false)
  const [posts, setPosts] = useState([])

useEffect(() => {
  fetch('https://content.guardianapis.com/search?q=trending&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c')
  .then(response =>{return response.json()})
  .then(post => setPosts(post.response.results));
}, [])
console.log('aaaa',posts);

  return (
    <div className="App">
      <nav>
        <div className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
          <span/>
        </div> 
      </nav>
      <main>
        <NewsPost posts={posts}/>
      </main>
      <Menu active={menuActive} setActive={setMenuActive} header={"News App"}/>
    </div>
  );
}

export default App;
