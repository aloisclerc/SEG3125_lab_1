var unavailableDates = ["06/29/2020", "07/07/2020", "07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    var vet = $("select option:selected").val()
    if (vet == "Jones") {
        if (date.getDay() === 0 || date.getDay() === 1 || date.getDay() === 3 || date.getDay() === 5 || date.getDay() === 6)
            return [false];
    } else if (vet == "Eleanor") {
        if (date.getDay() === 0 || date.getDay() === 1 || date.getDay() === 5 || date.getDay() === 6)
            return [false];
    } else if (vet == "Rachel") {
        if (date.getDay() === 0 || date.getDay() === 2 || date.getDay() === 4 || date.getDay() === 6)
            return [false];
    } else {
        if (date.getDay() === 0 || date.getDay() === 6)
            return [false];
    }

    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [unavailableDates.indexOf(string) === -1]
}




$("#exampleModal").on('shown.bs.modal', function () {
    $("#appointment").datepicker({
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/27/2021'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }

    );

});
$(window).load(function () {

    $("#lname").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#card").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $('#submit').on('click', function () {
        if (!$('#fname').val() || !$('#lname').val() || !$('#appointment').val() || !$('#appointmentTime').val() || !$('#phone').val() || !$('#card').val() || !$('#cvc').val() || !$('#cmonth').val() || !$('#cyear').val()) {
            alert("A field is empty")
            // $(this).parents('p').addClass('warning');
        } else {
            alert("Appointment Booked :)");
        }
    });

    $('#card').on('blur', function(){
        if(this.value < 1000000000000000){
            alert("Please enter a valid card");
        }
    });

    $('#fname').on('blur', function(){
        if(/\d/.test(this.value)){
            alert("Numbers are invalid for a name");
        }
    });

    $('#lname').on('blur', function(){
        if(/\d/.test(this.value)){
            alert("Numbers are invalid for a name");
        }
    });

    $('#cvv').on('blur', function(){
        console.log(this.value);
        if(this.value < 100){
            alert("Please enter a valid cvv");
        }
    });

    $('#cyear').on('blur', function(){
        if(this.value > 2200 || this.value <= 2020){
            alert("Please enter a valid year");
        }
    });

    $('#cmonth').on('blur', function(){
        if(this.value > 12 || this.value <= 0){
            alert("Please enter a valid month");
        }
    });


    var phones = [{
        "mask": "(###) ###-####"
    }];
    $('#phone').inputmask({
        mask: phones,
        greedy: false,
        definitions: {
            '#': {
                validator: "[0-9]",
                cardinality: 1
            }
        }
    });
    var card = [{
        "mask": "#### #### #### ####"
    }];
    $('#card').inputmask({
        mask: card,
        greedy: false,
        definitions: {
            '#': {
                validator: "[0-9]",
                cardinality: 1
            }
        }
    });
    var cvv = [{
        "mask": "###"
    }];
    $('#cvc').inputmask({
        mask: cvv,
        greedy: false,
        definitions: {
            '#': {
                validator: "[0-9]",
                cardinality: 1
            }
        }
    });

    
});

function openInfo(tabName) {


    const yOffset = -70;
    const element = document.getElementById(tabName);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
    //evt.currentTarget.className += " active";

}