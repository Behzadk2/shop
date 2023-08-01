

function Products(props){

    return <>
     <div className="col-3">
        <h1>{props.propdata.productName}</h1>
        <img src={props.propdata.productImage} />
        <h3>Price : {props.propdata.price}$</h3>
        <buuton className="btn btn-info btn-sml" >+</buuton>
        <span className="mx-1">0</span>
        <buuton className="btn btn-info btn-sml" >-</buuton>
     </div>
     </>
    
}

export default Products;