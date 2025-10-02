export default async function Product(props: {
    params: {
        id: string,
    }
}) {
    const {id} = await props.params;
    return <p>محصول : {id}</p>
}