import RSSParser from "rss-parser";
import cors from "cors";
import express from "express";
const feedURL  ={
    netflix :  "https://netflixtechblog.com/feed",
    google : "https://developers.googleblog.com/atom.xml"
};
const parser = new RSSParser();
const port = 4000;
const articles = {
    netflix:[],
    google : []
};
const parse = async (url,key) =>{
    const feed  = await parser.parseURL(url);
    // console.log(feed.title);
    feed.items.forEach(item => {
        // console.log(`${item.title}\n${item.link}\n\n`)
        articles[key].push(item)
    })
}
const app = express();  // to create the server

app.use(cors()); // enables CORS so that frontend applications can make API requests to this server
// parse(feedURL).then(()=>{
//     app.get("/",(req,res)=>{
//         res.send(articles);
//     });
    
//     // REACT RUNS ON PORT 3000  
//     const server = app.listen(port,()=>{
//         console.log(`Server is running on port ${port}`);
//     });
// });

Promise.all([
    parse(feedURL.netflix,"netflix"),
    parse(feedURL.google,"google")
]).then(()=>{
    app.get("/",(req,res)=>{
        res.json(articles);
    });
    const server = app.listen(port,()=>{
        console.log(`Server running on port ${port}`);
    });
})

// export default server;