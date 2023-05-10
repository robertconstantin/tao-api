module.exports = {
    async afterCreate(event) {
      const { result } = event;
      try {
        await strapi.plugins['email'].services.email.send({
          to: 'iulian.alexandrov@gmail.com',
          from: `office@tao-romania.ro`,
          //cc: 'onepads0@gmail.com',
          subject: `Client nou pentru ${result.eveniment}`,
          html: `Salut Iulian,<br>
            <strong>  ${result.nume} </strong> s-a inscris la <strong> ${result.eveniment}  </strong><br>
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