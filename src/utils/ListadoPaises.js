import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import useFetch from "../hooks/useFetch";

const url_paises = "http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: '30px',
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }),
);

export default function ListadoPaises() {
  const classes = useStyles();

  const listadoPaises = useFetch(url_paises)
  
  return (
    <Paper component="ul" className={classes.root}>
      {listadoPaises.map((elemento) => {
        let icon;

        if (elemento.name === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={elemento.id}>
            <Chip
              icon={icon}
              label={elemento.name}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
}
