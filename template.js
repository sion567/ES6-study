$("#result").append(
    "There are <b>" + basket.count + "</b> " +
    "items in your basket, " +
    "<em>" + basket.onSale +
    "</em> are on sale!"
);


$("#result").append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);