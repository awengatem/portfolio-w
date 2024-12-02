import myProfile from '../assets/profile.jpeg';

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen flex items-center cursor-pointer sm:flex-col gap-[4rem] lg:flex-row">
        <img
          className="w-[8rem] sm:w-[100%] lg:w-[50%]"
          src={myProfile}
          alt=""
        />
        <div className="text-4xl uppercase group">
          <ul className="flex items-center justify-center gap-[3rem] sm:flex-row md:flex-col lg:flex-col">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
