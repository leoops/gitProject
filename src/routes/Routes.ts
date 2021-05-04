import Repositories from '../views/Repositories';
import PullRequests from '../views/PullRequests';

/**
 * @description Stack de rotas do fluxo de repositórios
 */
const Routes: RouteScreen[] = [
  {
    name: 'Repositories',
    component: Repositories,
  },
  {
    name: 'PullRequests',
    component: PullRequests,
  },
];

export interface RouteScreen {
  name: string;
  component: React.ComponentType<any>;
}

export default Routes;
