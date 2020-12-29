class Request {
  static apiURL = `https://front-test.beta.aviasales.ru/`;

  async getResource(url, requestCounter = 0) {
    let body;

    try {
      const res = await fetch(url);
      if (res.status === 500) {
        throw new Error('Ошибка');
      }
      body = await res.json();
    } catch (error) {
      if (requestCounter < 3) return this.getResource(url, requestCounter + 1);
      throw new Error(error);
    }

    return body;
  }

  async getSearchId() {
    const res = await this.getResource(`${Request.apiURL}search`);

    return res.searchId;
  }

  async getTickets(searchId) {
    const res = await this.getResource(`${Request.apiURL}tickets?searchId=${searchId}`);

    return res;
  }
}

const request = new Request();

export default request;
