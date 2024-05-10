import styles from './Products.module.css'

export function Products({products}){
return <div className={styles.container}>

    <h1>Products component</h1>

    <div>
        <div className={styles.grid}>
            <h3>Id</h3>
            <h3>Name</h3>
            <h3>Type</h3>
        </div>
        {products.map((product, index) => (
        <div key={index} className={styles.grid}>
            <span>{product.id}</span>
            <span>{product.name}</span>
            <span>{product.type}</span>
        </div>
        ))}
    </div>
    </div>
}