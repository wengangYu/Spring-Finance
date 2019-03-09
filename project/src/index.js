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
            case '#myaccount/Account-information': $('#right-box').load('../moulde/personal/Account-information.html');break;
            case '#myaccount/jiekuan': $('#right-box').load('../moulde/personal/jiekuan.html');break;
            case '#myaccount/liushui': $('#right-box').load('../moulde/personal/liushui.html');break;
            case '#myaccount/chongzhi': $('#right-box').load('../moulde/personal/chongzhi.html');break;
            case '#myaccount/renzhen': $('#right-box').load('../moulde/personal/renzhen.html');break;
            case '#myaccount/personal': $('#right-box').load('../moulde/personal/personal.html');break;
            case '#huankuan': $('#right-box').load('../moulde/personal/huankuan.html');break;
            case '#guanli': $('#right-box').load('../moulde/personal/guanli.html');break;
            case '#dengji': $('#right-box').load('../moulde/personal/dengji.html');break;
            case '#jilu': $('#right-box').load('../moulde/personal/jilu.html');break;
            case '#shoukuan': $('#right-box').load('../moulde/personal/shoukuan.html');break;
            default: $('#main').load('../moulde/index.html'); break;
            // default: $('#right-box').load('../moulde/personal/Account-information.html'); break;
        }
    }
})

