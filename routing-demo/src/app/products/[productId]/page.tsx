export default async function productDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>This is product detail = {productId}</h1>;
}
