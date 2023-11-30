import { resetTabIndex } from '../../helpers';
import '../components/detail/detail-container';

const Detail = {
  render() {
    return `
      <detail-container></detail-container>
    `;
  },

  afterRender() {
    resetTabIndex();
  },
};

export default Detail;
