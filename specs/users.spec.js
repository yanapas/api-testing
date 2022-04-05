import { expect } from 'chai'
import UsersHelper from '../helpers/users.helper'
import {getRandomItem} from '../helpers/common.helper'
import ConfigHelper from '../helpers/config.helper'

describe('Users', () => {
    let usersHelper = new UsersHelper()
    let userId

    before(async function (){
        await usersHelper.creat()
        userId = usersHelper.response.body.id
    })

    after(async function() {
        const configHelper = new ConfigHelper()
        await configHelper.wipeData()
    })

    describe('User creation', () => {
        it('Response status code is 200', () => {
            expect(usersHelper.response.statusCode).to.eq(200)
        })

        it('Response body contains user id', () => {
            expect(usersHelper.response.body.id).not.to.be.undefined
        })

        it('Response body contains initial amount', () => {
            expect(usersHelper.response.body.amount).not.to.be.undefined
        })
    })

    describe('Get user by id', () => {
        before(async function (){
        await usersHelper.getById(userId)
        })

        it('Response status code is 200', () => {
            expect(usersHelper.response.statusCode).to.eq(200)
        })

        it('Response body contains user id', () => {
            expect(usersHelper.response.body.id).not.to.be.undefined
        })

        it('Response body contains initial amount', () => {
            expect(usersHelper.response.body.amount).not.to.be.undefined
        })
    })

    describe('Get all users', () => {
        before(async function (){
        await usersHelper.creat()
        await usersHelper.getAll()
        })

        it('Response status code is 200', () => {
            expect(usersHelper.response.statusCode).to.eq(200)
        })

        it('Response body contains list of 2 or more items', () => {
            expect(usersHelper.response.body.length).to.be.at.least(2)
        })

        it('Response body array item contains user id', () => {
            expect(getRandomItem(usersHelper.response.body).id).not.to.be.undefined
        })

        it('Response body array item contains initial amount', () => {
            expect(getRandomItem(usersHelper.response.body).amount).not.to.be.undefined
        })
    })

    describe('Delete user by id', () => {
        before(async function (){
            await usersHelper.delete(userId)
        })

        it('Response status code is 200', () => {
            expect(usersHelper.response.statusCode).to.eq(200)
        })

        it('Response body contains success message', () => {
            expect(usersHelper.response.body.message).to.eq('User deleted.')
        })

    })
})