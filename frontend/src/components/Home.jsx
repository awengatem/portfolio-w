import { NavLink } from 'react-router-dom';
import myProfile from '../assets/profile.jpeg';

const Home = () => {
  return (
    <div className="transition-duration: 150ms">
      <div className="flex flex-col items-center justify-center scale-90 md:flex-row md:scale-75 md:w-full md:h-screen lg:scale-75 group">
        {/* Image Section */}
        <div>
          <img className="cursor-pointer" src={myProfile} alt="Profile" />
        </div>

        {/* Hidden UL Section */}
        <div className="hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <ul className="flex items-center justify-center gap-4 text-3xl md:text-4xl md:flex-col md:gap-[5rem] lg:text-6xl">
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
