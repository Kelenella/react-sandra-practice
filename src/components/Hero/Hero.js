import img1 from '../../images/img1.jpeg';
import img2 from '../../images/img2.jpeg';
import img3 from '../../images/img3.jpeg';
import img4 from '../../images/img4.jpeg';
import img5 from '../../images/img5.jpeg';
import img6 from '../../images/img6.jpeg';
import s from './Hero.module.css';

import { Icons } from '../Icons';

export function Hero() {
  return (
    <>
      <div className={s.styledImg}>
        <a href="/">
          {/* <Icons
            width="32"
            name="spotify-icon"
            className="meSvg"
            color="orange"
          />
          <Icons width="32" name="mail-icon" className="meSvg" color="orange" /> */}
          <Icons
            width="32"
            name="youtube-icon"
            className="meSvg"
            color="orange"
          />
        </a>
      </div>
      <div className={s.styledImg}>
        <img src={img1} alt={'some images'} width={150} />
        <img src={img2} alt={'some images'} width={150} />
        <img src={img3} alt={'some images'} width={150} />
        <img src={img4} alt={'some images'} width={150} />
        <img src={img5} alt={'some images'} width={150} />
        <img src={img6} alt={'some images'} width={150} />
      </div>
    </>
  );
}
