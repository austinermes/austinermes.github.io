$(document).ready(function () {


        $.getJSON("jsonDatabase/icecream.json", function (data) {

                console.dir(data);
                var html = "";


                $.each(data, function (index, item) {
                        html += '<div class="col-md-4">' +
                            '<div class = "name" >' + item.name + '</div>' +
                            '<div class = "flavour" >' + item.flavour + '</div>' +
                            '<div class = "scoops" >' + item.scoops + '</div>' +
                            '<img class="icecreamimage" src="' + item.image + '"/>' +
                            // '<div class="commentsContainer">';

                            '<div class="panel panel-default">' + //added
                            '<div class="panel-heading">Ice Cream Reviews! </div>'; //added
                        $.each(item.comments, function (ind, i) {
                                html += '<div class="panel-body">' + //added
                                    '<div class ="buyerName">' + i.username + '</div>' +
                                    '<div class ="buyerComment">' + i.comment + '</div>' +
                                    '<div class="renderStars">';

                                for (var j = 1; j <= 5; j++) {

                                    if (j <= i.stars) {
                                        html += '<img src="images/fullstar.png"/>';
                                    } else {
                                        html += '<img src="images/emptystar.png"/>';
                                    }

                                } //var loop

                                html +=
                                    '</div>' + //end stars
                                    '</div>'; //panel body

                            }) //each comment 

                        html += '</div>' + // comments container
                            '</div>' + //panel
                            '</div>'; //col-md-4

                    }) //EACH

                $("#icecreamdata").append(html);

            }) //getJSON

    }) //FUNCTIONS

/*
<div class ="col-md-4 icecream">
<div class ="icecreamName">
<div class ="icecreamType">
<div class ="icecream">
<img src"#"/>
<div class ="col-md-4">
<div class ="buyerName">
<div class ="buyerType">
<div class ="icecreamStars">

</div>

*/