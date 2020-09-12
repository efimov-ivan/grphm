import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

function ShipmentForm({ setOrderStep }) {
  const countries = ["Россия", "Канада", "Мексика", "Агнлия"];
  const [formValues, setFormValues] = useState({
    username: "",
    city: "",
    address: "",
    country: null,
    zip: "",
  });

  const [errors, setErrors] = useState({
    city: false,
    address: false,
    country: false,
    zip: false,
    username: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name);
    setFormValues({ ...formValues, [name]: value });
    if (value && errors[name] === true) setErrors({ ...errors, [name]: false });
  };

  const handleChangeAutocomplete = (e, value) => {
    setFormValues({ ...formValues, country: value });
    if (value && errors.country === true)
      setErrors({ ...errors, country: false });
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
      setOrderStep(1);
    }
    setErrors(tempErrors);
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <h3 className="form__title">Информация для доставки</h3>

      <label className="form__username">
        <p>Получатель</p>
        <TextField
          placeholder="ФИО"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          error={errors.username}
          variant="outlined"
          fullWidth
        />
      </label>

      <label className="form__city">
        <p className="--double-margin">Адрес</p>
        <TextField
          placeholder="Город"
          name="city"
          value={formValues.city}
          onChange={handleChange}
          error={errors.city}
          variant="outlined"
          fullWidth
        />
      </label>

      <label className="form__address">
        <TextField
          placeholder="Адрес"
          name="address"
          value={formValues.address}
          onChange={handleChange}
          error={errors.address}
          variant="outlined"
          fullWidth
        />
      </label>

      <label className="form__country">
        <Autocomplete
          options={countries}
          name="country"
          onChange={handleChangeAutocomplete}
          autoHighlight
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Страна"
              variant="outlined"
              value={formValues.country}
              error={errors.country}
            />
          )}
        />
      </label>

      <label className="form__zip">
        <TextField
          placeholder="Индекс"
          name="zip"
          value={formValues.zip}
          onChange={handleChange}
          error={errors.zip}
          variant="outlined"
        />
      </label>

      <Button type="submit" variant="contained" className="form__button">
        Продолжить
      </Button>
    </form>
  );
}

export default ShipmentForm;
