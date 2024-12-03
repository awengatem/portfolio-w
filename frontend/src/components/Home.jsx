import { NavLink } from 'react-router-dom';
import myProfile from '../assets/profile.jpeg';

const Home = () => {
  return (
    <div>
      <div className="group relative w-full h-screen flex flex-col items-center justify-center scale-75 gap-[5rem] md:flex-row md:scale-50 md:gap-[10rem] lg:flex-row lg:scale-50">
        {/* Image */}
        <img className="cursor-pointer border-2" src={myProfile} alt="" />

        {/* list */}
        <ul className="flex items-center gap-[4rem] text-[2rem] md:flex-col md:text-[3rem] lg:gap-[5rem] lg:text-[3rem] md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/work">WORK</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Home;
