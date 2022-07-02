import "./Card.css";

const Card = (props) => {
  // Using this code to attach any css class with the css class
  const classes = "card " + props.className;
  //   Props.children used to show any content that will be used between card component
  return <div className={classes}>{props.children}</div>;
};

export default Card;
