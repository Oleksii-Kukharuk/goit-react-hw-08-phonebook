import { Outlet } from 'react-router-dom';

import css from './Home.module.css';

const Home = () => {
  return (
    <main className={css.container}>
      <p className={css.text}>contact book</p>
      <Outlet />

      <img
        src="https://media0.giphy.com/media/PtXVgt9uKjmi4/giphy-downsized.gif?cid=549b592de37567f2733962bff5fd21cf4a0709c843731038&rid=giphy-downsized.gif"
        alt="funny guy"
      />
    </main>
  );
};
export default Home;
