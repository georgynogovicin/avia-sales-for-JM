class Request {
  async getResource(url, options = {}) {
    try {
      const res = await fetch(url, options);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}. Status: ${res.status}`);
      }
      const body = res.json();

      return body;
    } catch (error) {
      console.log(error);
    }
    return false;
  }

  async getSearchId() {
    const res = await this.getResource(`https://front-test.beta.aviasales.ru/search`);

    return res.searchId;
  }

  async getTickets(searchId) {
    const res = await this.getResource(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);

    return res.tickets;
  }
}

const request = new Request();

export default request;

// async function request(url, options = {}) {
//     let body;
//     try {
//         const res = await fetch(url, options);

//         if(!res.ok) {
//             throw new Error(`Could not fetch ${url}. Status: ${res.status}` )
//         }

//         body = await res.json();
//     } catch(error) {
//         console.log(error);
//     }

//     return body;
// }

// const id = request(`https://front-test.beta.aviasales.ru/search`);

// export default request;
