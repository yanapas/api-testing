import UsersHelper from '../helpers/users.helper'
import TransactionsHelper from '../helpers/transactions.helper'
import { expect } from 'chai'
import {getRandomItem} from "../helpers/common.helper";

describe('Transactions', () => {
    let usersHelper = new UsersHelper()
    let transactionsHelper = new TransactionsHelper()
    let senderId
    let receiverId
    let amount = Math.floor(Math.random() * 200)
    let transId

    before(async function (){
        await usersHelper.creat()
        senderId = usersHelper.response.body.id
        await usersHelper.creat()
        receiverId = usersHelper.response.body.id
        await transactionsHelper.createTrans(senderId, receiverId, amount)
        transId = transactionsHelper.response.body.id

    })

    describe('Creating transaction between 2 users with valid credentials', () => {

        before(async ()=> {

           await transactionsHelper.createTrans(senderId, receiverId, amount)
        })

        it('Response status code is 200', () => {
            expect(transactionsHelper.response.statusCode).to.eq(200)
        })

        it('Response body contains transaction id', () => {
            expect(transactionsHelper.response.body.id).not.to.be.undefined
        })

        it('Response body contains sender id', () => {
            expect(transactionsHelper.response.body.from).to.eq(senderId)
        })

        it('Response body contains receiver id', () => {
            expect(transactionsHelper.response.body.to).to.eq(receiverId)
        })

        it('Response body contains amount of sending money', () => {
            expect(transactionsHelper.response.body.amount).to.eq(amount)
        })
    })

    describe('Get all transactions', ()=> {
        before(async ()=> {
            await transactionsHelper.createTrans(senderId, receiverId, amount)
            await transactionsHelper.createTrans(senderId, receiverId, amount)
            await transactionsHelper.getAllTrans()
        })
        it('Response status code is 200', () => {
            expect(transactionsHelper.response.statusCode).to.eq(200)
        })

        it('response body contains list of 2 or more items', () => {
            expect(transactionsHelper.response.body.length).to.be.at.least(2)
        })

        it('Response body contains transaction id', () => {
            expect(getRandomItem(transactionsHelper.response.body).id).not.to.be.undefined
        })

        it('Response body contains sender id', () => {
            expect(getRandomItem(transactionsHelper.response.body).from).not.to.be.undefined
        })

        it('Response body contains receiver id', () => {
            expect(getRandomItem(transactionsHelper.response.body).to).not.to.be.undefined
        })

        it('Response body contains amount of sending money', () => {
            expect(getRandomItem(transactionsHelper.response.body).amount).not.to.be.undefined
        })
    })

    describe('Get transaction by id', ()=> {

        before(async ()=> {

            await transactionsHelper.getTransById(transId)
        })
        it('Response status code is 200', () => {
            expect(transactionsHelper.response.statusCode).to.eq(200)
        })

        it('Response body contains transaction id', () => {
            expect(transactionsHelper.response.body.id).to.eq(transId)
        })

        it('Response body contains sender id', () => {
            expect(transactionsHelper.response.body.from).to.eq(senderId)
        })

        it('Response body contains receiver id', () => {
            expect(transactionsHelper.response.body.to).to.eq(receiverId)
        })

        it('Response body contains amount of sending money', () => {
            expect(transactionsHelper.response.body.amount).to.eq(amount)
        })
    })

})