import { withRouter } from 'next/router';

import {
  FacebookShareButton,
  VKShareButton,
  OKShareButton,
} from 'react-share';

import vk from './vk.svg';
import fb from './fb.svg';
import ok from './ok.svg';


const Bottom = ({ router }) => {
  const url = `http://музейподоткрытымнебом.рф/${router.pathname}`;

  return (
    <div className="bottom">
      <div className="header">
        ПОДЕЛИТЬСЯ:
      </div>
      <div className="buttons">
        <VKShareButton url={url}>
          <img src={vk} alt="VK Share"/>
        </VKShareButton>
        <FacebookShareButton url={url}>
          <img src={fb} alt="FB Share"/>
        </FacebookShareButton>
        <OKShareButton url={url}>
          <img src={ok} alt="OK Share"/>
        </OKShareButton>
      </div>

      { /*language=CSS*/ }
      <style jsx>{`
    .bottom {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .header {
      font-size: 20px;
      color: #e6cdad;
    }
    .buttons {
      display: flex;
    }
    .buttons img {
      max-height: 50px;
      margin: 7px;
      cursor: pointer;
    }
  `}</style>
    </div>
  )
};

export default withRouter(Bottom);
