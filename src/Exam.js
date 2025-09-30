import { useState } from "react"
import BaseFrame from "./theme/BaseFrame"

export default function Exam_1() {
    const [formData, setFormData] = useState({
        id: null,
        title: null,
        description: null,
        price: null
    })

    const [products, setProducts] = useState([{ id: 1, title: 'apple', price: 1200, description: 'iphone 17 promax' }]);

    const [showProduct, setShowProduct] = useState(products[0])

    const save = (event) => {
        event.preventDefault();

        var checkID = products.find(item => item.id == formData.id)

        if (checkID) {
            setProducts(products.map(item =>
                item.id === formData.id ? { ...item, ...formData } : item
            ));

        } else {
            formData.id = products.length + 1
            setProducts([formData, ...products])
        }

    }

    const removeProduct = (i) => {
        var newProducts = products.filter((item, index) => index !== i)


        setProducts(newProducts)

        if (products[i].title == showProduct.title) {
            setShowProduct()
        }


    }

    return <>
        <div className="container mb-5" dir="rtl">
            <BaseFrame customClass={'col-12 order-0 mb-4'} title={'ایجاد محصول  جدید'}>
                <hr />
                <form className="mb-2" onSubmit={(event) => save(event)}>
                    <div className="mb-3">
                        <label style={{ width: '120px' }} htmlFor="">عنوان محصول</label>
                        <input value={formData.title} type="text" onInput={(event) => setFormData({ ...formData, title: event.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label style={{ width: '120px' }} htmlFor=""> قیمت</label>
                        <input value={formData.price} type="number" name="" id="" onInput={(event) => setFormData({ ...formData, price: event.target.value })}></input>
                    </div>
                    <div className="mb-3">
                        <label style={{ width: '120px' }} htmlFor="">توضیح محصول</label>
                        <textarea value={formData.description} name="" id="" onInput={(event) => setFormData({ ...formData, description: event.target.value })}></textarea>
                    </div>
                    <button>ثبت</button>
                </form>
            </BaseFrame>


            <BaseFrame customClass={'col-12 order-0 mb-5'} title={'ایجاد محصول  جدید'}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">عنوان</th>
                            <th scope="col">قیمت</th>
                            <th scope="col">توضیحات</th>
                            <th scope="col">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.length > 0 ? products.map((item, index) => {
                                return <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <button onClick={() => removeProduct(index)} className="btn btn-outline-danger">حذف</button>
                                        <button onClick={() => setShowProduct(item)} className="btn btn-outline-info mx-2">مشاهده</button>
                                        <button onClick={() => setFormData({ title: item.title, price: item.price, description: item.description, id: item.id })} className="btn btn-outline-info">ویرایش</button>
                                    </td>
                                </tr>
                            })
                                :
                                <tr>
                                    <td colSpan={5}>
                                        <h3 className="text-center">محصولی یافت نشد</h3>
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </BaseFrame>

            {
                showProduct && <BaseFrame customClass={'col-12 order-0 mb-5'} title={'نمایش محصول'}>
                    <h4>عنوان</h4>
                    <p>
                        {showProduct.title}
                    </p>
                    <hr />
                    <h4>توضیحات</h4>
                    <p>
                        {showProduct.description}
                    </p>
                    <hr />
                    <h4>قمیت</h4>
                    <p>
                        {showProduct.price}
                    </p>

                </BaseFrame>
            }

        </div>

    </>

}