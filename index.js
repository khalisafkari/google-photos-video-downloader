const app = require('express')()
const axios = require('axios');
const cheerio = require('cheerio');

app.get('/',async(req,res)=>{
   const item = await here();
   if(item){
       res.send({
           type:'480p',
           src:item + "=m18"
       }) // 480p
   }
})  

const here = async(i) =>{
    const url = await axios.get('https://photos.google.com/share/AF1QipNhIZZ0NHNkZ3x1TqKGdsdSw9j2SY8GMrYOk1VwilfIgn6IL5QFTxNbbHDiU5M02w/photo/AF1QipMZHo9DyRCxnvt2Z0BSKsykKQ3P-C6CQ_2YCWMC?key=LVhsNGNzLWRVU1RQM01VazQtZllKYzNpSU1JeEln');
    const data = cheerio.load(url.data)('body > script:nth-child(9)').html();
    const item = `${data}`
    const pm = item.split('003d')[1]
    if(pm){
        return decodeURIComponent(pm.split('%3Dm')[0])
    }else{
        here();
    }
}

app.listen(4000)