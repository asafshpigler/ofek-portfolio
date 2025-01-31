import { Project } from './project'

export function Projects() {
  return (
    <div className='project-container'>
          <h2>Projects</h2>
          <Project name='SpaceShot' position='Co-Founder'>
            Created and Co-lead a team of up to 6 developers/creators to create SpaceShot, A beautiful hyper casual mobile game.
            Developed the idea, created a scatch & a protoype, assembeled a team and lead them, ran testion sycles of up to 200 + participens, collected data, analyzed it & adapted!.
          </Project>
          <Project name='Flex panels gallery' position='Learning project'>
            As a part of my learning journey, while taking a JS course Iv'e, Iv'e created this personal site who showcase abit of my personality, using the power of CSS- flex box properties & Vanila JS.
          </Project>
          <Project name='MaDoggo' position='Full-Stack developer'>
            Having a dog with no doggy friends can be such a pain!
            MaDoggo is a project built as my final project under Le Wagon bootcamp, as a member in a team of 4, Iv'e lead the backend side of the application,
            which let's you create a user, view dog parks near your area, know who's online on site with thier dogs, and even have a live chat!
          </Project>
          <Project name='Classic Snake Game' position='Personal project'>
            As a guy growing up before smartphones, Snake will always have a warm spot in my heart.
            Iv'e decided to recreate the classic game, designing the app's body, and over comming challenges as I progress.
          </Project>
          <Project name='Sudoku' position='Personal project'>
            I use to play Sudoku with my grandmother, ALOT, she tought me all the logic bits behind this numbery mess.
            As a part of my journey to learn and grow Iv'e created a Sudoku game! I got to tackle some challenges along the way like
            competability to a veraity of devices who might try to run the game, and even some algorithem to create a random board!
          </Project>
    </div>
  )
}
