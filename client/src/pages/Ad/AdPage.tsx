import styles from "./AdPage.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { Modal } from "src/entities";
import { useNavigate } from "react-router";
import { APP_ROUTES } from "src/shared/config";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const AdPage = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <div className={styles.grid}>
          <div className={styles.gallery}>123</div>
          <div className={styles.history}>123</div>
          <div className={styles.descriptionContainer}>
            <span className={styles.description}>DESCRIPTION</span>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className={styles.seller}>ИНФО О ПРОДАВЦЕ</div>
          </div>
        </div>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success">
            Одобрить
          </Button>
          <Button variant="outlined" color="error" onClick={handleOpenModal}>
            Отклонить
          </Button>
          <Button color="secondary">Доработка</Button>
        </Stack>

        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            color="secondary"
            onClick={() => {
              navigate(APP_ROUTES.LIST);
            }}
          >
            К списку
          </Button>

          <Stack direction="row" spacing={2}>
            <Button color="secondary">Пред</Button>
            <Button color="secondary">След</Button>
          </Stack>
        </Stack>
      </div>
      <Modal onClose={handleCloseModal} isOpen={isOpen} />
    </>
  );
};
