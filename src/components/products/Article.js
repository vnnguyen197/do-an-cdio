import React, { Component } from "react";
import Footer from "../layouts/footer";
import './article.css';

class Article extends Component {
  render() {
    return (
      <div>
       <div className="videoYt">
       <iframe
          width="1500"
          height="800"
          src="https://www.youtube.com/embed/TCmqazTXMIA?autoplay=1&mute=1"
          title="myFrame"
        ></iframe>
       </div>
        <Footer />
      </div>
    );
  }
}

export default Article;
