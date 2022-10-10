import { useState } from "react";
import { useEffect } from "react";
const App = () => {
  const [text, setText] = useState("");
  const [isEmpty, setIsempty] = useState(false);
  const [texterror, setTexterror] = useState(
    "Поле ввода не должно быть пустым"
  );
  const [textsuccessfully, setTextsuccessfully] = useState(
    "Сообщение успешно отправлено"
  );
  const [formvalid, setFormvalid] = useState(false);

  useEffect(() => {
    if (text) {
      setFormvalid(true);
    } else {
      setFormvalid(false);
    }
  },[text]);
  const blurHandler = (e) => {
    if (e.target.name === "text") {
      setIsempty(true);
      setTextsuccessfully("");
    }
    if (e.target.value === "") {
      setTexterror("Поле ввода не должно быть пустым");
      setTextsuccessfully("");
    }
  };
  const textHandler = (e) => {
    setText(e.target.value);
    setTexterror("");
    setTextsuccessfully("");
    if (e.target.value === "") {
      setTexterror("Поле ввода не должно быть пустым");
    }
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
    if (e.target.value === "") {
      setTexterror("Поле ввода не должно быть пустым");
    }

    setTextsuccessfully("Сообщение успешно отправлено");
  };

  return (
    <div className="App">
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="text"
          value={text}
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => textHandler(e)}
        />
        <button disabled={!formvalid} type="sumbit">
          Отправить
        </button>
        {isEmpty && texterror && (
          <div style={{ color: "red" }}>{texterror}</div>
        )}
        {isEmpty && textsuccessfully && (
          <div style={{ color: "green" }}>{textsuccessfully}</div>
        )}
      </form>
    </div>
  );
};

export default App;
