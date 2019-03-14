$(function(){
    projectlist()
})
// 项目列表渲染函数
function projectlist() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:80/projectlist.php',
        xhrFields: {
            withCredentials: true  //是否允许携带cookie
        },
        crossDomain: true,  //是否跨域请求
        
        success: function (res) {
            var str = '';
            var data = JSON.parse(res);
            for (const i of data) {
                // console.log(i['id'])
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
                    <li class="mybtn">
                    <button class='btnn'>${i['state']}</button>
                    
                    </li>
                </ul>
            </li>`;
            }

            $('.list>ul').html(str);
        }
    })
}