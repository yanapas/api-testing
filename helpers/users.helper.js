import supertest from 'supertest'

class UsersHelper {
    response

    async creat() {
        await supertest(process.env.BASE_URL)
            .post('/users')
            .set('Authorization', `Bearer${process.env.TOKEN}`)
            .then(res => {
                this.response = res
            })
    }

    async getById(id){
        await supertest(process.env.BASE_URL)
            .get(`/users?id=${id}`)
            .set('Authorization', `Bearer${process.env.TOKEN}`)
            .then(res => {
                this.response = res
            })
    }

    async getAll(){
        await supertest(process.env.BASE_URL)
            .get('/users')
            .set('Authorization', `Bearer${process.env.TOKEN}`)
            .then(res => {
                this.response = res
            })
    }

    async delete(transId) {
        await supertest(process.env.BASE_URL)
            .delete('/users')
            .send({ id: transId })
            .set('Authorization', `Bearer${process.env.TOKEN}`)
            .then(res => {
                this.response = res
            })
    }
}

export default UsersHelper