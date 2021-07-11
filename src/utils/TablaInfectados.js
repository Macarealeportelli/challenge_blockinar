import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import styled from "styled-components";
import ExportExcel from "react-export-excel";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  justify-content: center;
  align-items: center;
  max-width: 90%;
`;

const StyledButton = styled.button`
  height: 40px;
  font-size: 18px;
  margin: 10px;
  background-color: green;
  color: #fafafa;
  border-radius: 8px;
`;

const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginRight: theme.spacing(0.5),
    },
  })
);

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

const columns = [
  { title: "name", label: "Nombre" },
  { title: "lastname", label: "Apellido" },
  { title: "age", label: "Edad" },
  { title: "genre", label: "Género" },
  { title: "country", label: "País" },
];

const createData = (name, lastname, age, genre, country, live) => {
  return { name, lastname, age, genre, country, live };
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

export default function TablaInfectados() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    const url_data = `https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected`;

    axios.get(url_data).then((response) => {
      let newRows = response.data.map((result) => {
        let generoString = JSON.stringify(result.female);
        generoString === "true"
          ? (generoString = "Femenino")
          : (generoString = "Masculino");

        return createData(
          result.first_name,
          result.last_name,
          result.age,
          generoString,
          result.country,
          result.live,
          result.id
        );
      });
      setRows(newRows);
    });
  }, []);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <ContainerGeneral>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell title={column.title}>
                  {" "}
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow
                key={row.id}
                style={{ color: !row.live ? "black" : "red" }}
              >
                <TableCell style={{ width: 160 }} align="left">
                  {row.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.lastname}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.age}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.genre}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.country}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "Todos", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      <ExcelFile
        element={<StyledButton>Exportar a Excel</StyledButton>}
        filename="Reporte de Casos"
      >
        <ExcelSheet data={rows} name="Reporte de Casos">
          {columns.map((column) => (
            <ExcelColumn label={column.label} value={column.title} />
          ))}
        </ExcelSheet>
      </ExcelFile>
    </ContainerGeneral>
  );
}
