import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import "./App.css";
import Like from "./components/Like/Like";
import ExpandableText from "./components/ExpandableText/ExpandableText";
import Form from "./components/Form/Form";

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
      <Form />
      <ExpandableText stringLimit={30}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non corrupti
        quam perferendis voluptates sequi. Animi dolor fuga aut, amet
        reprehenderit sint rem iusto saepe inventore tenetur quas eligendi
        nesciunt consectetur! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Corporis repellat fugiat distinctio pariatur consequuntur ipsam
        rerum quasi tenetur, ipsa commodi error reprehenderit illum iste debitis
        possimus omnis nostrum, itaque dicta. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Quasi vero tenetur beatae error sapiente
        placeat vel, corrupti repellendus possimus. Et doloribus labore
        molestias repudiandae facere minus suscipit repellat accusantium aut.
      </ExpandableText>
      <Like onClick={() => console.log("clicked like")} />
      <div className="">
        <Button button_type="danger" onClick={handleBtnClick}>
          Not Done yet
        </Button>
      </div>

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
