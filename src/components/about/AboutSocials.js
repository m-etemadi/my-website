import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import SocialLink from './SocialLink';

const linksData = [
  {
    address: 'https://www.instagram.com/m_etemadi92/',
    title: 'Instagram',
    icon: faInstagram,
  },
  {
    address: 'https://twitter.com/m_etemadi92',
    title: 'Twitter',
    icon: faTwitter,
  },
  {
    address: 'http://linkedin.com/in/m-etemadi/',
    title: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    address: 'https://telegram.me/m_etemadi92',
    title: 'Telegram',
    icon: faTelegram,
  },
  {
    address: 'https://github.com/m-etemadi',
    title: 'Github',
    icon: faGithub,
  },
];

export default function AboutSocials() {
  return (
    <div className="about__links">
      <div className="about__links-social">
        {linksData.map(link => (
          <SocialLink link={link} key={link.title} />
        ))}
      </div>
      <a href="#" className="btn__primary" title="Download C.V">
        Download C.V
      </a>
    </div>
  );
}
