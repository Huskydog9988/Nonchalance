<template>
  <div class="timeline" id="Timeline">
    <div v-for="month of months" :key="month.id">
      <!-- Month Start -->
      <div class="timeline-month">
        {{month.name}}
        <span>Days</span>
      </div>
      <!-- Month Content -->
      <!-- Day Start -->
      <div class="timeline-section" v-for="day of month.days" :key="day.id">
        <!-- <v-responsive> -->
        <!-- <v-lazy
            v-model="day.id"
            :options="{
              threshold: .5
            }"
            transition="fade-transition"
        >-->
        <div class="timeline-date">{{format(new Date(day.date.concat(" 00:00")), "eeee, do")}}</div>
        <!-- Day Content -->
        <div class="row">
          <!-- Day Content Item Start -->
          <div v-for="event of day.event" :key="event.id" class="col-sm-5">
            <div class="timeline-box">
              <div class="box-title" :id="event.id">
                <i :class="event.iconClass" aria-hidden="true"></i>
                {{event.title}}
              </div>
              <div class="box-content">
                <!-- If outsides links -->
                <div v-if="event.outSideLinks">
                  <Commentary v-if="event.commentary" />
                  <Bridge v-if="event.Bridge" :bridge="event.Bridge" />
                  <EventLink :eventLink="createLink(event.id)" />
                  <v-btn
                    tile
                    x-small
                    v-for="link of Object.keys(event.outSideLinks)"
                    :key="link"
                    color="blue-grey darken-4"
                    target="_blank"
                    :href="event.outSideLinks[link]"
                  >{{link}}</v-btn>
                </div>
                <!-- If no outside links -->
                <div v-else>
                  <Commentary v-if="event.commentary" />
                  <Bridge v-if="event.Bridge" :bridge="event.Bridge" />
                  <EventLink :eventLink="createLink(event.id)" />
                </div>
                <div class="box-item" v-html="sanitizer(event.description)"></div>
              </div>
              <div v-if="$root.debug" class="box-footer">
                <p v-if="$root.showDates" style="display: inline;">{{day.date}}</p>
                <p style="display: inline;">
                  <b> Stories: </b>
                </p>
                <p
                  style="display: inline;"
                  v-for="eventStory in stories(event.stories)"
                  :key="eventStory"
                >{{eventStory}} </p>
              </div>
              <div v-else class="box-footer">
                <p v-if="$root.showDates" style="display: inline;">{{day.date}}</p>
              </div>
            </div>
          </div>
          <!-- Day Content Item End -->
        </div>
        <!-- Day Content End -->
        <!-- </v-lazy> -->
        <!-- </v-responsive> -->
      </div>
      <!-- Day End -->
    </div>
  </div>
</template>

<script>
// import {get} from "axios";
import Marked from "marked";
import format from "date-fns/format";
import isBefore from "date-fns/isBefore";
import dompurify from 'dompurify';
// const isBefore = () => import("date-fns/isBefore");

import EventLink from "./EventLink";
import Bridge from "./Bridge";
// import Commentary from "./Commentary";

