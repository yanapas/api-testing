import supertest from "supertest";

class ConfigHelper{
   response

   async wipeData() {
       await supertest(process.env.BASE_URL)
           .delete('/config')
           .set('Authorization', `Bearer${process.env.TOKEN}`)
           .then(res => {
               this.response = res
           })
   }

}

export default ConfigHelper