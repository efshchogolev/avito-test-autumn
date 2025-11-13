import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import * as React from "react";
import type { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>отклонение</DialogContentText>
        <form onSubmit={() => {}} id="subscription-form">
          <FormLabel id="demo-radio-buttons-group-label">Причина</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            value={value}
            onChange={handleChange}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="restricted"
              control={<Radio />}
              label="Запрещённый товар"
            />
            <FormControlLabel
              value="category"
              control={<Radio />}
              label="Неверная категория"
            />
            <FormControlLabel
              value="description"
              control={<Radio />}
              label="Некорректное описание"
            />
            <FormControlLabel
              value="photo"
              control={<Radio />}
              label="Проблемы с фото"
            />
            <FormControlLabel
              value="susp"
              control={<Radio />}
              label="Подозрение на мошенничество"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Другое"
            />
          </RadioGroup>
          {value === "other" && (
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          )}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" form="subscription-form">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};
