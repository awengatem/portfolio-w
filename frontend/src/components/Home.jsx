import { NavLink } from 'react-router-dom';
import myProfile from '../assets/profile.jpeg';

const Home = () => {
  return (
    <div className="transition-duration: 150ms">
      <div className="flex flex-col items-center justify-center scale-90 md:flex-row md:scale-75 md:w-full h-screen lg:scale-75 group">
        {/* Image Section */}
        <div className="md:hover:animate-move-left">
          <img
            className="cursor-pointer lg:scale-90"
            src={myProfile}
            alt="Profile"
          />
        </div>

        {/* Hidden UL Section with Fixed Position on Large Screens */}
        <div className="hidden group-hover:block lg:fixed lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:mt-[30px] lg:mr-auto">
          <ul className="flex items-center justify-center gap-4 text-3xl uppercase md:text-4xl md:flex-col md:gap-[5rem] lg:text-6xl lg:animate-move-down">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
