import React, { Component } from "react";
import Pages from "./components/Pages";
import axios from "axios";
import "./App.css";
import Pagination from "./components/Pagination";

class App extends Component {
  state = {
    posts: [],
    loading: false,
    currentPage: 1,
    postPerPage: 9,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("http://api.enye.tech/v1/challenge/records");
    this.setState({ posts: res.data.records.profiles });
    this.setState({ loading: false });
    console.log(res.data.records.profiles);
  }

  paginate = (number) => {
    this.setState({ currentPage: number });
  };

  render() {
    // Pagination logic
    const lastPost = this.state.currentPage * this.state.postPerPage;
    const firstPost = lastPost - this.state.postPerPage;
    const currentPost = this.state.posts.slice(firstPost, lastPost);
    return (
      <div className="container">
        <h1 className="h1 text-center my-3">My Profiles</h1>
        <Pages posts={currentPost} loading={this.state.loading} />
        <Pagination
          totalPost={this.state.posts.length}
          postPerPage={this.state.postPerPage}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

export default App;
