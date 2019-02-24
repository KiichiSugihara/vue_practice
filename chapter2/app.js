var items = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 0
  },
  {
    name: 'ノート',
    price: 400,
    quantity: 0
  },
  {
    name: '消しゴム',
    price: 500,
    quantity: 0
  }
]

  var vm = new Vue({
    el: '#app',
    data: { //dataプロパティを設定 データには、データそのもののみ置く
      items: items
    },
    filters: {//フィルタの定義
      numberWithDelimiter: function (value) {
        // 値がないと0を返し、値があると、数値を文字列に変更して返す
        if (!value) {
          return '0'
        }
        return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
      }
    },
    computed: {
      totalPrice: function () {
        return this.items.reduce(function (sum, item) {
          return sum + (item.price * item.quantity)
        },0)
      },
      totalPriceWithTax: function () {
        return Math.floor(this.totalPrice *1.08)
      }
    },
  });
