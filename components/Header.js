const Header = () => (
  <div className="header">
    <div className="left">
      78-я ГОДОВЩИНА<br/>ВОЕННОГО ПАРАДА<br/>НА КРАСНОЙ ПЛОЩАДИ
    </div>
    <div className="right">
      <span className="seven">7</span>
      <span className="november">ноября</span>
      <div className="years">1941 - 2019</div>
    </div>

    { /*language=CSS*/ }
    <style jsx>{`
      .header {
        display: flex;
        padding: 20px 10px;
      }
      .left {
        width: 60%;
        color: #e6cdad;
        font-size: 16px;
        font-weight: 500;
      }
      .right {
        width: 40%;
        color: white;
        position: relative;
      }
      .seven {
        font-size: 50px;
        font-weight: 600;
      }
      .november {
        font-size: 30px;
      }
      .years {
        color: #e6cdad;
        font-size: 10px;
        position: absolute;
        top: 9px;
        left: 30px;
      }
    `}</style>
  </div>
);

export default Header;
