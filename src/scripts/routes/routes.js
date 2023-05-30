import Home from '../views/pages/home';
import Contact from '../views/pages/contact';
import About from '../views/pages/about';
import FoundForm from '../views/pages/found-form';
import Tou from '../views/pages/tou-page';
import LostItemService from '../views/pages/lost-item-service';

const routes = {
  '/': Home, // default page
  '/home': Home, // default page
  '/contact': Contact,
  '/about': About,
  '/found-form': FoundForm,
  '/terms-of-use': Tou,
  '/lost-item-service': LostItemService,
};

export default routes;
