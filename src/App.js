import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import TopComponent from "./components/TopComponent";
import MiddleComponent from "./components/MiddleComponent";
import BottomComponent from "./components/BottomComponent";
import { Main, DevFinder } from "./style-components/styles";

function App() {
  const [user, setUser] = useState({});
  const [change, setChange] = useState(false);
  const [input, setInput] = useState("");

  const getUser = async (search) => {
    const octokit = new Octokit();
    try {
      const me = await octokit.request(`GET /users/${`octocat` || { search }}`);
      console.log(me);
      const userData = { ...me.data };
      setUser(userData);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const octokit = new Octokit();
    try {
      const me = await octokit.request(`GET /users/${input}`);

      const userData = { ...me.data };
      setUser(userData);
    } catch (err) {
      console.log(err);
    }
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const toggleTheme = (e) => {
    e.preventDefault();
    setChange(!change);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Main change={change}>
      <DevFinder>
        <TopComponent toggleTheme={toggleTheme} change={change} />
        <MiddleComponent
          change={change}
          onSubmit={onSubmit}
          onChange={onChange}
          user={user}
        />
        <BottomComponent user={user} change={change} />
      </DevFinder>
    </Main>
  );
}

export default App;
