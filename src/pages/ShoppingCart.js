import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrement, increment, removeFromCart } from "../redux/cart/action";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ShoppingCart = () => {

    const { cart } = useSelector(state => state.shoppingCart);
    const dispatch = useDispatch();

    const handleIncrement = (productId) => {
        dispatch(increment(productId))
        Swal.fire({
            title: "Cart Update",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
    }

    const handleDecrement = (productId) => {
        dispatch(decrement(productId))
        Swal.fire({
            title: "Cart Update",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
    }

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId))
        Swal.fire({
            title: "Cart Delete",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
    }

    const handleClearCart = () => {
        dispatch(clearCart())
        Swal.fire({
            title: "Cart Empty",
            icon: "warning",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
    }

    return (
        <>
            {cart.length === 0 ? (
                <div className="col-md-12 text-center">
                    <div>
                        <i className="bi bi-basket-fill" style={{fontSize: '100px'}}></i>
                    </div>
                    <h3 className="text-bold">Cart is empty</h3>
                    <Link className="btn btn-outline-dark mt-3" to="/products">Products</Link>
                </div>
            ) : (
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-12 pl-3 pt-3">
                            <table className="table table-hover border bg-white">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th style={{ width: '10%' }}>Quantity</th>
                                        <th>Subtotal</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart && cart.map(product => (
                                        <tr key={product.id}>
                                            <td className="align-middle">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <img
                                                            src={product.image}
                                                            alt="..."
                                                            className="img-fluid" />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <h5>{product.name}</h5>
                                                        <p>{product.description}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle">{product.price}</td>
                                            <td className="align-middle">
                                                <button onClick={() => handleIncrement(product.id)} className="btn btn-sm btn-dark me-2"> + </button>
                                                <span>{product.qty}</span>
                                                <button onClick={() => handleDecrement(product.id)} className="btn btn-sm btn-dark ms-2"> - </button>
                                            </td>
                                            <td className="align-middle">{product.price * product.qty}</td>
                                            <td className="align-middle" style={{ width: '15%' }}>
                                                <button onClick={() => handleRemoveFromCart(product.id)} className="btn btn-danger btn-sm">delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>
                                            <button onClick={() => handleClearCart()} href="#" className="btn btn-dark">Clear cart</button>
                                        </td>
                                        <td colSpan='2' className="hidden-xs"></td>
                                        <td className="hidden-xs text-center" style={{ width: '15%' }}>
                                            <strong>Total : {cart.reduce((total, product) => {
                                                return total + product.price * product.qty
                                            }, 0)}</strong>
                                        </td>
                                        <td>
                                            <a href="/" className="btn btn-success btn-block">Checkout</a>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </>


    )
}

export default ShoppingCart;