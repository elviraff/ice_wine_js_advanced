const goods = [
    { title: 'shirt', price: 150 },
    { title: 'socks', price: 50 },
    { title: 'jacket', price: 350 },
    { title: 'shoes', price: 250 },
];

const RenderGoodsItem = ({ title, price }) =>(
    `
    <div class="goods-item">
        <h3 class="card_header">${title}</h3>
        <p class="card_text">${price}</p>
    </div>
    `
)

const RenderGoodsList = (list) => {
    let goodsList = list.map((item) => RenderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
};

RenderGoodsList(goods);

