import returnIcon from '../assets/return.png';
import myAboutPhoto from '../assets/photoAbout.jpeg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Header */}
      <div className="h-[4rem]">
        <Link to="/">
          <img className="cursor-pointer" src={returnIcon} alt="" />
        </Link>
      </div>

      {/* main */}
      <div className="w-full h-screen flex flex-col gap-5 lg:flex lg:flex-row lg:items-center">
        <div className="scale-75">
          <img src={myAboutPhoto} alt="" />
        </div>

        <div className="flex items-center justify-center m-auto">
          <h1 className="text-2xl">Hello,im Aweng. A web developer</h1>
        </div>
      </div>
    </div>
  );
};
export default About;