export default {
  name: "Timeline",
  props: ["story", "eventBus"],
  components: {
    EventLink,
    Bridge,
    Commentary: () => import("./Commentary")
  },
  data: () => {
    return {
      months: [],
      // backup: [],
      // Marked,
      format,
      sanitizer: dompurify.sanitize
    };
  },
  methods: {
    // https://alligator.io/vuejs/implementing-infinite-scroll/
    timelineInit: function() {
      // If nothing is set to false or being "sorted"
      if (
        !this.$root.live && // If set to false, don't sort
        this.$root.story.DispatchesFromElsewhere &&
        this.$root.story.NewNoologyNetwork &&
        this.$root.story.JejuneInstitute &&
        this.$root.story.LatitudeSociety &&
        this.$root.story.Spoilers &&
        this.$root.story.Crystore
      ) {
        this.timelineUnsorted(); //this.timelineInit();
      } else {
        this.timelineSorted();
      }
    },
    timelineUnsorted() {
      // console.log("timelineUnsorted");
      // this.months.length = 0; // Clear array
      this.months = [];

      // const link =
      //   process.env.NODE_ENV === "production"
      //     ? "/Nonchalance/months.json"
      //     : "/months.json";
      const url =
        process.env.NODE_ENV === "production"
          ? "/Nonchalance/months.json"
          : "/months.json";

      // Axios({
      //   method: "get",
      //   url: url, // Safari fix
      //   withCredentials: false
      // }).then(response => {
      //   for (const month of response.data) {
      //     this.months.push(month);
      //   }
      //   this.$emit("isLoading", false);
      // });

      // get(url).then(response => {
      //   for (const month of response.data) {
      //     this.months.push(month);
      //   }
      //   this.$emit("isLoading", false);
      // });

      fetch(url)
        .then(response => response.json())
        .then(data => {
          for (const month of data) {
            this.months.push(month);
          }
          this.$emit("isLoading", false);
        });
    },
    timelineSorted() {
      // console.log("timelineSorted");
      // Sort

      // this.months.length = 0; // Clear array
      this.months = [];

      // const link =
      //   process.env.NODE_ENV === "production"
      //     ? "/Nonchalance/months.json"
      //     : "/months.json";
      let url;
      if (this.$root.live) {
        url =
          "https://nonchalance-dashbaord.herokuapp.com/months?_sort=date:DESC,days.date:DESC";
      } else {
        url =
          process.env.NODE_ENV === "production"
            ? "/Nonchalance/months.json"
            : "/months.json";
      }

      // Axios({
      //   method: "get",
      //   url: url, // Safari fix
      //   withCredentials: false
      // }).then(response => {
      //   for (const month of response.data) {
      //     this.months.push(month);
      //   }
      //   this.$emit("isLoading", false);
      // });

      // get(url).then(response => {
      //   for (const month of response.data) {
      //     this.sortMonth(month);
      //   }
      //   this.$emit("isLoading", false);
      // });

      fetch(url)
        .then(response => response.json())
        .then(data => {
          for (const month of data) {
            this.sortMonth(month);
          }
          this.$emit("isLoading", false);
        });
    },
    sortMonth: function(month) {
      const days = [];

      for (const day of month.days) {
        const events = [];

        for (const eventItem of day.event) {
          if (!this.$root.story.Spoilers && eventItem.stories.Spoilers)
            continue;
          if (!this.$root.Commentary && eventItem.Commentary) continue;

          if (
            !this.$root.story.DispatchesFromElsewhere &&
            eventItem.stories.DispatchesFromElsewhere
          )
            continue;
          if (
            !this.$root.story.NewNoologyNetwork &&
            eventItem.stories.NewNoologyNetwork
          )
            continue;
          if (
            !this.$root.story.JejuneInstitute &&
            eventItem.stories.JejuneInstitute
          )
            continue;
          if (
            !this.$root.story.LatitudeSociety &&
            eventItem.stories.LatitudeSociety
          )
            continue;

          if (!this.$root.story.Crystore && eventItem.stories.Crystore)
            continue;

          if (this.$root.live) {
            eventItem.description = Marked(eventItem.description)
          }

          events.push(eventItem);
        }

        if (events.length > 0) {
          day.event.length = 0; // Clear events in day
          day.event = events; // Set day.event to events

          days.push(day);
        }
      }

      if (days.length > 0) {
        days.sort((a, b) => {
          if (isBefore(new Date(b.date), new Date(a.date))) return -1;
          return 1;
        });

        month.days = []; // Clear days in month
        month.days = days; // Set month.days to days

        this.months.push(month);
      }
    },
    createLink: id => {
      return process.env.NODE_ENV === "production"
        ? `https://huskydog9988.github.io/Nonchalance/?event=${id}`
        : `localhost:8080?event=${id}`;
    },
    stories: story => {
      const stories = [];
      for (const item of Object.keys(story)) {
        if (
          item === "_id" ||
          item === "id" ||
          item === "createdAt" ||
          item === "updatedAt"
        )
          continue;
        if (story[item]) {
          // Checks if item is true
          stories.push(item);
        }
        // console.log(item);
      }
      return stories;
    }
  },
  created() {
    this.timelineInit();
    this.eventBus.$on("sort", () => {
      this.timelineInit();
    });
  }
  // ready() {

  // }
};
</script>

