import Input from "./Input";
import "./Form.css";

interface props {
  onSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
  inputNameRef?: React.RefObject<HTMLInputElement>;
  inputTimeRef?: React.RefObject<HTMLInputElement>;
}

function Form({ onSubmit, inputNameRef, inputTimeRef }: props) {
  return (
    <>
      <div className="form-area">
        <form className="form-main" onSubmit={onSubmit}>
          <div className="form-main-item">
            <p>Название</p>
            <Input classic="input-time" type={"text"} ref={inputNameRef} />
          </div>
          <div className="form-main-item">
            <p>Временная зона</p>
            <Input
              classic="input-distance"
              type={"text"}
              ref={inputTimeRef}
              placeholder={"Смещение по гринвичу"}
            />
          </div>
          <input
            type="submit"
            value="Добавить"
            className="form-input input-submit"
          />
        </form>
      </div>
    </>
  );
}

export default Form;
