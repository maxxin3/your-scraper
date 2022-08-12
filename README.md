# Your-Scraper
your-scraper is a simple package to implement image commands for discord bots.


# Installing

```bash
npm i your-scraper
```

# Methods
- Hug (hug)
- Kiss (kiss)
- Lewd (lewd)
- Lizard (lizard)
- Neko (neko)
- Pat (pat)
- 8ball (eigthball)
- Cat (cat)
- Chat (chat)
- Fact (fact)
- Wallpaper (wallpaper)

# Example
```js
const Discord = require("discord.js");
const NSFW = require("your-scraper");
const scraper = new scraper();

const image = await scraper.hug();
const embed = new Discord.MessageEmbed()
    .setTitle(`Hug Image`)
    .setColor("GREEN")
    .setImage(image);
message.channel.send(embed);
```

# Note
> ⚠ | This package use **[Nekos.life](https://nekos.life/)** to fetch images.
