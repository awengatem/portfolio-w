import { NavLink } from 'react-router-dom';
import myProfile from '../assets/profile.jpeg';

const Home = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center scale-75 md:flex-row md:scale-50 lg:flex-row lg:scale-50">
        <img src={myProfile} alt="" />
        <ul className="flex items-center gap-[4rem] text-[1.5rem] md:flex-col md:text-[3rem] lg:gap-[5rem] lg:text-[3rem]">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">ABOUT</NavLink>
          <NavLink to="/">WORK</NavLink>
          <NavLink to="/">CONTACT</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Home;
