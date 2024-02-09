import { FormEvent, useRef, useState } from "react";
import Form from "./components/Form";
import Clock from "./components/Clock";
import "./App.css";

interface stateObj {
  timeZone: number;
  clockName: string;
}

function App() {
  const [state, setState] = useState<stateObj[]>([]);
  const inputNameRef = useRef(null);
  const inputTimeRef = useRef(null);

  const onSubmit = (ev: FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    if (
      inputNameRef.current.value === "" ||
      inputTimeRef.current.value === "" ||
      Math.abs(Number(inputTimeRef.current.value)) / 12 > 1
    ) {
      return;
    }
    console.log();
    setState([
      ...state,
      {
        clockName: inputNameRef.current.value,
        timeZone: Number(inputTimeRef.current.value),
      },
    ]);

    inputNameRef.current.value = "";
    inputTimeRef.current.value = "";
  };

  const onClick = (index: number) => {
    setState(prevData => prevData.filter((el, ind) => index !== ind)
    )
  };

  return (
    <>
      <div className="container">
        <Form
          onSubmit={onSubmit}
          inputNameRef={inputNameRef}
          inputTimeRef={inputTimeRef}
        />
        <div className="clocks">
          {state.map((el: stateObj, ind) => {
            return (
              <Clock
                timeZone={el.timeZone}
                name={el.clockName}
                ind={ind}
                onClick={onClick}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
