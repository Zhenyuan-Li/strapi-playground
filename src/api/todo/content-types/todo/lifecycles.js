module.exports = {
  async afterCreate(event) {
    const { result } = event;
    console.log(result);

    try {
      await strapi.plugins["email"].services.email.send({
        to: "vincent.z.li@outlook.com",
        from: "vincent0lee95@gmail.com",
        subject: "You have a new todo",
        text: `Your todo is ${result.name}`,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
