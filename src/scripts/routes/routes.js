import Home from '../views/pages/home';
import Error from '../views/pages/404';
import about from '../views/pages/about';
import FoundForm from '../views/pages/found-form';
import Tou from '../views/pages/tou-page';
import LostItemService from '../views/pages/lost-item-service';
import FoundItemService from '../views/pages/found-item-service';
import ListItemsService from '../views/pages/list-item-service';
import DetailItems from '../views/pages/detail-item';

const routes = {
  '/': Home, // default page
  '/home': Home, // default page
  '/404': Error,
  '/about': about,
  '/found-form': FoundForm,
  '/terms-of-use': Tou,
  '/lost-item-service': LostItemService,
  '/found-item-service': FoundItemService,
  '/list-item-service': ListItemsService,
  '/item-detail/:id': DetailItems,
};

export default routes;
