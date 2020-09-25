import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img className="home_image"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/885b1ad3-709e-45d6-9dfa-360274fd1510/d73mttf-81eeb419-12dd-4334-9a9e-0d2428a23e23.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODg1YjFhZDMtNzA5ZS00NWQ2LTlkZmEtMzYwMjc0ZmQxNTEwXC9kNzNtdHRmLTgxZWViNDE5LTEyZGQtNDMzNC05YTllLTBkMjQyOGEyM2UyMy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K0pCnxT46dlU2WGSetsOe2dzI9zkNOxPqsPddnlU4s4"
            alt=""
            />
            {/* Product id, title,price,rating,image */}
            <div className="home_row">
                <Product
                    id="12435"
                    title="my title"
                    price={11.54}
                    rating={5}
                    image="https://www.att.com/catalog/en/skus/images/lg-k40-platinum%20gray-450x350.png"
                />
                 <Product
                    id="12435"
                    title="my title"
                    price={11.54}
                    rating={5}
                    image="https://www.att.com/catalog/en/skus/images/lg-k40-platinum%20gray-450x350.png"
                />
            </div>
            <div className="home_row">
            <Product
                    id="12435"
                    title="my title"
                    price={11.54}
                    rating={5}
                    image="https://www.att.com/catalog/en/skus/images/lg-k40-platinum%20gray-450x350.png"
                />
                 <Product
                    id="12435"
                    title="my title"
                    price={11.54}
                    rating={5}
                    image="https://www.att.com/catalog/en/skus/images/lg-k40-platinum%20gray-450x350.png"
                />
                <Product
                    id="12435"
                    title="my title"
                    price={11.54}
                    rating={5}
                    image="https://www.att.com/catalog/en/skus/images/lg-k40-platinum%20gray-450x350.png"
                />
            </div>
            <div className="home_row">
            <Product
                    id="12435"
                    title="my title"
                    price={11.54}
                    rating={5}
                    image="https://www.att.com/catalog/en/skus/images/lg-k40-platinum%20gray-450x350.png"
                />
            </div>
            {/* Product */}
        </div>
    )
}

export default Home
