'use strict';
// const goods = [
//     { title: 'shirt', price: 150 },
//     { title: 'socks', price: 50 },
//     { title: 'jacket', price: 350 },
//     { title: 'shoes', price: 250 },
// ];
//
// const RenderGoodsItem = ({ title, price }) =>(
//     `
//     <div class="goods-item">
//         <h3 class="card_header">${title}</h3>
//         <p class="card_text">${price}</p>
//     </div>
//     `
// )
//
// const RenderGoodsList = (list) => {
//     let goodsList = list.map((item) => RenderGoodsItem(item));
//     document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
// };
//
// RenderGoodsList(goods);

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
        <h3 class="card_header">${this.title}</h3>
        <p class="card_text">${this.price}</p>
        </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    getSum(){
        return this.goods.reduce((prev, {price}) => prev + price,0)
    }
    fetchGoods() {
        this.goods = [
            { title: 'shirt', price: 150 },
            { title: 'socks', price: 50 },
            { title: 'jacket', price: 350 },
            { title: 'shoes', price: 250 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

class Basket {
    setVision () {}
    render () {}
}

class BasketItem {
    setCount () {}
    deleteItem () {}
    render () {}
}

    const list = new GoodsList();
    list.fetchGoods();
    list.render();

