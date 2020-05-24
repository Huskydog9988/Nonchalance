// Used to create the months.json file in public
const fs = require("fs");
const Axios = require("axios");
const {isBefore} = require("date-fns");

const months = [];

Axios.get(
    "http://192.168.1.155:5000/months?_sort=date:DESC,days.date:DESC"
).then(response => {
    for (const month of response.data) {
        month.days.sort((a, b) => {
            if (isBefore(new Date(b.date), new Date(a.date))) return -1;
            return 1;
        });
        months.push(month);
    }
    const json = JSON.stringify(months);
    
    fs.writeFile('./public/months.json', json, "utf8", (err) => {
        if (err){
            console.log(err);
        }
    });
});