import CONFIG from '../globals/config';

class ApiRestaurant {
  static async getAll() {
    const response = await fetch(`${CONFIG.URL_API}/list`);
    const data = await response.json();
    return data;
  }

  static async getById(id) {
    const response = await fetch(`${CONFIG.URL_API}/detail/${id}`);
    const data = await response.json();
    return data;
  }

  static async addFeedback({ id, name, review }) {
    const option = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name,
        review,
      }),
    };

    const response = await fetch(`${CONFIG.URL_API}/review`, option);

    const data = await response.json();
    return data;
  }
}

export default ApiRestaurant;
