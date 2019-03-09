$(function(){
    //监听hash句柄
    window.onhashchange = hashFuc

    // //初始化加载模块
    hashFuc();
    function hashFuc(){
        switch(location.hash){
            case '#index': $('#main').load('../moulde/index.html');break;
            case '#loan': $('#main').load('../moulde/loan.html');break;
            case '#lend': $('#main').load('../moulde/lend.html');break;
            case '#information': $('#main').load('../moulde/information.html');break;
            case '#security': $('#main').load('../moulde/security.html');break;
            case '#myaccount': $('#main').load('../moulde/myaccount.html');break;
            case '#reg':$('#main').load('../moulde/reg.html');break;
            default: $('#main').load('../moulde/index.html'); break;
        }
    }
})

