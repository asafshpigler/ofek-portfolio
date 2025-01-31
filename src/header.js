import { NavBar } from './navbar'
import './header.css';

export function Header() {
  return (
    <>
      <div class="header">
        <div class="inner-header flex">
          < NavBar />
          <h1>Hello! ,I'm Ofek Shitrit | A fullstack Web Developer</h1>
          <h3>Social links</h3>
          <p>I just love exploring & creating, I'm a constent learner and I just go CRAZY for the beach</p>
        </div>
        <div>
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
      <div class="content flex">
        <p>Additional text if wanted</p>
      </div>
    </>
  )

}


// Original header
{/* <header className="App-header">
      < NavBar />
      <h1>Hello! ,I'm Ofek Shitrit | A fullstack Web Developer</h1>
      <h3>Social links</h3>
      <p>I just love exploring & creating, I'm a constent learner and I just go CRAZY for the beach</p>
    </header> */}
