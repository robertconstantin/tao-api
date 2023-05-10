module.exports = ({ env }) => ({
    //...
    'import-export-entries': {
      enabled: true,
    },
    email: {
        config: {
          provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
          providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
          },
          settings: {
            defaultFrom: 'office@tao-romania.ro',
            defaultReplyTo: 'office@tao-romania.ro',
            testAddress: 'onepads0@gmail.com',
          },
        },
    },
  });