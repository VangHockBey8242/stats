const { MessageEmbed } = require("discord.js");
const { prefix } = require("../ayarlar.json");
module.exports.run = async(client, message, args) => {

    const gweep = new MessageEmbed()
    .setTitle(`${client.user.username} Yardım Menüsü`)
    .setDescription("[Buraya tıklayarak](http://gweepcreative.com) youtube kanalımıza göz atabilirsiniz")
    .addField(`${prefix}me`,`Komutu kullanan veya etiketlenen kişinin stat bilgisini gösterir.`,false)
    .addField(`${prefix}top`,`En çok mesaj ve ses aktifliği olan ilk 15 kişiyi gösterir.`,false)
    .addField(`${prefix}mesaj`,`En çok mesaj aktifliği olan ilk 15 kişiyi gösterir.`,false)
    .addField(`${prefix}ses`,`En çok ses aktifliği olan ilk 15 kişiyi gösterir.`,false)
    .addField(`${prefix}sıfırla <hepsi/ses/mesaj @Kullanıcı>`,`Komutu kullanan veya etiketlenen kişinin belirtilen stat bilgisini sıfılar.`,false)
    .setThumbnail(client.user.avatarURL({dynamic: true}))
    .setColor("#5865F2")
    .setFooter(`${message.author.tag} tarafından istendi. 💻 Developed by Gweep Creative`, message.author.avatarURL({dynamic: true}));
    message.channel.send({ embeds: [gweep] });
};
    exports.conf = {
        commands: ["y", "yardım", "help"],
        usage: "yardım",
        enabled: true,
        guildOnly: true
    };