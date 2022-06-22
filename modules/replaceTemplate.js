// module.exports = (temp, product) => {
//   output = temp.replace(/{%SLUG%}/g, product.slug);
//   output = output.replace(/{%PRODUCTNAME%}/g, product.productName);
//   output = output.replace(/{%IMAGE%}/g, product.image);
//   output = output.replace(/{%PRICE%}/g, product.price);
//   output = output.replace(/{%FROM%}/g, product.from);
//   output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
//   output = output.replace(/{%QUANTITY%}/g, product.quantity);
//   output = output.replace(/{%DESCRIPTION%}/g, product.description);
//   output = output.replace(/{%ID%}/g, product.id);

//   if (!product.organic)
//     output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
//   return output;
// };

module.exports = (
  temp,
  {
    slug,
    productName,
    image,
    price,
    from,
    nutrients,
    quantity,
    description,
    id,
    organic,
  }
) => {
  let output = temp
    .replace(/{%SLUG%}/g, slug)
    .replace(/{%PRODUCTNAME%}/g, productName)
    .replace(/{%IMAGE%}/g, image)
    .replace(/{%PRICE%}/g, price)
    .replace(/{%FROM%}/g, from)
    .replace(/{%NUTRIENTS%}/g, nutrients)
    .replace(/{%QUANTITY%}/g, quantity)
    .replace(/{%DESCRIPTION%}/g, description)
    .replace(/{%ID%}/g, id);

  if (!organic) output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return output;
};
