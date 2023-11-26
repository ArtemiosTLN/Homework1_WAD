import Vue from 'vue';
import {store} from "../store/store";

Vue.component('posts', {
    template: `
    <div class="post" v-for="post in posts" :key="post.id">
    <div class="info">
    <img src="res/png/My_picture.png" class="avatar">
    <div class="date">{{ post.date }}</div>
    <div>{{ post.author }}</div>
</div>
<div class="content">{{ post.content }}</div>
</div>
    `,
    computed: {
        posts() {
          return this.$store.getters.getPosts
        },
    },
});

var vm = new Vue({
    el: '#app',
    store
});