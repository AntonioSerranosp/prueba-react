import React, {useState, useEffect} from 'react';
import { ProductoCard } from './ProductoCard';


export const Productos = () => {
    const [products, setProductos] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [query, setQuery] = useState('')
    


    const handleSearch = (e)  =>{
        setQuery(e.target.value)
        setPageNumber(1);
    }



    const fecthProducts = async() =>{
        const url = `https://node-red-nxdup.mybluemix.net/productos/${query}/${pageNumber}`;
        const resp  =  await fetch(url);
        const {data} = await resp.json();
        const productos = data.products;
        setProductos(productos);
    }

    useEffect(() => {
        fecthProducts();
    }, [query])
    //, pageNumber
    
    
    
    return (
        <div>
           
            <div className="text-center">
                <img src="./assets/cart.png" className="rounded" alt="..."></img>
            </div>

                     

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">busqueda </span>
                </div>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={handleSearch}/>
            </div>


            <div className="card-columns animate__animated animate__fadeIn">
            
                {
                    products.map( product => (
                        <ProductoCard 
                            key={ product.ID }
                            { ...product }
                        />
                        
                    ))
                } 
         </div>
        </div>
    )
}
