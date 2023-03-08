// eslint-disable-next-line consistent-return
async function getProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=4');
    const data = await response.json();
    const products = data.map((item) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.image,
    }));
    return products;
  } catch (error) {
    console.log(error);
  }
}

export default getProducts;
