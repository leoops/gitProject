import Repositories from '../pages/Repositories';
import PullRequests from '../pages/PullRequests';
import { createStackNavigator, createAppContainer } from 'react-navigation';

/**
 * @description Stack de rotas do fluxo de repositorios
 */
const repositoriesScreenStack = {
  Repositories: {
    screen: Repositories,
    navigationOptions: {
      header: null,
    },
  },
  PullRequests: {
    screen: PullRequests,
  },
};

const AppNavigator = createStackNavigator(repositoriesScreenStack);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
