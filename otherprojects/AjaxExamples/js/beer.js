$(document).ready(function () {


        $.getJSON("jsonDatabase/beer.json", function (data) {

                console.dir(data);
                var html = "";


                $.each(data, function (index, item) {
                        html += '<div class="col-md-4">' +
                            '<div class = "name" >' + item.name + '</div>' +
                            '<div class = "brand" >' + item.brand + '</div>' +
                            '<div class = "cans" >' + item.cans + '</div>' +
                            '<img class="beerimage" src="' + item.image + '"/>' +
                            // '<div class="commentsContainer">';

                            '<div class="panel panel-default">' + //added
                            '<div class="panel-heading">Check what people have said about the brands </div>'; //added
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

                $("#beerdata").append(html);

            }) //getJSON

    }) //FUNCTIONS

