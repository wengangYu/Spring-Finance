$(function () {
    $('#borrowing-type').on('change', btChange)
    $('.borrow-money-from').on('change',changeInput)
})

function btChange() {
    if ($('#borrowing-type').val() == '科信贷') {
        $('#max-money').html('100,000')
        getUserEdu()
    } else if ($('#borrowing-type').val() == '科卡贷') {
        $('#max-money').html('150,000')
    } else if ($('#borrowing-type').val() == '经租贷') {
        $('#max-money').html('190,000')
    } else if ($('#borrowing-type').val() == '微企贷') {
        $('#max-money').html('200,000')
    }
    //获取用户学历
    function getUserEdu() {
        $.ajax({
            type: 'get',
            url: 'http://localhost:80/borrow-getedu.php',
            xhrFields: {
                withCredentials: true //是否允许携带cookie
            },
            crossDomain: true, //是否跨域请求
            success: function (res) {

                let data = JSON.parse(res)

                switch (data.education) {
                    case '博士':
                        $('#edu-money').html('￥100,000');
                        break;
                    case '硕士研究生':
                        $('#edu-money').html('￥90,000');
                        break;
                    case '本科':
                        $('#edu-money').html('￥80,000');
                        break;
                    case '专科':
                        $('#edu-money').html('￥70,000');
                        break;
                    case '其他':
                        $('#edu-money').html('￥50,000');
                        break;
                        default:$('#edu-money').html('￥50,000');break;
                }
            }
        })
    }

}
// 利息计算
function changeInput(){
    // 动态计算
    // 借款金额
    var l_sum = $('input[name=l_sum]').val()
    // 利息
    var Interest = $('input[name=Interest]').val()
    // 期限
    var l_term_from = $('#l_term_from').val()
    if(l_sum != '' && Interest != '' && l_term_from != ''){
        var m = Number(l_sum) * Number(Interest) / 100 / 12 * Number(l_term_from);
        // 利息
        $('#borrow-money1').html(m.toFixed(2))

        // 管理费
        $('#borrow-money1').html((l_sum * 0.02).toFixed(2))
    }
}