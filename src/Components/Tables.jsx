import { use, useState } from "react";
import BaseFrame from "./BaseFrame";

export default function Tables() {
    const [formData, setFormData] = useState({
        id: null,
        title: null,
        description: null,
        price: null
    })
    const [products, setProducts] = useState([{
        id: 1,
        title: 'apple',
        price: '1200',
        description: 'iphone 17 promax'
    }]);

    const [showProduct, setShowProduct] = useState(products[0])

    const save = (event) => {
        var checkID = products.find(item => item.id == formData.id)
        if (checkID) {

        } else {
            event.preventDefault();
            formData.id = products.length + 1
            setProducts([formData, ...products])
        }
    }

    const removeProduct = (i) => {
        var newProducts = products.filter((item, index) => index !== i)
        if (products[i].title == showProduct.title) {
            setProducts(newProducts)
        }
    }
    return <>
        <div className="container">
            <BaseFrame>
                <hr />
                <form className="mb-2" onSubmit={(event) => save(event)}>
                    <div className="mb-3">
                        <label style={{ width: '120px' }} htmlFor=""> product name </label>
                        <input value={formData.title} type="text" onInput={(event) => setFormData({ ...formData, title: event.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label style={{ width: '120px' }} htmlFor="">price</label>
                        <input value={formData.price} type="number" name="" id="" onInput={(event) => setFormData({ ...formData, price: event.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label style={{ width: '120px' }} htmlFor=""> description</label>
                        <textarea value={formData.description} name="" id="" onInput={(event) => setFormData({ ...formData, description: event.target.value })} />
                    </div>

                    <button>Submit</button>
                </form>
            </BaseFrame>
        </div>
        <div className="container">
            <BaseFrame>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.length > 0 ? products.map((item, index) => {
                                return <>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <i onClick={() => setShowProduct(item)} className="fa-solid fa-eye text-secondary mx-2"></i>
                                            <i onClick={() => removeProduct(index)} className="fa-solid fa-xmark text-secondary mx-2"></i>
                                            <i onClick={() => setFormData({ title: item.title, price: item.price, description: item.description, id: item.id })} className="fa-solid fa-pen text-secondary mx-2"></i>
                                        </td>
                                    </tr>
                                </>
                            })
                                :
                                <tr>
                                    <td colSpan={6}>
                                        <h3 className="text-center">No product found!</h3>
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>

            </BaseFrame>
            {
                showProduct && 
                <BaseFrame>
                    <h5> Name</h5>
                    <p>
                        {showProduct.title}
                    </p>
                    <hr />
                    <h5>price</h5>
                    <p>
                        {showProduct.price}
                    </p>
                    <hr />
                    <h5>Description</h5>
                    <p>
                        {showProduct.description}
                    </p>
                </BaseFrame>
            }
        </div>
    </>
}