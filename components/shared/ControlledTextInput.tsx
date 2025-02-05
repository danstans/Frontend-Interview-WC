"use client";
import { ArrowBack } from "@material-ui/icons";
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { ReactElement, cloneElement } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface TextInputProps {
  name: string;
  label: string;
  startAdornmentIcon?: ReactElement;
}

const TextInput = ({ name, label, startAdornmentIcon }: TextInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <TextField
          // defaultValue={value}
          value={value}
          onChange={onChange} // send value to hook form
          onBlur={onBlur} // notify when input is touched/blur
          label={label}
          fullWidth
          variant="standard"
          error={!!error}
          helperText={error?.message || " "}
          InputProps={{
            ...(startAdornmentIcon
              ? {
                  startAdornment: (
                    <InputAdornment position="start">
                      {cloneElement(startAdornmentIcon)}
                    </InputAdornment>
                  ),
                }
              : {}),
          }}
        />
      )}
    />
  );
};

export default TextInput;
