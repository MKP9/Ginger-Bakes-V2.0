const app = new Vue({
    el: '#app',
    data:
        {
            isHome: true,
            isContact: false,
            isPrice: false,
            isAbout: false
        },
    methods:
        {
            home: function () {
                if(!this.isHome){
                    this.isHome = true;

                    this.isContact = false;
                    this.isPrice = false;
                    this.isAbout = false;
                }
            },

            price: function () {
                if(!this.isPrice){
                    this.isPrice = true;

                    this.isHome = false;
                    this.isContact = false;
                    this.isAbout = false;
                }
            },

            contact: function () {
                if(!this.isContact){
                    this.isContact = true;

                    this.isHome = false;
                    this.isPrice = false;
                    this.isAbout = false;
                }
            },

            about: function () {
                if(!this.isAbout){
                    this.isAbout = true;

                    this.isHome = false;
                    this.isContact = false;
                    this.isPrice = false;

                }
            }
        }
});