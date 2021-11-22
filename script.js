const goods = [
    { title: 'shirt', price: 150 },
    { title: 'socks', price: 50 },
    { title: 'jacket', price: 350 },
    { title: 'shoes', price: 250 },
];

const RenderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const RenderGoodsList = (list) => {
    let goodsList = list.map(item => RenderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
};

RenderGoodsList(goods);

