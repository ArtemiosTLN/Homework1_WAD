Vue.component('headercomponent', {
    template: `
<header class="header">
    <ul class="nav">
        <li><a href="index2.html">Home</a></li>
        <li><a href="add_post.html">Add Post</a></li>
        <li><a href="signup.html">Sign up</a> </li>
    </ul>
    <div class="dropdown" dropdown-button>
        <a class="logo" href="" onclick="return false"><img src="res/png/My_picture.png" width="100" height="64.51" alt="My picture"></a>
            <div class="dropdown-content">
                <p>John Doe</p>
                <p>john.doe@ut.ee</p>
                <p>Logout</p>
            </div>
        </div>
</header>`,
    styles: `
.header ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
a {
    color: #34495e;
    text-decoration: none;
}
.logo {
    margin: 7px;
    max-width: 100%;
    height: 100%;
}
.header {
    position: fixed;
    width: 100%;
    padding-top: .5em;
    padding-bottom: .1em;
    border: 1px solid #646174;
    background-color: #a2ccea;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
}

.nav {
    margin-top: 5px;
}

.nav a {
    padding: 10px 15px;
    text-transform: uppercase;
    text-align: center;
    display: block;
    color: #34495e;
    font-size: .99em;
}

.nav a:hover {
    background-color: #7ebeb6;
    color: #092747;
}

@media (min-width: 5px) {
    .header,
    .nav {
        display: flex;
    }
    .header {
        flex-direction: row;
        justify-content: space-between;
    }
}
  `
});

var vm = new Vue({
    el: '#header_component'
});