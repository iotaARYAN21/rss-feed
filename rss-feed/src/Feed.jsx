import React from "react";
function Feed(props){
    console.log(props);
    return (
        <div>
        <h2>{props.title}</h2>
        <p style={{overflowWrap:"break-word"}}><a href={props.link} target="_blank" rel="noopener noreferrer">{props.link}</a></p>
        <h3>{props.pubDate}</h3>
    </div>
    )
}
export default Feed;