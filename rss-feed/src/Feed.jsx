import React from "react";
function Feed(props){
    console.log(props);
    return (
        <>
        <h2>{props.title}</h2>
        <p><a href={props.link} target="_blank" rel="noopener noreferrer">{props.link}</a></p>
        <h3>{props.pubDate}</h3>
    </>
    )
}
export default Feed;