const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://photos.google.com/share/AF1QipNccwxrdUIfGMkLpt-yA-QxQY7HGqg7_hqIinlPaYxg3rLhZIufTv0qB_fFs4pKYA/photo/AF1QipNRiHEP9DTCQkhhIC1AMah7eMcnm8UN8KTLLW5j?key=TUFuaUtNXzZzdUtsem1iUDNJcFNwbTFqQ3UzWC13')
.then((results) => {
  const $ = cheerio.load(results.data)('body > script');
  const item = $.eq(5).html();
  const mt = item.match(/\bhttps?:\/\/[^,\s()<>]+/gi);
  var input = null;
  for(let i = 0;i < mt.length;i++) {
    if(mt[i].indexOf("video-downloads") != -1) {
        input = mt[i]
    }
  }

  console.log(input)
})
