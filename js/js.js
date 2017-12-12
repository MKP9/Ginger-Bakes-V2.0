$("#speechBub").hide();

const app = new Vue({
    el: '#app',
    data:
        {
            isHome: true,
            isContact: false,
            isPrice: false,
            isAbout: false,
            isConfirm: false
        },
    methods:
        {
            home: function () {
                if(!this.isHome){
                    this.isHome = true;

                    this.isContact = false;
                    this.isPrice = false;
                    this.isAbout = false;
                    this.isConfirm = false;
                }
            },

            price: function () {
                if(!this.isPrice){
                    this.isPrice = true;

                    this.isHome = false;
                    this.isContact = false;
                    this.isAbout = false;
                    this.isConfirm = false;
                }
            },

            contact: function () {
                if(!this.isContact){
                    this.isContact = true;

                    this.isHome = false;
                    this.isPrice = false;
                    this.isAbout = false;
                    this.isConfirm = false;
                }
            },

            confirm: function () {
                if(!this.isConfirm){
                    this.isConfirm = true;

                    this.isHome = false;
                    this.isContact = false;
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
                    this.isConfirm = false;
                }
            },

            check: function () {
                var fname = $('#fname');
                var lname = $('#lname');
                var email = $('#email');
                var tel = $('#tel');
                var event = $('#event');
                var people = $('#people');

                var errors = 0;
                $('.inputError').html('');

                var inputs = [fname, lname, email, tel, event, people];
                var errorMsg = [
                    "Enter a valid first name",
                    "Enter a valid last name",
                    "Enter a valid email",
                    "Enter a valid phone number",
                    "Enter a valid event",
                    "Enter a valid person count"
                ];

                for(var i =0;i<inputs.length;i++) {
                    if (inputs[i].val() === '') {
                        errors++;
                        inputs[i].before('<span class="inputError">' + errorMsg[i] + '</span>');
                    }
                }

                if(errors === 0)
                {
                    app.confirm();
                }
            }
        }
});


$("#leftImage").mouseenter(function(){
    $("#speechBub").show();
});

$("#leftImage").mouseleave(function(){
    $("#speechBub").hide();
});