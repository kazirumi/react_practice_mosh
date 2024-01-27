import { useEffect, useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import "./App.css";
import Like from "./components/Like/Like";
import ExpandableText from "./components/ExpandableText/ExpandableText";
import Form from "./components/Form/Form";
import ExpenseTracker from "./components/ExpenseTracker";
import ProductList from "./components/ProductList/ProductList";
import axios, { CanceledError } from "axios";
interface user {
  id: number;
  name: string;
}
function App() {
  // let [items, setItems] = useState([
  //   "Candy",
  //   "Chocolate",
  //   "Biryani",
  //   "Cake",
  //   "Barbequeue",
  // ]);

  // const [showAlert, setShowAlert] = useState(false);

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const handleBtnClick = () => {
  //   console.log("click");
  //   setShowAlert(!showAlert);
  // };
  // const [category,SetCategory]= useState("");

  const [users, setUsers] = useState<user[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<user[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      setUsers([]);
      setError("");
      controller.abort();
    };
  }, []);

  let userDelete = (userToDelete: user) => {
    // console.log(userToDelete.id);
    const OriginalData = [...users];
    setUsers(
      users.filter((user) => {
        return user.id !== userToDelete.id;
      })
    );

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + userToDelete.id)
      .catch((err) => {
        setError(err.message);
        setUsers([...OriginalData]);
      });
  };

  let userUpdate = (userToUpdate: user) => {
    const OriginalData = [...users];
    const updatedUser = { ...userToUpdate, name: userToUpdate.name + " updated" };
    setUsers(
      users.map((user) => {
        if (user.id == updatedUser.id) return updatedUser;
        return user;
      })
    );
    axios
      .put("https://jsonplaceholder.typicode.com/users/" + updatedUser.id,updatedUser)
      .catch((err) => {
        setError(err.message);
        setUsers([...OriginalData]);
      });
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}

      <ul className="list-group">
        {users.length > 0 &&
          users.map((user, i) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={user.id}
            >
              {user.name}
              <div>
                <button
                  key={user.id}
                  onClick={() => userUpdate(user)}
                  className="btn btn-outline-secondary mx-2"
                >
                  Update
                </button>
                <button
                  key={user.id}
                  onClick={() => userDelete(user)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>

      {/* <select name="" onChange={(event)=>SetCategory(event.target.value)} id="" className="form-select">
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">Household</option>

      </select>
      <ProductList category={category} /> */}

      {/* <ExpenseTracker /> */}

      {/* this was the last practices */}

      {/* <Form />
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

      <ListGroup items={items} heading="Food" onSelectItem={handleSelectItem} /> */}
    </div>
  );
}

export default App;
