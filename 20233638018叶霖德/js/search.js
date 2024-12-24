document.getElementById('searchButton').addEventListener('click', function () {
    const searchValue = document.getElementById('searchInput').value.trim().toLowerCase();

    const destinations = {
        '北京': 'beijing.html',
        '上海': 'shanghai.html',
        '杭州': 'hangzhou.html',
        '成都': 'chengdu.html',
        '苏州': 'suzhou.html',
        '深圳': 'shenzhen.html',
        '武汉': 'wuhan.html',
        '佛山': 'foshan.html',
        '九寨沟': 'aba.html',
    };

    if (searchValue in destinations) {
        window.location.href = destinations[searchValue];
    } else {
        alert('抱歉，没有找到相关内容！');
    }
});
