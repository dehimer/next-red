import vk from './vk.svg';
import fb from './fb.svg';
import ok from './ok.svg';

const Bottom = () => (
  <div className="bottom">
    <div className="header">
      ПОДЕЛИТЬСЯ:
    </div>
    <div className="buttons">
      <img src={vk} alt="VK Share"/>
      <img src={fb} alt="FB Share"/>
      <img src={ok} alt="OK Share"/>
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
      .buttons img {
        max-height: 50px;
        margin: 7px;
      }
    `}</style>
  </div>
);

export default Bottom;
