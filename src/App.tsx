import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let [items, setItems] = useState([
    "Candy",
    "Chocolate",
    "Biryani",
    "Cake",
    "Barbequeue",
  ]);

  const [showAlert, setShowAlert] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleBtnClick = () => {
    console.log("click");
    setShowAlert(!showAlert);
  };

  return (
    <div>
      <Button button_type="danger" onClick={handleBtnClick}>
        Not Done yet
      </Button>
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
        >
          <h1>This is the button allert</h1>
        </Alert>
      )}

      <ListGroup items={items} heading="Food" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
