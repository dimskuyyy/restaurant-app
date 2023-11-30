import '../components/restaurant/restaurant-list';
import '../components/static/nav-bar';
import '../components/static/copy-right';
import '../components/static/hero-section';
import { resetTabIndex } from '../../helpers';

const Home = {
  render() {
    return `
      <hero-section></hero-section>
      <div class="explore-list" id="exploreRestaurant">
        <h1>Explore Restaurant</h1>
        <restaurant-list></restaurant-list>
      </div>
    `;
  },

  afterRender() {
    resetTabIndex();
  },
};

export default Home;
