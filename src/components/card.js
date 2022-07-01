import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    const title = this.props.card.priceCurency + this.props.card.price + " " + this.props.card.name;

    const style = {
      backgorundImage: `url('${this.props.card.imageUrl}')`
    };

    return (
      <div className="card">
        <div className="picture"></div>
        <div  className="title">
          {title}
        </div>
      </div>
    );
  }
}

export default Card;