<style>
button,
input[type="submit"],
input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

:root {
  --color-link: 255, 0, 0;
}

.lighten {
  filter: brightness(200%);
} 

.text-info {
  color: #5bc0de;
}
.text-warning {
  color: #f89406;
}
.text-danger {
  color: #ee5f5b;
}
.text-success {
  color: #62c462;
}

.timeline {
  margin-top: 20px;
  position: relative;
}

.timeline:before {
  position: absolute;
  content: "";
  width: 4px;
  height: calc(100% + 50px);
  background: rgb(138, 145, 150);
  background: -moz-linear-gradient(
    left,
    rgba(138, 145, 150, 1) 0%,
    rgba(122, 130, 136, 1) 60%,
    rgba(98, 105, 109, 1) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(138, 145, 150, 1) 0%,
    rgba(122, 130, 136, 1) 60%,
    rgba(98, 105, 109, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(138, 145, 150, 1) 0%,
    rgba(122, 130, 136, 1) 60%,
    rgba(98, 105, 109, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8a9196', endColorstr='#62696d',GradientType=1 );
  left: 14px;
  top: 5px;
  border-radius: 4px;
}

.timeline-month {
  position: relative;
  padding: 4px 15px 4px 35px;
  background-color: #444950;
  display: inline-block;
  width: auto;
  border-radius: 40px;
  border: 1px solid #17191b;
  border-right-color: black;
  margin-bottom: 30px;
}

.timeline-month span {
  position: absolute;
  top: -1px;
  left: calc(100% - 10px);
  z-index: -1;
  white-space: nowrap;
  display: inline-block;
  background-color: #111;
  padding: 4px 10px 4px 20px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border: 1px solid black;
  box-sizing: border-box;
}

.timeline-month:before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background: rgb(138, 145, 150);
  background: -moz-linear-gradient(
    top,
    rgba(138, 145, 150, 1) 0%,
    rgba(122, 130, 136, 1) 60%,
    rgba(112, 120, 125, 1) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(138, 145, 150, 1) 0%,
    rgba(122, 130, 136, 1) 60%,
    rgba(112, 120, 125, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(138, 145, 150, 1) 0%,
    rgba(122, 130, 136, 1) 60%,
    rgba(112, 120, 125, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8a9196', endColorstr='#70787d',GradientType=0 );
  border-radius: 100%;
  border: 1px solid #17191b;
  left: 5px;
}

.timeline-section {
  padding-left: 35px;
  display: block;
  position: relative;
  margin-bottom: 30px;
}

.timeline-date {
  margin-bottom: 15px;
  padding: 2px 15px;
  background: linear-gradient(#74cae3, #5bc0de 60%, #4ab9db);
  position: relative;
  display: inline-block;
  border-radius: 20px;
  border: 1px solid #17191b;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}
.timeline-section:before {
  content: "";
  position: absolute;
  width: 30px;
  height: 1px;
  background-color: #444950;
  top: 12px;
  left: 20px;
}

.timeline-section:after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: linear-gradient(
    to bottom,
    rgba(138, 145, 150, 1) 0%,
    rgba(122, 130, 136, 1) 60%,
    rgba(112, 120, 125, 1) 100%
  );
  top: 7px;
  left: 11px;
  border: 1px solid #17191b;
  border-radius: 100%;
}

.timeline-section .col-sm-4 {
  margin-bottom: 15px;
}

.timeline-box {
  position: relative;

  background-color: #444950;
  border-radius: 15px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border: 1px solid #17191b;
  transition: all 0.3s ease;
  overflow: hidden;
}

.box-icon {
  position: absolute;
  right: 5px;
  top: 0px;
}

.box-title {
  padding: 5px 15px;
  border-bottom: 1px solid #17191b;
}

.box-title i {
  margin-right: 5px;
}

.box-content {
  padding: 5px 15px;
  background-color: #17191b;
  min-height: 30px;
}

.box-content strong {
  color: #666;
  font-style: italic;
  margin-right: 0px;
}

.box-item {
  margin-bottom: 5px;
}

.box-footer {
  padding: 5px 15px;
  border-top: 1px solid #17191b;
  background-color: #444950;
  text-align: right;
  font-style: italic;
}
</style>