import Header from '../Header';
import Bottom from '../Bottom';
import BGImage from './bg.png';

const Layout = props => (
    <div className="layout">
        <div className="header" >
            <Header/>
        </div>
        <div className="content">
            {props.children}
        </div>
        <div className="bottom">
            <Bottom />
        </div>
        <img src={BGImage} alt="" />

        { /*language=CSS*/ }
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
            
            .header {
                height: 15%;
            }
            
            .content {
                height: 65%;
            }
            
            .bottom {
                height: 20%;
            }
        `}
        </style>
        { /*language=CSS*/ }
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #781214;
            font-family: "Roboto Mono Medium for Powerline", sans-serif;
          }
        `}
        </style>

    </div>
);

export default Layout;
