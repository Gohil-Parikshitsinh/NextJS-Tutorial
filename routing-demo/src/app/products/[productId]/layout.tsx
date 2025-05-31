export default function ProductDetailsLaout({
    children,
}:{
    children: React.ReactNode;
}) {
    return <>
        {children}
        <h2>Featured Products</h2>
    </>
}