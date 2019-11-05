import Link from 'next/link';

import vk from './vk.svg';
import fb from './fb.svg';
import ok from './ok.svg';

const Bottom = () => (
  <div className="bottom">
    <div className="header">
      ПОДЕЛИТЬСЯ:
    </div>
    <div className="buttons">
      <Link href="/">
        <a><img src={vk} alt="VK Share"/></a>
      </Link>
      <Link href="/">
        <a><img src={fb} alt="FB Share"/></a>
      </Link>
      <Link href="/">
        <a><img src={ok} alt="OK Share"/></a>
      </Link>
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
      .buttons a {
        cursor: pointer;
      }
      .buttons img {
        max-height: 50px;
        margin: 7px;
      }
    `}</style>
  </div>
);

export default Bottom;
