import Header from '../Header';
import Bottom from '../Bottom';
import BGImage from './bg.png';

const Layout = props => (
  <div className="layout">
    <Header />
    {props.children}
    <Bottom />
    <img src={BGImage} alt=""/>

    <style jsx>{`
        .layout {
          background: linear-gradient(0.4turn, #a81e23, #781214 30%, #781214);
          width: 100vw;
          max-width: 500px;
          height: 100vh;
          margin: 0 auto;
        }
        
        img {
            width: 500px;
            bottom: 0;
            position: absolute;
            opacity: 0.07;
        }
    `}
    </style>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        background-color: #781214;
      }
    `}
    </style>

  </div>
);

export default Layout;
