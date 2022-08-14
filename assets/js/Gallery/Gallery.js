$(document).ready(function() {
    $(".list-element").slice(0, 3).show()
    $("#loadmore").on("click", function() {
        $(".list-element:hidden").slice(0, 3).slideDown()
        if ($(".list-element:hidden").length == 0) {
            $("#loadmore").fadeOut('slow')
        }
    });
});