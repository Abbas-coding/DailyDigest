// API KEY == 5c2231495e2e436f9ec88a5974757163
// For Search Functionality https://www.freecodecamp.org/news/how-to-add-search-to-frontend-app/
import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress =(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
        <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
        <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="business" pageSize={this.pageSize} country="us" category="business" />} />
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
        <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="health" pageSize={this.pageSize} country="us" category="health" />} />
        <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="science" pageSize={this.pageSize} country="us" category="science" />} />
        <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
        <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
      </Routes>
        </Router>
      </div>
    )
  }
}


