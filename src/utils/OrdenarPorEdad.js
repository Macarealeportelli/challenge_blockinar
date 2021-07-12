import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import styled from 'styled-components';

const ContainerSwitch = styled.div`
    display: flex;
    align-items: center;
`;

const OrdenarPorEdad = ({ params, setParams }) => {
  const [state, setState] = React.useState({
    age: false,
  });

  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    params
      ? setParams(``)
      : setParams(`?orderBy=age`)
  };

  return (
      
    <ContainerSwitch component="fieldset">
      <FormLabel component="legend">Ordenar por </FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.age} onChange={handleChangeSwitch} name="age" />}
          label="Edad"
        />
      </FormGroup>
    </ContainerSwitch>
    
  );
}

export default OrdenarPorEdad;