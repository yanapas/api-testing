import supertest from 'supertest'

class TransactionsHelper {
    response

    async createTrans(senderId, receiverId, amount) {
        await supertest(process.env.BASE_URL)
            .post('/transactions')
            .send({'from': senderId, 'to': receiverId, 'amount': amount})
            .set('Authorization', `Bearer${process.env.TOKEN}`)
            .then(res => {
                this.response = res
            })
    }

    async getAllTrans() {
        await supertest(process.env.BASE_URL)
            //Set up request method
            .get('/transactions')
            //Add tocken to your req (for each protected route)
            .set('Authorization', `Bearer${process.env.TOKEN}`)
            //Save a response from server to result variable
            .then(res => {
                this.response = res
            })
    }

    async getTransById(transId) {
        await supertest(process.env.BASE_URL)
            //Set up request method
            .get(`/transactions?id=${transId}`)
            //Add token to your req (for each protected route)
            .set('Authorization', `Bearer${process.env.TOKEN}`)
            //Save a response from server to result variable
            .then(res => {
                this.response = res
            })
    }
}

export default TransactionsHelper