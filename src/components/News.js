import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps={
    country: 'us',
    pageSize: 9,
    category: 'general'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    console.log("This is getting rendered")
    this.state = {
      articles : [],
      loading: false,
      page:1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - DailyDigest`;
  }

  async updadeNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
    this.props.setProgress(100);
  }

  async componentDidMount(){
    this.updadeNews();
  }

  handleNextClick = async()=>{
    this.setState({page: this.state.page +1})
    this.updadeNews()
  }

  handlePreviousClick = async ()=>{
    this.setState({page: this.state.page -1})
    this.updadeNews()
  }

  fetchMoreData = async ()=>{
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults})
  };

  render() {
    return (
      <>
        <h2 className="text-white text-center">DailyDigest - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !== this.state.totalResults}
        loader={<Spinner/>}>

        <div className="container">
        <div className="row" >
        {this.state.articles.map((element)=>{
          return (
          <div className="col-md-4" key={element.publishedAt}>
            <NewsItem  title={element.title?element.title.slice(0, 40): ""}  description={element.description?element.description.slice(0,80): ""}imageUrl= {element.urlToImage } newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
          )
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
