const { createClient } = require("redis");

const client = createClient({
  url: process.env.CLIENT_URL,
});

const connectClient = async () => {
  try {
    await client.connect();

    console.log("conection successfuly");
  } catch (e) {
    console.error(e);
  }
};

connectClient();

module.exports = { client };
