Vue.component('likebuttoncomponent', {
    template: `
    <img src="res/png/heart_button.png" alt="Like" @click="incrementLikes">
    <span>{{ likes }}</span>
    `,
    data: {
        likes: 0
    },
    methods: {
        incrementLikes() {
            this.likes++;
        }
    },
    style: `
    img {
         cursor: pointer;
         border: none;
        }
    `
})