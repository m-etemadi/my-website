import { Element } from 'react-scroll';
import Items from './Items';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Redux',
  'SASS',
  'Tailwind CSS',
  'Bootstrap',
  'jQuery',
  'Git',
  'npm',
  'WebPack',
  'WordPress',
  'Responsive Web Design',
  'SEO',
];

export default function Skills() {
  return (
    <Element className="skills text__center py-10" name="section-3">
      <div className="container">
        <h2 className="heading__secondary line-center myb-5">My Skills</h2>
        <div className="skills__container">
          <ul className="skills__list">
            {skills.map((skill, i) => (
              <Items skill={skill} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </Element>
  );
}
