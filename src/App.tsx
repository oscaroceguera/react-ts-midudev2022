import React, { useEffect, useState, useRef } from "react";
import "./App.css";

import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";

interface AppState {
  subs: Array<Sub>;
}

const initial_state = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "dapelu es aalguien que hace cosas",
  },
  {
    nick: "oscar",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=oscara",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(initial_state);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Midu subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
