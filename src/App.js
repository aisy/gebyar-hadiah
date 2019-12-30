import React, { useState } from "react";
import { Button, Container } from "@material-ui/core";
import Config from "./configs/configs";

import CirclesCount from "./components/circlesCount";
import LoadingCircle from "./components/loadingCircle";

const App = () => {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const randomCount = () => {
    const Random = Math.floor(
      Math.random() * Config.size.max + Config.size.min
    );
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
      <img
        style={{ width: 300 }}
        alt="logo"
        src={require("./assets/img/brinetcom.png")}
      />

      <Container>
        <div>
          {loading ? <LoadingCircle /> : <CirclesCount>{value}</CirclesCount>}
        </div>
      </Container>
      <div>
        <Button variant="contained" color="primary" onClick={chooseWinner}>
          Choose the Winner!
        </Button>
      </div>
    </Container>
  );
};

export default App;
