import 'dotenv/config';
import AuthHelper from '../helpers/auth.helper'
import ConfigHelper from '../helpers/config.helper'
import { start } from './server'

const baseUrl = process.env.BASE_URL
const port = process.env.PORT

if (baseUrl.includes('localhost') && baseUrl.includes(port))
    start(port)

before(async function () {
    const authHelper = new AuthHelper()
    await authHelper.login(process.env.LOGIN, process.env.PASSWORD)
    process.env['TOKEN'] = authHelper.response.body.token
});

after(async function() {
    if (!baseUrl.includes(port)) {
        const configHelper = new ConfigHelper()
        await configHelper.wipeData()
    }

})
