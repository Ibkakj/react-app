import Alert from "./component/Alert";
import { useState } from "react";
import Button from "./component/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    //<div>
    //<Alert text="Hello World" />
    // </div>
    //<div>
    //<Alert>
    // Hello <span>World</span>
    //</Alert>
    //</div>
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          What are you looking for!!
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisible(true)}>
        Download{" "}
      </Button>
    </div>
  );
}

export default App;
