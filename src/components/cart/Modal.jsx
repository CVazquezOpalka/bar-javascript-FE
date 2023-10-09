import ReactDOM from "react-dom";

const Backdrop = () => {
  const styleBackDrop =
    "fixed top-0 left-0 w-screen h-screen bg-black opacity-70";
  return <div className={styleBackDrop}></div>;
};

const CardModal = (props) => {
  return (
    <div className="fixed mx-auto inset-x-0 top-32 bg-white pt-6 px-10 pb-2 drop-shadow-lg w-6/12 ">
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop></Backdrop>,
        document.querySelector("#backdrop")
      )}
      {ReactDOM.createPortal(
        <CardModal>{props.children}</CardModal>,
        document.querySelector("#modal")
      )}
    </>
  );
};

export default Modal;
