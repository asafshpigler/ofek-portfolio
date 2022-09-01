import css3 from './images/icons/css3.svg'
import html5 from './images/icons/html5.svg'
import js from './images/icons/js.svg'
import nodeJs from './images/icons/nodeJs.svg'
import react from './images/icons/react.svg'
import ruby from './images/icons/ruby.svg'
import sql from './images/icons/sql.svg'


export function Icons() {
  return (
    <div className="icons">
      <img src={css3} alt="React Logo" />
      <img src={html5} alt="html5 Logo" />
      <img src={js} alt="js Logo" />
      <img src={nodeJs} alt="nodeJs Logo" />
      <img src={react} alt="React Logo" />
      <img src={ruby} alt="ruby Logo" />
      <img src={sql} alt="sql Logo" />

    </div>
  )
}


export function Skills() {
  return (
    <ul className="skills">
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Ruby</li>
      <li>Ruby On Rails</li>
      <li>Css/Scss</li>
      <li>Html</li>
      <li>SQL</li>
      <li>MongoDB</li>
      <li>liostgreSQL</li>
      <li>Git</li>
      <li>GitHub</li>
    </ul>

  )
}
