import React from "react";

const cardItems = [
    {
      title: 'Women Clothing',
      quantity: '71 items',
      image: '/static/images/sample.png',
    },
    {
        title: 'Mens Clothing',
        quantity: '71 items',
        image: '/static/images/sample.png',
      },
      {
        title: 'Mens Clothing',
        quantity: '71 items',
        image: '/static/images/sample.png',
      },
      {
        title: 'Back to school sale',
        quantity: '71 items',
        image: '/static/images/sample.png',
      },
      
   
  ];

function ProductOptions (){
    return(
        <>
        {cardItems?.map((item, index)=>(
            <div className="product-options-card" key={index} style={{backgroundImage: `url(${item.image})`}}>
            <div className="text-block">
                <h3>{item.title}</h3>
                <p>{item.quantity}</p>
                <p>shop Now</p>
                </div>
            </div>
        ))}
        </>
       
    )
}

export default ProductOptions;