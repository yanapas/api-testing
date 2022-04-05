import supertest from 'supertest';

class AuthHelper {
  // constructor() { good practise is using constructor
  //   this.response = null;
  // }
  response

  async login(username, password) {
    await supertest(process.env.BASE_URL)
        .post('/auth')
        .send({ login: username, password: password })
        .then(res => {
          this.response = res
        })
  }
}


export default AuthHelper