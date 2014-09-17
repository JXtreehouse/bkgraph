var _nodes = ["无锡市", "2010年", "无锡", "科技", "机械", "咨询", "有限公司", "盐城", "华硕", "组合", "网站", "老年人", "扬州市", "谈判", "亨特", "考试", "麦库", "号码", "瑞达", "现代", "机械设备", "长安镇", "论证", "学校", "锡山区", "教师", "提花", "重庆"];
var _links = ["无锡市,2010年", "无锡,无锡市", "科技,无锡市", "无锡市,无锡", "无锡市,机械", "无锡市,咨询", "有限公司,无锡市", "盐城,无锡市", "华硕,无锡市", "组合,无锡市", "网站,无锡市", "无锡市,老年人", "无锡市,扬州市", "谈判,无锡市", "亨特,无锡市", "考试,无锡市", "麦库,无锡市", "无锡市,有限公司", "无锡市,号码", "无锡市,瑞达", "无锡市,现代", "机械设备,无锡市", "长安镇,无锡市", "论证,无锡市", "无锡市,学校", "无锡市,锡山区", "无锡市,教师", "无锡市,提花", "无锡市,重庆", "科技,2010年", "考试,2010年", "无锡,有限公司", "无锡,机械设备", "机械,考试", "咨询,科技", "咨询,考试", "有限公司,无锡", "机械设备,有限公司", "盐城,网站", "网站,考试", "现代,网站", "重庆,学校"];

var fs = require('fs');

var nodes = _nodes.map(function (n) {
    return {
        name: n,
        radius: n === '无锡市' ? 50 : 20
    }
});

var links = _links.map(function (l) {
    l = l.split(',');
    return {
        source: l[0],
        target: l[1],
        weight: 1
    }
});

fs.writeFileSync('无锡.json', JSON.stringify({
    nodes: nodes,
    links: links
}, null, 2), 'utf-8');