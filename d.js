 <script>
        //<![CDATA[
        $(function() {
          (function(e) {
            var fbtl = e(".fbt-newer-link");
            var fbtr = e(".fbt-older-link");
            e.get(fbtl.attr("href"), function(fbtr) {
              fbtl.html('<strong><i class="fa fa-angle-left"></i> ' + PreviousPost + '</strong> <div>' + e(fbtr).find(".post h1.post-title").text() + "</div>")
            }, "html");
            e.get(fbtr.attr("href"), function(fbtl) {
              fbtr.html('<strong>' + NextPost + ' <i class="fa fa-angle-right"></i></strong> <div>' + e(fbtl).find(".post h1.post-title").text() + "</div>")
            }, "html")
          })(jQuery);
        });
        //]]>
      </script>
