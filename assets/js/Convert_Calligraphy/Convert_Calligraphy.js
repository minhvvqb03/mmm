$(document).ready(function() {

    $("#txtCalligraphy").keyup(function() {
        var valueTxt = $(this).val();
        $("#outputCalligraphy").html(valueTxt);
    });

    $("#typeCalligraphy").on("change", function() {
        var typeCalligraphy = $(this).val();
        if (typeCalligraphy != "") {
            $("#outputCalligraphy").removeAttr('class')
            $("#outputCalligraphy").attr('class', typeCalligraphy);
            
        }
    });
});