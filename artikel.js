$(document).ready(function () {
    if (window.location.href.indexOf("query") > -1) {
        let jdl = location.href.substring(location.href.search("\\?")).split("=")[1];
        let ja = jdl.replace(/-/g, "").toLowerCase();

        $.getJSON("data.json", function (data) {
            var juduld = data[ja].judul;
            var isid = data[ja].isi;
            var fotod = data[ja].foto;

            $(".judul-baca").text(juduld);
            $(".isi-artikel").html(isid);
            $(".img-baca img").attr("src", "img/" + fotod);
        });

        $(".isi-konten").addClass("hide");
        $(".baca-artikel").css("display", "flex");
        $(".kanan i").css("display", "flex");
    }

    $(".kanan i").click(function (){
        window.location.href = "artikel.html"
    })

    let kertas = $(".kertas-artikel-list");
    let query = "?query="

    for (let i = 0; i < kertas.length; i++) {
        const k = kertas[i];

        $(k).click(function (e) {
            let judul = $(k).find(".judul-artikel-list").text();
            let ja = judul.replace(/ /g, "-")
            $(k).find("a").attr("href", query + ja);
        });
    }

    let kal = $(".kertas-artikel-list");

    $(".kategori-artikel p").click(function () {
        $(".kategori-artikel p").removeClass('on');
        $(this).addClass('on');

        let pval = $(this).text();

        for (let i = 0; i < kal.length; i++) {
            const lak = kal[i];

            let lakval = $(lak).find(".category-article").text().toLowerCase();
            
            if (pval != "semua") {
                if (!lakval.includes(pval)) {
                    kal.eq(i).addClass("hide");
                } else {
                    kal.eq(i).removeClass("hide");
                }
            } else {
                kal.eq(i).removeClass("hide");
            }
        }
        
    });

    $(".search-artikel").on("keyup", function (event) {
        let val = $(".search-artikel").val().toLowerCase();

        for (let i = 0; i < kal.length; i++) {
            const akl = kal[i];
            
            let jdl = $(akl).find(".judul-artikel-list").text().toLowerCase();
            let href = jdl.replace(/ /g, "-");

            if(val!=""){
                if(jdl.includes(val)){
                    if(event.key === "Enter"){
                        $(".search-engine").addClass("result-found");
                        $(".result-search").removeClass("hide");
                        $(".result-search").append("<a href='artikel.html?query=" + href + "'><div class='card-result'><h2 class='judul-hasil'>" + $(akl).find(".judul-artikel-list").text() + "</h2><p class='category-hasil'>" + $(akl).find(".category-article").text() + "</p></div></a>");
                    }
                }
            } else {
                $(".result-search").addClass("hide");
                $(".result-search").empty();
                $(".search-engine").removeClass("result-found");
            }
        }
    });
});