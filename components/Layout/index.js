import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Content from '../Content';
import Bottom from '../Bottom';
import BGImage from './bg.png';

const Layout = (props) => {
  const [show, setShow] = useState(false);
  let timer = setTimeout(() => setShow(true), 1000);

  useEffect(
    () => {
      return () => {
        clearTimeout(timer)
      }
    },
    [show]
  );

  return (
    <div className="layout" style={{
      visibility: show ? 'visible': 'hidden',
      backgroundColor: '##781214',
    }}>
      <div className="header" >
        <Header />
      </div>
      <div className="content">
        <Content
          title={props.title}
          image={props.image}
          text={props.children}
        />
      </div>
      <div className="bottom">
        <Bottom
          image={props.image}
          title={props.title}
          text={props.children}
        />
      </div>
      <img src={BGImage} alt="" />

      { /*language=CSS*/ }
      <style jsx>{`
            .layout {
              background: linear-gradient(0.4turn, #a81e23, #781214 30%, #781214);
              width: 500px;
              max-width: 100vw;
              height: 100vh;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
            }
            
            img {
                width: 500px;
                max-width: 100vw;
                position: fixed;
                bottom: 0;
                opacity: 0.07;
                pointer-events: none;
            }
            
            .header {
                height: 15%;
            }
            
            .content {

            }
            
            .bottom {
                height: 13%;
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
  )
};

export default Layout;
