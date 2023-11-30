import { resetTabIndex } from '../../helpers';
import '../components/favorite/favorite-section';

const Favorite = {
  render() {
    return `
      <div class="favorite-container">
        <h1 class="favorite-title">Restoran Favorit</h1>
        <favorite-section></favorite-section>
      </div>
    `;
  },

  afterRender() {
    resetTabIndex();
  },
};

export default Favorite;
