import TypingEffect from './TypingEffect';

export default function HomeTitle() {
  const textToType = 'Mohammad Etemadi';
  const typingSpeed = 100;
  return (
    <div className="container">
      <p className="home__text">Hi, My Name Is</p>
      <h1 className="home__heading my-2">
        <TypingEffect text={textToType} typingSpeed={typingSpeed} />
      </h1>
      <p className="home__text">
        <span className="text__red">Front-End</span> Web Developer
      </p>
    </div>
  );
}
