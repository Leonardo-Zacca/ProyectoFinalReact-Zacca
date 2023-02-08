import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./styles.css" 

const FormComp = ({ confirmPurchase, formVis, setFormVis }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataDelFormulario) => {
    confirmPurchase(dataDelFormulario);
  };

  const handleClose = () => {
    setFormVis(false);
  };

  return (
    <>
      <Modal show={formVis} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout Compra</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <label>Nombre</label>
            <input
              {...register("nombre", {
                required: true,
                minLength: 2,
              })}
            />
            {errors?.nombre?.type === "required" && (
              <p className="error">El campo nombre es requerido</p>
            )}
            {errors?.nombre?.type === "minLength" && (
              <p className="error">El nombre debe superar los 2 caracteres</p>
            )}
            <label>Email</label>
            <input
              type="email"
              {...register("email", { minLength: 3, required: true })}
            />
            {errors?.email?.type === "minLength" && (
              <p className="error">El mail tiene que tener minimo 3 caracteres</p>
            )}
            {errors?.email?.type === "required" && (
              <p className="error">El campo email es requerido</p>
            )}
            <label>Telefono</label>
            <input
              type="number"
              {...register("phone", { min: 10, maxLength: 10, required: true })}
            />
            {errors?.phone?.type === "minLength" && (
              <p className="error">El teléfono debe tener 10 digitos</p>
            )}
            {errors?.phone?.type === "required" && (
              <p className="error">El campo telefono es requerido</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Confirmar compra
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default FormComp;
