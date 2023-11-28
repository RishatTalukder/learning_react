// book component
const Book = (props) => {
    const authorSTyllings = {
        color: "#617d98",
        fontSize: "0.75rem",
        marginTop: "0.5rem",
      };

  const { img, title, author } = props;
  console.log(props);
  // added props parameter and gets the values from the props object
  return (
    <div className="book">
      <img src={ img } alt="" />
      <h2>{title}</h2>
      <h4 style={authorSTyllings}>{author}</h4>
      <span className='number'>{`# ${props.number + 1}`}</span>
    </div>
  );
};

export default Book;
