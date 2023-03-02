import React, { useState } from "react";
import { Button, Grid, Header, Input } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";

function App() {
  const [incrementAmount, setIncrementAmount] = useState("2");
  const { count } = useSelector((store) => store.counter);
  // console.log(count);
  const dispatch = useDispatch();
  return (
    <Grid centered padded columns={4}>
      <Grid.Row verticalAlign="middle">
        <Grid.Row textAlign="center">
          <Header size="huge">Count: {count}</Header>
          <Button onClick={() => dispatch(increase())}>Increase +</Button>
          <Button onClick={() => dispatch(decrease())}>Decrease -</Button>
          <Button onClick={() => dispatch(reset())}>Reset</Button>
        </Grid.Row>
      </Grid.Row>
      <Input
        placeholder="add random number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <Button
        onClick={() =>
          dispatch(incrementByAmount(Number(incrementAmount) || 0))
        }
      >
        Add
      </Button>
    </Grid>
  );
}

export default App;
