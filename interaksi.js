$(document).ready(function () {
    $("body").hide().fadeIn(700);

    $(".gallery-img").hover(
        function () {
            $(this).addClass("hover-zoom");
        },
        function () {
            $(this).removeClass("hover-zoom");
        }
    );

    $(".produk-card").hover(
        function () {
            $(this).addClass("shadow-lg");
        },
        function () {
            $(this).removeClass("shadow-lg");
        }
    );

    $(".btn-produk").on("click", function () {

        const namaProduk = $(this).data("produk");

        $(".alert-produk").remove();

        const alertHTML = `
            <div class="alert alert-success alert-produk text-center"
                 style="position:fixed;
                        top:70px;
                        left:0;
                        width:100%;
                        z-index:9999;
                        border-radius:0;">
                Anda memilih: <strong>${namaProduk}</strong> ✨
            </div>
        `;

        $("body").prepend(alertHTML);

        setTimeout(function () {
            $(".alert-produk").fadeOut(500, function () {
                $(this).remove();
            });
        }, 3000);
    });

    $(window).on("scroll", function () {
        const navbar = $(".navbar");
        if ($(this).scrollTop() > 50) {
            navbar.addClass("shadow-lg");
        } else {
            navbar.removeClass("shadow-lg");
        }
    });

});
