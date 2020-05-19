// Used to create the months.json file in public
const fs = require("fs");
const Axios = require("axios");

const months = [];

Axios.get(
    "http://192.168.1.155:5000/months?_sort=date:DESC,days.date:DESC"
).then(response => {
    for (const month of response.data) {
        months.push(month);
    }
    const json = JSON.stringify(months);
    
    fs.writeFile('./public/months.json', json, "utf8", (err) => {
        if (err){
            console.log(err);
        }
    });
});