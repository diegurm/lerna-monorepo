import React, { useEffect, useState } from "react";

import api from "@shared/common/src/services/api";

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      const response = await api.get("/users/diegurm");
      setUser(response.data);
    })();
  }, []);

  return (
    <div className="App">{user != null && <h1>Github = > {user.name}</h1>}</div>
  );
};

export default App;
