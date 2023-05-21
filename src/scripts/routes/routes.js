import Home from '../views/pages/home';
import Contact from '../views/pages/contact';
import About from '../views/pages/about';
import LostForm from '../views/pages/lost-form';
import FoundForm from '../views/pages/found-form';

const routes = {
  '/': Home, // default page
  '/home': Home, // default page
  '/contact': Contact,
  '/about': About,
  '/lost-form': LostForm,
  '/found-form': FoundForm,
};

export default routes;
