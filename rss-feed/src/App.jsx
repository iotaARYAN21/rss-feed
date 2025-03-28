import axios from "axios";
import {useState , useEffect} from "react";
import Feed from "./Feed.jsx";
import "./App.css"
function App(){
  const [articles , setArticles] = useState([]);
  // console.log("Hello",articles);
  const getArticles = async () => {
    try{
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    }
    catch(err){
      console.log(err);
    }
  }
  console.log(articles);
  useEffect(()=>{
    getArticles();
  },[]);
  return <>
    <h1 className="glow-h1">RSS-Feed 👨🏻‍💻</h1>
    <div className="root1">
    <div className="content">
    <div className="logo"><img src="https://cdn-images-1.medium.com/max/379/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png" alt="Netflix logo" /></div>
    {articles?.netflix?.map((item,i)=>(  // ensures if articles or articles.netflix is undefined then map will not run
            <Feed 
            key = {i}
            title = {item.title}
            link = {item.link}
            pubDate = {item.pubDate}
          ></Feed>
          // console.log(item.title,item.link);
    ))}
    </div>
    <div className="content">
    <div className="logo google"><img src="https://pngimg.com/d/google_PNG19644.png" height={"115rem"} alt="Netflix logo" /></div>
    {articles?.google?.map((item,i)=>(  // ensures if articles or articles.netflix is undefined then map will not run
            <Feed 
            key = {i}
            title = {item.title}
            link = {item.link}
            pubDate = {item.pubDate}
          ></Feed>
          // console.log(item.title,item.link);
    ))}
    </div>
    
    </div>
    
    
  </>
}
export default App;