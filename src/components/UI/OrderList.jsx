import React from "react";

const OrderList = (props) => {
  const { city, address, amount, items, id, createdAt } = props.order;
  const date = new Date(createdAt);
  const formatDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  

  return (
    <li className="bg-white border-bborder-primary p-2">
      <p className="text-sm mb-0 text-stone-800">
        <strong>Addres :</strong> {address}
      </p>
      <p className="text-sm mb-0 text-stone-800">
        <strong>City :</strong> {city}
      </p>
      <hr />
      <p className="text-sm mb-2 text-stone-800">
        <strong>List of Beers</strong>
      </p>
      <ul className="text-sm ml-5">
        {items.map((e, index) => (
          <p key={`item-${index}`}>
            {e.name}(x{e.quant})
          </p>
        ))}
      </ul>
      <p className="text-sm mb-0 text-red-700">
        <strong>Amount: </strong>
        {amount}
      </p>
      <p className="text-sm mb-0 text-red-700">
        <strong>{formatDate}</strong>
      </p>
      <hr />
    </li>
  );
};

export default OrderList;
