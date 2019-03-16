$(function(){
    projectlist()
})
function projectlist() {
    ajax(1)
}

function ajax(page){
    $.ajax({
        type: 'post',
        url: 'http://172.16.9.37:80/pages.php',
        data: { currentpage: page, pagesize: 3 },
        xhrFields: {
            withCredentials: true  //是否允许携带cookie
        },
        crossDomain: true,  //是否跨域请求
        success: function (res) {
            var str = '';
            var rs = JSON.parse(res);
            console.log(rs)
            for (const i of rs) {
                str+=`<li class="dqbox">
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