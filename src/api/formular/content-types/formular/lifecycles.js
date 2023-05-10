module.exports = {
    async afterCreate(event) {
      const { result } = event;
      try {
        await strapi.plugins['email'].services.email.send({
          to: 'iulian.alexandrov@gmail.com',
          from: `office@tao-romania.ro`,
          //cc: 'onepads0@gmail.com',
          subject: `Mesaj nou de contact Tao-Romania`,
          html: `Salut Iulian,<br>
            <strong>  ${result.nume} ${result.prenume} </strong> a completat formularul de contact cu mesajul: <br>
             <strong> ${result.mesaj}  </strong><br><br>
            Date de contact: <br>
            Email: <strong> ${result.email} </strong> <br>
            Telefon: <strong> ${result.telefon}  </strong>
          ` 
        });
        //console.log('here', result)
      } catch (err) {
        console.log(err);
      }
    },
};