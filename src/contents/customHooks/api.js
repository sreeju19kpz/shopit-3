export async function getProd(id) {
  const res = await fetch(`/api/products/${id}`);
  const data = await res.json();
  if (!res.ok) {
    throw {
      error: "Problem getting weather info",
    };
  }
  return data.products;
}
