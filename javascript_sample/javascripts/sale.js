const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];
const products = [
  {
    id: 1,
    name: "オリジナルブレンド200g",
    price: 500
  },
  {
    id: 2,
    name: "オリジナルブレンド500g",
    price: 900
  },
  {
    id: 3,
    name: "スペシャルブレンド200g",
    price: 700
  },
  {
    id: 4,
    name: "スペシャルブレンド500g",
    price: 1200
  },
]

function add() {
  const productId = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  // productsの中からproductIdに一致したものを取得
  const product = products.find(product => product.id === productId);

  const purchase = {
    productName: product.name,
    price: product.price,
    quantity: number
  };
  purchases.push(purchase)

  window.alert(`${display()}\n小計${subtotal()}円`);
}

function display() {
  let string = "";
  for (let i = 0; i < purchases.length; i++) {
    string += `${purchases[i].productName}: ${purchases[i].price}円 × ${purchases[i].quantity}点\n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
  for (let i = 0; i < purchases.length; i++) {
    sum += purchases[i].price * purchases[i].quantity;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`${display()}\n小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`)
  purchases = [];
  priceElement.value = "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  // 引数はsum:購入金額、戻り値は送料（数値）
  if (sum == 0 || sum >= 3000) {
    return 0
  } else if (sum < 2000) {
    return 500
  } else {
    return 250
  }
}
