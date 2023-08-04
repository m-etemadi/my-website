import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialLink({ link }) {
  return (
    <a
      className="btn__secondary"
      href={link.address}
      title={`Mohammad Etemadi | ${link.title}`}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={link.icon} size="lg" />
    </a>
  );
}
