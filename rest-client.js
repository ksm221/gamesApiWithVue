const vue = Vue.createApp({
    data() {
        return {
            gamesInModal: { id: null, name: null, price: null },
            usersInModal: { userId: null, userName: null, userPassword: null},
            games: [],
            users: [],

        };
    },
    async created() {
        this.games = await (await fetch('http://localhost:8080/games')).json();
        this.users = await (await fetch('http://localhost:8080/users')).json();
    },
    methods: {
        getGame: async function (id) {
            this.gamesInModal = await (await fetch(`http://localhost:8080/games/${id}`)).json();
            let gameInfoModal = new bootstrap.Modal(document.getElementById('gameInfoModal'), {})
            gameInfoModal.show()
        },
        getUser: async function (userId) {
            this.usersInModal = await (await fetch(`http://localhost:8080/users/${userId}`)).json();
            let userInfoModal = new bootstrap.Modal(document.getElementById('userInfoModal'), {})
            userInfoModal.show()
        },
    }
}).mount('#app');
