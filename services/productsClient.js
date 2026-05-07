export const productsClient = {
  async getProducts() {
    const res = await fetch('/api/products', { cache: 'no-store' });
    return res.json();
  },
  async createProduct(data) {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  }
};
