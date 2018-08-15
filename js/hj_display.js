$(document).ready(function(){
	console.log(111);
    if(getParam("cate_no") == "32"){
    	console.log("cate_no !!!!  32")
        $.ajax({
            method: "GET",
            url: "http://ecudemo101861.cafe24.com/product/list.html?cate_no=33",
            success: function(result){
                console.log($(result).find("ul.prdList.grid4").html());
                var resultLi = $(result).find("ul.prdList.grid4").html();
                $("ul.prdList.grid4").after("<ul class='prdList grid4'>"+resultLi+"</ul>")
            }
        });
    }

    setEventContact();
});

function getParam(key){
        var _parammap = {};
        document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
            function decode(s) {
                return decodeURIComponent(s.split("+").join(" "));
            }

            _parammap[decode(arguments[1])] = decode(arguments[2]);
        });

        return _parammap[key];
};

function setEventContact(){

	$("li.hj_ft_contact").hover(function(){
    	$("div.hj_ft_contact_view").show();
    },function(){
    	$("div.hj_ft_contact_view").hide();
    });
}
