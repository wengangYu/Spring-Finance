$(function () {
    //    判断location的search里面是有我们传入的fail 利用indexOf查询 返回的是一个索引
    if (location.search.indexOf('fail') != -1) {
        //    失败
        $('#fail-str').css("display", "block").css("marginLeft","20px")

    }
})
