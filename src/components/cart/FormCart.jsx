import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanStore } from "../../store/cartSlice";
import axios from "../../tools/axiosInstance";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Notification from "./Notification";

const FormCart = (props) => {
  const { items, total, toggleModal } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const jwt = useSelector((state) => state.auth.jwt);
  const [notification, setNotification] = useState({
    show: false,
    type: "success",
    message: "Thank's for you order",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validate = {
    required: "this field is required",
    minLength: {
      value: 3,
      message: "Min 3 letters",
    },
  };

  const onSubmit = (data) => {
    const _items = items.map((item) => ({
      id: item.id,
      name: item.name,
      quant: item.quant,
      price: item.price,
    }));
    const dataOrder = {
      address: data.address,
      city: data.city,
      items: _items,
      amount: total,
      users_permissions_user: user.id,
    };
    axios
      .post(
        "/api/orderes",
        { data: dataOrder },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setNotification((prevState) => {
          return {
            ...prevState,
            show: true,
          };
        });
        dispatch(cleanStore());
      })
      .catch((error) => {
        console.log(error);
        setNotification((prevState) => {
          return {
            ...prevState,
            show: true,
            type: "error",
            message: "Sorry somethings went wrong, try agian later",
          };
        });
      });
  };
  return (
    <>
      {!notification.show && (
        <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 mx-auto">
          <Input
            label="Addres"
            placeholder="calle falsa 123"
            {...register("address", validate)}
            errors={errors.address ? errors.address.message : null}
          />
          <Input
            label="City"
            placeholder="Springfield"
            {...register("city", validate)}
            errors={errors.city ? errors.city.message : null}
          />
          <div className="text-right ">
            <Button
              label="Cancel"
              onClick={toggleModal}
              outlined
              extraClass="mr-2"
            />
            <Button type="submit" label="Checkout" />
          </div>
        </form>
      )}
      {notification.show && (
        <div className="text-center">
          <Notification notification={notification} />
          <Button onClick={toggleModal} label="Close" extraClass="mt-2" />
        </div>
      )}
    </>
  );
};

export default FormCart;
