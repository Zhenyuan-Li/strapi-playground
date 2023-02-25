module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "vincent0lee95@gmail.com",
        defaultReplyTo: "vincent0lee95@gmail.com",
      },
    },
  },
  // ...
});
