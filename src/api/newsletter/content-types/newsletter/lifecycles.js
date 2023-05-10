module.exports = {
    async afterCreate(event) {
      const { result } = event;
      try {
        await strapi.plugins['email'].services.email.send({
          to: 'iulian.alexandrov@gmail.com',
          from: `office@tao-romania.ro`,
          //cc: 'onepads0@gmail.com',
          subject: `${result.nume} s-a inscris la newsletter-ul Tao-Romania`,
          html: `Salut Iulian,<br>
            <strong>  ${result.nume} </strong> s-a inscris cu drag la cel mai tare newsletter de Tao din Romania!  <br>
            Date de contact: <br>
            Email: <strong> ${result.email} </strong> <br>
          `
        });
        //console.log('here', result)
      } catch (err) {
        console.log(err);
      }
    },
};