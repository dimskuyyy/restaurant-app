import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/restaurant/:id': Detail,
};

export default routes;
