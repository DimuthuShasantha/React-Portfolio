import Projectitem from "./Projectitem";
import dashboard from '../assets/dashboard.png';
import latavel from '../assets/latavel.webp';
import starter from '../assets/starter.png';
import ims from '../assets/ims.png';


const Projects = () => {
  return (
    <div id="projects" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="py-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            recusandae nisi numquam dolores ipsa, similique rerum voluptatum
            atque quidem ipsum dolore sapiente sequi voluptate pariatur cumque
            placeat expedita eius doloribus.
        </p>
        <div className="grid gap-12 sm:grid-cols-2">
            <Projectitem img={dashboard} title='Crypto App' />
            <Projectitem img={latavel} title='Property App' />
            <Projectitem img={starter} title='Netflix App' />
            <Projectitem img={ims} title='Twitch App' />
        </div>
    </div>
  )
}

export default Projects