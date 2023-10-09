import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../../store/cartSlice";
function ProductItem({ data }) {
  const { id, img, price, description, name } = data;
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
  
  const numberInput = useRef(null);
  const addNewItem = (e) => {
    e.preventDefault();
    const enterAmount = numberInput.current.value;
    const amount = +enterAmount;
    /*  dispatch(increment(amount)); */
    if (amount === 0 || amount < 1 || amount > 6) {
      setShowError(true);
      return;
    }
    setShowError(false);
    
    const item = { name, price, amount, id, img };
    dispatch(addItems(item));
  };
  return (
    <li className="flex justify-between border-b border-secondary my-2">
      <div className="flex items-center">
          <img className="w-14 h-14 rounded-full" src={img.url} alt="logo de la imagen" />
        <div className="ml-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="font-light">{description}</div>
          <h4 className="font-semibold text-lg text-primary">${price}</h4>
        </div>
      </div>
      <div>
        <form className="text-right" onSubmit={addNewItem} noValidate>
          <div className="mb-2">
            <label
              htmlFor="amount"
              className="block uppercase text-gray-700 text-xs text-bold mb-2 tracking-wide"
            >
              amount
            </label>
            <input
              className="w-12 border-gray-500 pl-1"
              type="number"
              id="amount"
              max={6}
              min={1}
              defaultValue={1}
              ref={numberInput}
            />
          </div>
          <button className="bg-primary px-2 py-1 text-gray-100 hover:bg-secondary">
            add
          </button>
          {showError && (
            <p className="text-red-800 text-sm mt-2">
              please inser value (1-6)
            </p>
          )}
        </form>
      </div>
    </li>
  );
}

export default ProductItem;
