<template>
  <main>
    <div class="billboard">
      <div class="billboard-text">
        <h1 class="header">Your Astrology</h1>
      </div>
    </div>
    <div class="user-info">
      <div class="name">
        <span>My name is: </span>
        <div>Name is {{ username }}</div>
        <input v-model="username">
      </div>
      <div class="dob">
        <input v-model="day" type="number" placeholder="DD">
        <input v-model="month" placeholder="MM">
        <input v-model="year" placeholder="YYYY">
        <input v-model="time" placeholder="time">
        <button @click="getChart">Calculate</button>
      </div>
    </div>
    <footer>
      <NuxtLink to="/about">About</NuxtLink>
    </footer>
  </main>
</template>

<script>
import { mapState } from 'vuex'
const axios = require('axios')
export default {
  name: 'IndexPage',
  data: () => {
    return {
      username: '',
      day: '',
      month: '',
      year: '',
      time: ''
    }
  },
  watch: {
    username () {
      this.$store.commit('setUsername', this.username)
    },
    day (num) {
      if (num.length > 2) {
        this.day = num.slice(0, 2)
      }
    },
    month (num) {
      if (num.length > 2) {
        this.month = num.slice(0, 2)
      }
    },
    year (num) {
      if (num.length > 4) {
        this.year = num.slice(0, 4)
      }
    }
  },
  computed: {
    ...mapState(
      'chart',
      'username',
      'day',
      'month',
      'year',
      'time'
    )
  },
  methods: {
    getCountryPosition: () => {
      const options = {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/geocoding?city=Singapore&country=Singapore',
        headers: { 'X-Api-Key': 'nnrAnJe32pxwZJXUGDAl/w==nXzz82RVbGSbEHhM' }
      }
      axios.request(options).then(function (response) {
        console.log(response.data)
      }).catch(function (error) {
        console.error(error)
      })
    },
    getChart: () => {
      const options = {
        method: 'GET',
        url: 'http://localhost:4000/horoscope?time=1993-08-06T20:50:00Z&latitude=-33.41167&longitude=-70.66647&houseSystem=P'
      }
      axios.request(options).then(function (response) {
        console.log(response.data)
        this.getCountryPosition()
      }).catch(function (error) {
        console.error(error)
      })
    }
  }
}
</script>

<style scoped>
main {
  background-color: rgb(250,244,237);
  height: 100vh;
  text-align: center;
}
.billboard {
  background-image: url("/index/astro-billboard.jpeg");
  height: 75%;
  border-bottom: rgb(160,163,155)
}

.billboard-text {
  margin: auto;
}

.billboard-text .header {
  font-family: Farewell Pro Regular;
  font-size: 56px;
}

.name input, .dob input {
  background-color: transparent;
  border-bottom: 1px solid;
}

.user-info {
  padding: 48px;
}
</style>
