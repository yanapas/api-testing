import UsersHelper from '../helpers/users.helper'
import TransactionsHelper from '../helpers/transactions.helper'
import { expect } from 'chai'

describe('Transactions', () => {
    let usersHelper = new UsersHelper()
    let transactionsHelper = new TransactionsHelper()
    let userId1
    let userId2
    let amount = 100

    before(async function (){
        await usersHelper.creat()
        userId1 = usersHelper.response.body.id
        await usersHelper.creat()
        userId2 = usersHelper.response.body.id

    });

    describe('Creating transaction between 2 users with valid credentials', () => {

        before(async ()=> {

           await transactionsHelper.createTrans(userId1, userId2, amount)
        })

        it('Response status code is 200', () => {
            expect(transactionsHelper.response.statusCode).to.eq(200)
        })
    })

    describe('Get all transactions', ()=> {
        before(async ()=> {
            await transactionsHelper.getAllTrans()
        })
        it('Response status code is 200', () => {
            expect(transactionsHelper.response.statusCode).to.eq(200)
        })
    })

})