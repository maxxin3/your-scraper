const superagent = require("superagent");

class scraper {
  constructor() {
    this.version = require("../package.json").version;
    this.methods = [
      "hug",
      "kiss",
      "lewd",
      "lizard",
      "neko",
      "pat",
      "eigthball",
      "cat",
      "chat",
      "fact",
      "wallpaper",
    ];
  }

  async hug() {
    const { body } = await superagent.get(
      "https://nekos.life/api/hug"
    );
    return body.message;
  }

  async kiss() {
    const { body } = await superagent.get(
      "https://nekos.life/api/kiss"
    );
    return body.message;
  }

  async lewd() {
    const { body } = await superagent.get(
      "https://nekos.life/api/lewd/neko"
    );
    return body.message;
  }

  async lizard() {
    const { body } = await superagent.get(
      "https://nekos.life/api/lizard"
    );
    return body.message;
  }

  async neko() {
    const { body } = await superagent.get(
      "https://nekos.life/api/neko"
    );
    return body.message;
  }

  async pat() {
    const { body } = await superagent.get(
      "https://nekos.life/api/pat"
    );
    return body.message;
  }

  async eightball() {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/8ball"
    );
    return body.message;
  }

  async cat() {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/cat"
    );
    return body.message;
  }
  

  async chat() {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/chat"
    );
    return body.message;
  }

  async fact() {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/fact"
    );
    return body.message;
  }

  
  async wallpaper() {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/img/wallpaper"
    );
    return body.url;
  }
}

module.exports = scraper;