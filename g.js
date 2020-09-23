      <script>
        //<![CDATA[
        $(function($){"use strict";$('.item .post-body img[title*="[headerImage]"]').parent().addClass("FeaturedImage").wrap('<div/>');$(".FeaturedImage").parent().addClass("separator fbt-featured-image").prependTo(".post-header");$(".FeaturedImage img").removeAttr('title');$(".item .post-outer").each(function(){$(".fbt-featured-image a img").removeAttr('height').removeAttr('width').removeAttr('data-original-width').removeAttr('data-original-height').attr('src',function(i,src){return src.replace('s200','w640')}).attr('src',function(i,src){return src.replace('s320','w640')}).attr('src',function(i,src){return src.replace('s400','w640')}).attr('src',function(i,src){return src.replace('s640','w640')}).attr('src',function(i,src){return src.replace('s1600','w640')});$(this).find(".fbt-featured-image").each(function(){var $containr=$(this),imgUrl=$containr.find("img").prop("src");if(imgUrl){$containr.css("backgroundImage",'url('+imgUrl+')').addClass("fbt-resize");}
$(this).find("img").css('opacity','0');});});});
        //]]>
      </script>
