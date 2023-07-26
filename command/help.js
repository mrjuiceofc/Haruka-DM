const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

╭━✧
┃ 𝗛𝗲𝗿𝗲 𝗪𝗲 𝗚𝗼🐦 
┃ ${mundur}  
╰━✧  
╭┫  
┃╰━━━━━━━━━━━━┈ 
┃
╰━✧ 𝗦𝗧𝗔𝗧𝗜𝗦𝗧𝗜𝗖𝗦      
  ┃ 𝗨𝗽𝗹𝗼𝗮𝗱𝘀 : ${upload}
  ┃ 𝗗𝗶𝘄𝗻𝗹𝗼𝗮𝗱𝘀 : ${download}
  ╰━━━━━━━━━━━━━┈ 
╭━✧
┃ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
┃▸ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
┃▸ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
┃▸ 𝗧𝗶𝗺𝗲 : ${jam}
┃▸ 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
┃▸ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
┃
╰━━━━━━━━━━━━━┈
╭━✧
┃𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢𝗥
┃
┃▸ 𝗡𝗮𝗺𝗲 : ${pushname !== undefined ? pushname : '-'}
┃▸ 𝗦𝘁𝗮𝘁𝘂𝘀 : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃▸ 𝗟𝗶𝗺𝗶𝘁 : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃▸ 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃▸ 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
┃▸ 𝗥𝗼𝗹𝗲 : ${role}
┃
╰━━━━━━━━━━━━─┈ 
 ┃
╭━✧
┃
┃▸*𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨*${petik}
┃
┃▸ ${prefix}owner
┃▸ ${prefix}ai
┃▸ ${prefix}aiimg
┃▸ ${prefix}aidraw
┃▸ ${prefix}chatgpt
┃▸ ${prefix}toimg
┃▸ ${prefix}tomp3
┃▸ ${prefix}sticker
┃▸ ${prefix}xquote
┃▸ ${prefix}smeme
┃▸ ${prefix}ttp
┃▸ ${prefix}attp
┃▸ ${prefix}emojimix
┃▸ ${prefix}say
┃▸ ${prefix}autoaipc
┃▸ ${prefix}translate${petik}
╰━━━━━━━━━━━━━─┈
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `Untuk List Sewa ubah sendiri di folder command, file help.js 👌 baris ke 521`