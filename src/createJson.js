// Used to create the months.json file in public
const fs = require("fs");
const Axios = require("axios");
const {isBefore} = require("date-fns");
const Marked = require("marked");

const months = [];

Axios.get(
    "https://nonchalance-dashbaord.herokuapp.com/months?_sort=date:DESC,days.date:DESC"
).then(response => {
    for (const month of response.data) {

        // Change markdown to html in description
        const days = [];
        for (const day of month.days) {
            const events = [];
            for (const eventItem of day.event) {
                eventItem.description = Marked(eventItem.description)
                events.push(eventItem);
            }
            if (events.length > 0) {
                day.event.length = 0; // Clear events in day
                day.event = events; // Set day.event to events

                days.push(day);
            }
        }

        if (days.length > 0) {
            month.days = []; // Clear days in month
            month.days = days; // Set month.days to days

            month.days.sort((a, b) => {
                if (isBefore(new Date(b.date), new Date(a.date))) return -1;
                return 1;
            });

            months.push(month);
            console.log(month.name);
        }
    }
    const json = JSON.stringify(months);
    
    fs.writeFile('./public/months.json', json, "utf8", (err) => {
        if (err){
            console.log(err);
        }
        console.log("Wrote to file");
    });
});