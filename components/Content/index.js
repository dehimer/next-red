const Content = (props) => (
  <div className="content">
    <div className="title">
      {props.title}
    </div>
    <div className="image">
      <img src={props.image} alt=""/>
    </div>
    <div className="text">
      {props.text}
    </div>

    { /*language=CSS*/ }
    <style jsx>{`
      .title {
        color: white;
        font-size: 60px;
        font-weight: bold;
        text-align: center;
        padding: 10px;
      }
      .image {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .image img {
        max-width: 400px;
        border: 4px solid white;
      }
      
      .text {
        padding: 20px;
        color: white;
        font-size: 16px;
        text-align: center;
        font-family: sans-serif;
      }
    `}</style>
  </div>
);

export default Content;
