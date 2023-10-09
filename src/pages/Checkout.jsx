import { useSelector} from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import Modal from "../components/cart/Modal";
import FormCart from "../components/cart/FormCart";
import CartItem from "../components/cart/CartItem";

function Checkout() {
 
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const isLogedIn = useSelector((state) => state.auth.loggedin);
  const cantItems = items.length;
  const hasItems = cantItems > 0 ? true : false;
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="max-w.4xl mx-auto">
      <h1 className="text-2xl text-gray-700 uppercase text-center mb-3">
        My carrito
      </h1>
      {!hasItems && (
        <div className="text-center mt-10">
          <h2 className="text-stone-600 mb-10">Your cart is empty</h2>
          <Link
            className="px-8 py-2 bg-primary hover:bg-secondary text-white"
            to="/"
          >
            Go Home
          </Link>
        </div>
      )}
      {hasItems && (
        <div className="bg-white p-4">
          <p className="text-right">Price</p>
          <ul>
            {items?.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
          </ul>
          <div className="text-right">
            <p className="m-0 text-stone-600 text-xs">
              Cant items: {cantItems}
            </p>
            <p className="mt-0 mb-2 font-semibold text-lg">
              Total : <span className="text-primary">${total}</span>
            </p>
            {isLogedIn && (
              <Button onClick={toggleModal} label="Procced to payment" />
            )}
            {!isLogedIn && <Button label="Login" to="/login" />}
          </div>
        </div>
      )}
      {showModal && (
        <Modal>
          <h1 className="text-xl text-center mb-5">Data payment</h1>
          <FormCart items={items} total={total} toggleModal={toggleModal} />
        </Modal>
      )}
    </div>
  );
}

export default Checkout;
