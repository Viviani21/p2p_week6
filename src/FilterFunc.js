import React,{ useState} from 'react';
import StoreProducts from './StoreProducts.json';


const FilterFunc = () => {
    const [items,setItems] = useState(StoreProducts);
    console.log(items);
    const filterItems= (priceItem)=>{
        const updateItems = StoreProducts.filter((curItem)=>{
            return curItem.price === priceItem
        });
        setItems(updateItems);

    }
  return (
    <div className='container mt-5'>
        <h1>All Products</h1>
        <button type="button" class="btn btn-primary me-3" onClick={()=>setItems(StoreProducts)}>All Products</button>
        <button type="button" class="btn btn-secondary me-3 " onClick={()=>filterItems("men'cloth")}>Secondary</button>
        <button type="button" class="btn btn-success me-3" onClick={()=>filterItems("jewelery")}>Success</button>
        <button type="button" class="btn btn-danger me-3" onClick={()=>filterItems("women's cloth")}>Danger</button>
        <button type="button" class="btn btn-warning me-3"onClick={()=>filterItems("")}>Warning</button>
        <button type="button" class="btn btn-info me-3" onClick={()=>filterItems("")}>Info</button>
        <hr></hr>
        <div className='row'>
            {items.map((val)=>(
                <div key={val.id} className='col-md-3'>
                    <div class="card" >
                         <img src={val.image} class="card-img-top img-fluid" alt="..."/>
                         <div class="card-body">
                         <h5><span class="badge bg-secondary">{val.price} €</span></h5>
                            <h5 class="card-title">{val.name.substring(0,15)}</h5>
                            <p class="card-text">{val.description}</p>
                           
                         </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default FilterFunc