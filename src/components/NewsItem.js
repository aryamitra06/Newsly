import React from 'react'

const NewsItem = (props) => {

        let {title, description, imageUrl, author, url} = props; //array destructuring which is used to make props in class based react component

        return (
            <>
<div className="card my-3 mx-2">
  <img src= {imageUrl} className="card-img-top" alt="news heading pic"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small class="text-muted">{author}</small></p>
    <a href={url} target= "_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
  </div>
</div>
            </>
        )
}

export default NewsItem