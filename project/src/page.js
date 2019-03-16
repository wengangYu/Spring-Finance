// 分页js
//默认为1 全局变量
var currentpage = 1; //当前页面
var size = 3;   //每页显示
var pages;      //总条数
var allpages; //页数

$(function () {
    // 获取总数

    allpage()


})

// 获取size

function getsize() {
    size = $('.form-control option:selected').val();
    size = parseInt(size)
    allpages = pages / size;
    allpages = Math.ceil(allpages); //3
    var str = ``;
    for (var i = 1; i <= allpages; i++) {
        str += `<li class='btn btn-default'>${i}</li>`;
        $('.pages').html(str);
    }
    $(`.pages>li`).css('backgroundColor', '#fff');
    $(`.pages>li:nth-of-type(${currentpage})`).css('backgroundColor', '#ccc');
    $('.pages>li').on('click', al);
    console.log('总页数：' + pages, '当前页' + currentpage, '每页多：' + size)
    $.ajax({
        type: 'post',
        url: 'http://172.16.9.37:80/pages.php',
        data: { currentpage: currentpage, pagesize: size },
        xhrFields: {
            withCredentials: true  //是否允许携带cookie
        },
        crossDomain: true,  //是否跨域请求
        success: function (res) {
            var str = '';
            var rs = JSON.parse(res);
            console.log(rs)
            for (const i of rs) {
                str += `<li class="dqbox">
            <p class="tyb">
                <span class="xin">新</span>${i['type']}${i['number']}

            </p>
            <ul class="newcont">
                <li>
                    <span class="bf">${i['annual_interest_rate']}</span>
                    <span>%</span>
                    <p class="shouyis">借款约定年化利率</p>
                </li>
                <li>
                    <span class="mr">${i['term']}</span>
                    <span>个月</span>
                    <p class="shouyis">项目期限</p>
                </li>
                <li>
                    <span class="mr">${i['money']}</span>
                    <span>元</span>
                    <p class="shouyis">项目金额</p>
                </li>
                <li>
                    <span class="mr">${i['repayment_method']}</span>
                    <p class="shouyis">还款方式</p>
                </li>
                <li class=" btn btn-success">
                ${i['state']}
                </li>
            </ul>
        </li>`;


                $('.dqleft>ul').html(str);


                // 
            }

        }


    })
}

// 上一页
function befor() {
    $('.befor').on('click', function () {
        if (currentpage == 1) {
            alert('已经是第一页了')
            return
        }

        --currentpage;
        getsize()
        console.log(currentpage);
        $(`.pages>li`).css('backgroundColor', '#fff')
        $(`.pages>li:nth-of-type(${currentpage})`).css('backgroundColor', '#ccc');


    })
}

// 下一页
function affter(pages, size) {
    $('.affter').on('click', function () {

        if (currentpage == allpages) {
            alert('已经是最后一页了')
            return
        }
        ++currentpage;
        getsize()
        // $(`.pages>li`).css('backgroundColor', '#fff')
        // $(`.pages>li:nth-of-type(${currentpage})`).css('backgroundColor', '#ccc');
    })
    // 当前页面的样式
}

// 获取总条数
function allpage() {
    //发送ajax请求到projec查询数据总数
    $.ajax({
        type: 'get',
        url: 'http://172.16.9.37:80/page.php',
        xhrFields: {
            withCredentials: true  //是否允许携带cookie
        },
        crossDomain: true,  //是否跨域请求
        success: function (res) {
            res = JSON.parse(res)
            pages = parseInt(res['count(*)'])
            main(pages)
            getsize()
        }
    })
}


// 主函数 
function main(pages) {
    $('.form-control').on('change', getsize);
    $('#all').text('总条数: ' + pages)
    befor();
    affter(pages, size);
}

//点击页码跳转
function al() {
    var p = this.innerHTML;
    // console.log()


    currentpage = parseInt(p)
    console.log(currentpage)
    $(`.pages>li`).css('backgroundColor', '#fff')
    $(`.pages>li:nth-of-type(${currentpage})`).css('backgroundColor', '#ccc');
    $.ajax({
        type: 'post',
        url: 'http://172.16.9.37:80/pages.php',
        data: { currentpage: currentpage, pagesize: size },
        xhrFields: {
            withCredentials: true  //是否允许携带cookie
        },
        crossDomain: true,  //是否跨域请求
        success: function (res) {
            var str = '';
            var rs = JSON.parse(res);
            console.log(rs)
            for (const i of rs) {
                str += `<li class="dqbox">
            <p class="tyb">
                <span class="xin">新</span>${i['type']}${i['number']}

            </p>
            <ul class="newcont">
                <li>
                    <span class="bf">${i['annual_interest_rate']}</span>
                    <span>%</span>
                    <p class="shouyis">借款约定年化利率</p>
                </li>
                <li>
                    <span class="mr">${i['term']}</span>
                    <span>个月</span>
                    <p class="shouyis">项目期限</p>
                </li>
                <li>
                    <span class="mr">${i['money']}</span>
                    <span>元</span>
                    <p class="shouyis">项目金额</p>
                </li>
                <li>
                    <span class="mr">${i['repayment_method']}</span>
                    <p class="shouyis">还款方式</p>
                </li>
                <li class=" btn btn-success">
                ${i['state']}
                </li>
            </ul>
        </li>`;

                $('.dqleft>ul').html(str);


                // 
            }

        }


    })
}