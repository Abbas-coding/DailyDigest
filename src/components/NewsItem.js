import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}
          >  
        <span className=" badge rounded-pill bg-danger">{source}
          </span>
          </div>
          <img 
         src={imageUrl}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="https://www.usatoday.com/gcdn/presto/2022/11/15/USAT/b4ee0749-1fc7-4963-8e9d-43d29fe1a0d7-AP_Trump_Immigration.JPG?crop=4201,2363,x0,y0&width=3200&height=1800&format=pjpg&auto=webp"}}
           className="card-img-top" alt="..."  />
          <div className="card-body darked">
            <h5 className="card-title text-white">{title}... </h5>
            <p className="card-text text-white">{description}...</p>
            <p  className="card-text"><small className="text-white">By {!author? "unknown": author} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
