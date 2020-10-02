// Used to create the months.json file in public
const fs = require("fs");
const { isBefore } = require("date-fns");
const Marked = require("marked");
const oboe = require("oboe");
// const DOMPurify = require('dompurify');

oboe("https://nonchalance-dashbaord.herokuapp.com/months?_sort=date:DESC,days.date:DESC")
    .done(function (data) {

        const months = []

        for (const month of data) {

            // Change markdown to html in description
            const days = [];
            for (const day of month.days) {
                const events = [];
                for (const eventItem of day.event) {


                    // delete unused items
                    delete eventItem.eventMedia
                    delete eventItem._id
                    delete eventItem.createdAt
                    delete eventItem.updatedAt
                    delete eventItem.__v

                    delete eventItem.stories._id
                    delete eventItem.stories.id
                    delete eventItem.stories.createdAt
                    delete eventItem.stories.updatedAt
                    delete eventItem.stories.__v


                    // Convert markdown to html
                    const dirtyHTML = Marked(eventItem.description);
                    // const cleanHTML = DOMPurify.sanitize(dirtyHTML);
                    eventItem.description = dirtyHTML;

                    // save
                    events.push(eventItem);
                }
                if (events.length > 0) {
                    day.event.length = 0; // Clear events in day
                    day.event = events; // Set day.event to events


                    // delete unused items
                    delete day._id
                    delete day.createdAt
                    delete day.updatedAt
                    delete day.__v
                    delete day.month


                    // save
                    days.push(day);
                }
            }

            if (days.length > 0) {
                month.days = []; // Clear days in month
                month.days = days; // Set month.days to days

                // delete unused items
                delete month._id
                delete month.createdAt
                delete month.updatedAt
                delete month.__v

                // sort days
                month.days.sort((a, b) => {
                    if (isBefore(new Date(b.date), new Date(a.date))) return -1;
                    return 1;
                });

                // save
                months.push(month);

                console.log(`${month.name} had ${month.days.length} days`);
            }
        }

        const json = JSON.stringify(months);

        fs.writeFile('./public/months.json', json, "utf8", (err) => {
            if (err) return console.log(err);
            console.log("Wrote to file");
        });
    })
    .fail(function () {
        console.error("Failed to get json");
    });