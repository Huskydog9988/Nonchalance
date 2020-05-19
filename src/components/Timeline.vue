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
        <div class="timeline-date">{{Moment(day.date).format('dddd[,] Do')}}</div>
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
                  <EventLink v-bind:eventLink="createLink(event.id)" />
                  <v-btn
                    tile
                    x-small
                    v-for="link of Object.keys(event.outSideLinks)"
                    :key="link"
                    class="btn btn-xs btn-default pull-right white--text"
                    target="_blank"
                    :href="event.outSideLinks[link]"
                  >{{link}}</v-btn>
                </div>
                <!-- If no outside links -->
                <div v-else>
                  <EventLink v-bind:eventLink="createLink(event.id)" />
                </div>
                <div class="box-item" v-html="Marked(event.description)"></div>
              </div>
              <div class="box-footer"></div>
            </div>
          </div>
          <!-- Day Content Item End -->
        </div>
        <!-- Day Content End -->
      </div>
      <!-- Day End -->
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import Marked from "marked";
import Moment from "moment";

import EventLink from "./EventLink";

export default {
  name: "Timeline",
  props: ["story"],
  components: {
    EventLink
  },
  data: () => {
    return {
      months: [],
      Marked,
      Moment
    };
  },
  methods: {
    // https://alligator.io/vuejs/implementing-infinite-scroll/
    getInitialDays: months => {
      Axios.get(
        // "http://192.168.1.155:5000/months?_sort=date:DESC"
        "/months.json"
      ).then(response => {
        for (const month of response.data) {
          month.days.sort((a, b) => Moment(b.date) - Moment(a.date));
          /*month.days.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            //return new Date(b.date) - new Date(a.date);
            const dateA = new Date(a.date).getTime(); 
            const dateB = new Date(b.date).getTime(); 
            return dateA > dateB ? -1 : 1; 
          });*/
          months.push(month);
        }
      });
    },
    scroll(months) {
      window.onscroll = () => {
        const bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          Axios.get(
            `http://192.168.1.155:5000/months?_limit=5&_sort=date:DESC&_start=${months.lenght}`
          ).then(response => {
            for (const month of response.data) {
              months.push(month);
            }
          });
        }
      };
    },
    formatDay: dateString => {
      const date = new Date(dateString);
      const dtf = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      const [
        { value: month },
        ,
        { value: day },
        ,
        { value: year }
      ] = dtf.formatToParts(date);
      console.log(dateString);
      console.log(`${month} ${day}, ${year}`);
      return `${month} ${day}, ${year}`;
    },
    createLink: id => {
      return `localhost:8080#${id}`;
    }
  },
  beforeMount() {
    this.getInitialDays(this.months);
    // this.scroll(this.months);
  }
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

.alert {
  padding: 20px;
  background-color: #f89406;
  color: white;
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