var v = new Vue({
    el: "#app",
    data: {
        name: "Hazzem",
        google: "https://google.com/",
        x: 0,
        y: 0,
        age: 12,
        password: "",
        listOfGroceries: [
            "Milk",
            "Flour",
            "Cheese",
            "Hazelnuts",
            "Almonds",
            "eggs",
        ]
    },
    methods: {
        changeName: function(event) {
            this.name = "Ahmed";
        },
        getName: function() {
            return "Hello, " + this.name;
        },

        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },

        adultOrChild: function() {
            // if (this.age > 18) {
            //     return "Adult";
            // } else {
            //     return "child";
            // }

            return this.age > 18 ? "Adult" : "Child";
        },

        checkPassword: function() {
            return this.password === '12345';
        }
    },
    computed: {
        
    }
});