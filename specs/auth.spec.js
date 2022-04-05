import { expect } from 'chai'
import AuthHelper from '../helpers/auth.helper'

describe('Auth', () => {
    let authHelper = new AuthHelper()

    describe('Successful log in', () => {
        before(async function() {
            await authHelper.login(process.env.LOGIN, process.env.PASSWORD)
        })

        it('Response status code is 200', () => {
            expect(authHelper.response.statusCode).to.eq(200)
        })

        it('Response body contains authorization token', () => {
            expect(authHelper.response.body.token).not.to.be.undefined
        })

    })
    describe('Log in with invalid credentials', () => {
        before(async function() {
            await authHelper.login('invalid', 'invalid')
        })

        it('Response status code is 404', () => {
                    expect(authHelper.response.statusCode).to.eq(404)
                })
        it('Response body contains error message', () => {
                    expect(authHelper.response.body.message).to.eq('Wrong login or password.')
        })
    })

})