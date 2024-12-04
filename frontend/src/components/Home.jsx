import { NavLink } from 'react-router-dom';
import myProfile from '../assets/profile.jpeg';

const Home = () => {
  return (
    <div>
      <div className="group relative w-full h-screen flex flex-col items-center justify-center scale-75 gap-[5rem] md:flex-row md:scale-50 md:gap-[10rem] lg:flex-row lg:scale-50">
        {/* Image */}
        <img
          className="cursor-pointer border-2 md:transition-all md:duration-300 md:group-hover:scale-110"
          src={myProfile}
          alt=""
        />

        {/* list */}
        <div className="md:transform md:translate-x-0 md:group-hover:translate-x-10 md:transition-transform md:duration-300">
          <ul className="flex items-center gap-[4rem] text-[2rem] md:flex-col md:text-[3rem] lg:gap-[5rem] lg:text-[3rem] md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/work">WORK</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
