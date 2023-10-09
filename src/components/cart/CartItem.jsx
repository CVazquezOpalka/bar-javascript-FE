import React from "react";
import { useDispatch } from "react-redux";
import { addItems, removeItem } from "../../store/cartSlice.js";

function CartItem(props) {
  const { name, price, quant, id, img } = props.data;
  const total = price * quant;
  const spanStyle = "uppercase tracking-wide text-gray-700 text-xs font-bold";
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addItems({ ...props.data, amount: 1 }));
  };
  const remove = () => {
    dispatch(removeItem(id));
  };
  return (
    <li className="flex items-center justify-between my-2 pb-2 border-b border-secondary">
      <div className="flex">
        <img
          className={`w-16 h-16 rounded-fullshadow-lg`}
          src={img?.url}
          alt={name}
        />
        <div className="flex-col items-center justify-end ml-3">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="text-stone-600 text-sm  ">Unit :${price}</div>
          <button
            onClick={remove}
            className="font-semibold text-sm text-stone-900  hover:text-primary  "
          >
            remove
          </button>
          <button
            onClick={add}
            className="font-semibold text-sm text-stone-900  hover:text-primary  ml-1"
          >
            add
          </button>
        </div>
      </div>
      <div className="text-right grid content-end">
        <span className={spanStyle}>Amount x {quant}</span>
        <span className={spanStyle}>Total: $ {total}</span>
      </div>
    </li>
  );
}

export default CartItem;
