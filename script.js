// Wait till the DOM is ready.
$(function () {
    var roles = ["Student", "VITian", "Tech-enthusiast"];
    var count = 0;
    setInterval(() => {
        $(".background .inside #type span").fadeOut("fast", function () {
            $(this).text(roles[count++ % roles.length]);
            $(this).fadeIn("fast");
        });
    }, 1000);    
});