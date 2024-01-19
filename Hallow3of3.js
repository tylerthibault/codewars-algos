const https = require('https')

https.get('https://coderbyte.com/api/challenges/json/rest-get-simple', (resp) => {
    
    let data = ''
    resp.on('data', (chunk) => {
        data += chunk;
      });

    resp.on('end', () => {
        // Log the entire response data
        data = JSON.parse(data)
        let str = ""
        for (let i=0; i<data['hobbies'].length; i++) {
            str += data['hobbies'][i]
            if (i !== data['hobbies'].length - 1) {
                str += ", "
            }
        }
        console.log(str)
      });
    
    // console.log(JSON.parse(data))
})