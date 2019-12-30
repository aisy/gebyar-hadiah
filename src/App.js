import React, { useState } from "react";
import { Button, Container, CircularProgress } from "@material-ui/core";
import CirclesCount from "./components/circlesCount";

const App = () => {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);

  const randomCount = () => {
    let Min = 1;
    let Max = 100;

    const Random = Math.floor(Math.random() * Max + Min);
    setValue(Random);
  };

  const chooseWinner = () => {
    setLoading(true);
    reset();

    // set time out 8 seconds
    setTimeout(() => {
      setLoading(false);
      randomCount();
    }, 8000);
  };

  const reset = () => {
    setValue();
  };

  return (
    <Container className="App">
      <h1>Satkomindo </h1>
      <Container>
        <div style={{ marginTop: 20, fontSize: 40 }}>{value}</div>
        <div>{loading ? <CircularProgress /> : <div />}</div>
      </Container>
      <CirclesCount />
      <div>
        <Button variant="contained" color="primary" onClick={chooseWinner}>
          Tentukankan Pemenang
        </Button>
      </div>
    </Container>
  );
};

export default App;
