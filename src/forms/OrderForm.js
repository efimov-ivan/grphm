import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function OrderForm({ setOrderStep }) {
  const [formValues, setFormValues] = useState({
    cardname: "",
    cardnumber: "",
    carddate: "",
    cardcvv: "",
  });

  const [errors, setErrors] = useState({
    cardname: false,
    cardnumber: false,
    carddate: false,
    cardcvv: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (value && errors[name] === true) setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formValidation();
  };

  const formValidation = () => {
    var tempErrors = {};
    for (var key in formValues) {
      !formValues[key] ? (tempErrors[key] = true) : (tempErrors[key] = false);
    }
    if (!Object.values(tempErrors).includes(true)) {
      setOrderStep(2);
    }
    setErrors(tempErrors);
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <h3 className="form__title">Оплата</h3>

      <label className="form__cardname">
        <p>Имя на карте</p>
        <TextField
          placeholder="Konstantin Ivanov"
          name="cardname"
          value={formValues.cardname}
          onChange={handleChange}
          error={errors.cardname}
          variant="outlined"
          fullWidth
        />
      </label>

      <label className="form__cardnumber">
        <p>Номер карты</p>
        <TextField
          placeholder="xxxx xxxx xxxx xxxx"
          inputProps={{ maxLength: 16 }}
          name="cardnumber"
          value={formValues.cardnumber}
          onChange={handleChange}
          error={errors.cardnumber}
          variant="outlined"
          fullWidth
        ></TextField>
      </label>

      <label className="form__carddate">
        <p>Срок</p>
        <TextField
          placeholder="MM / YY"
          name="carddate"
          value={formValues.carddate}
          onChange={handleChange}
          error={errors.carddate}
          variant="outlined"
          fullWidth
        />
      </label>

      <label className="form__cardcvv">
        <p>CVV</p>
        <TextField
          placeholder=""
          name="cardcvv"
          value={formValues.cardcvv}
          onChange={handleChange}
          error={errors.cardcvv}
          variant="outlined"
          fullWidth
        />
      </label>

      <Button type="submit" variant="contained" className="form__button">
        Оплатить
      </Button>
    </form>
  );
}

export default OrderForm;
