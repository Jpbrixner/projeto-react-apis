import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { MainModal } from "./styleModal";
import ohNo from "../../images/ohNo.svg"
import gotcha from "../../images/gotcha.svg"

const Modal = (props) => {
  const context = useContext(GlobalContext);

  const renderModal = () => {
    switch (props.action) {
      case "add":
        return (
          <>
            <img src={gotcha} alt="Gotcha!"/>
          </>
        );

      case "remove":
        return (
          <>
          <img src={ohNo} alt="Oh No"/>
          </>
        );
      default:
        return (
          <>
            <h2>Ops!</h2>
            <p>Algo deu errado! Verifique.</p>
          </>
        );
    }
  };
  return (
    <>
      <MainModal
        onClick={() => {
          context.setShowModal(false);
        }}
      >
        {renderModal()}
      </MainModal>
    </>
  );
};

export default Modal;
