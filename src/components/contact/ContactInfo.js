import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileAlt,
  faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';

export default function COntactInfo() {
  return (
    <div className="contact__info">
      <div className="contact__info-details">
        <div className="icon">
          <FontAwesomeIcon icon={faMobileAlt} size="1x" />
        </div>
        <div className="text">
          <span>Phone</span>
          <span>+61 49 316 11 78</span>
        </div>
      </div>
      <div className="contact__info-details">
        <div className="icon">
          <FontAwesomeIcon icon={faEnvelopeOpenText} size="1x" />
        </div>
        <div className="text">
          <span>Email</span>
          <span>m.etemadi92@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
