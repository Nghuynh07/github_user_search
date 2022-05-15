import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import TopComponent from "./components/TopComponent";
import MiddleComponent from "./components/MiddleComponent";
import BottomComponent from "./components/BottomComponent";
import { Main, DevFinder } from "./style-components/styles";

function App() {
  const [user, setUser] = useState({});
  const [change, setChange] = useState(false);

  const getUser = async () => {
    const octokit = new Octokit({
      auth: "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",
    });
    try {
      const me = await octokit.request("GET /users/nghuynh07", {});
      // console.log(me);
      setUser(me.data);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleTheme = (e) => {
    console.log(e);
    setChange(!change);
  };

  console.log(change);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Main change={change}>
      <DevFinder>
        <TopComponent toggleTheme={toggleTheme} change={change} />
        <MiddleComponent change={change} />
        <BottomComponent user={user} change={change} />
      </DevFinder>
    </Main>
  );
}

export default App;
