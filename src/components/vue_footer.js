Vue.component('footercomponent', {
    template:  `
    <footer>
        <p>This beautiful page is provided to you by Tartu University students</p>
    </footer>
   `,
    style: `
    footer p {
    text-align: center;
    font-family: "Lucida Calligraphy", serif;
}
    `
});
var vm = new Vue({
    el: '#footer_component'
});