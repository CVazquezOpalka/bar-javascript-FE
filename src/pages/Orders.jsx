import React from "react";
import axios from "../tools/axiosInstance";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import OrderList from "../components/UI/OrderList";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const jwt = useSelector((state) => state.auth.jwt);
  const user = useSelector((state) => state.auth.user);

  const query = qs.stringify({
    populate: {
      users_permissions_user: {
        populate: "*",
      },
    },
    filters: {
      users_permissions_user: {
        id: user.id,
      },
    },
  });

  useEffect(() => {
    axios
      .get(`/api/orderes?${query}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((response) => {
        console.log(response);
        setOrders(response.data.data);
      });
  }, [jwt, query]);
  return (
    <div>
      <h1 className="text-2xl text-center font-semibold underline mb-4">
        Order History
      </h1>
      <ul>
        {orders.map((order) => (
          <OrderList key={order.id} order={order}></OrderList>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
