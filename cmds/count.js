const ytdl = require('ytdl-core');
const ffmpegPath = require('ffmpeg-binaries');
spawn(ffmpegPath, ['-i', 'video.mkv', 'video.mp4']);

module.exports.run = async (bot, message, args) => {

    const streamOptions = {seek: 0, volume: 1};
    let voiceChannelID = "528803693680656417";

    console.log("Starting voice countdown.");

    if (voiceChannelID != null) {
        if (message.guild.channels.get(voiceChannelID)){
            let vc = message.guild.channels.get(voiceChannelID);
            console.log("Next stop, connection");

            vc.join().then(connection => {
                console.log("[VOICE CHANNEL] joined countdown channel.");
                const stream = ytdl('https://www.youtube.com/watch?v=nyC0c6t7Vq0', {filter: 'audioonly'});
                const dispatcher = connection.playStream(stream, streamOptions);

                dispatcher.on("end", end => {
                    console.log("[VOICE CHANNEL] left countdown channel.");
                    vc.leave();
                });
            }).catch(err => {
                console.log(err);
            });

        }
    }
}



module.exports.help = {
    name: "count"
}