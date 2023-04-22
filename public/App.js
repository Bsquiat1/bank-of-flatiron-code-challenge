import React, { useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import axios from "axios";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  // Fetch bots from server on component mount
  React.useEffect(() => {
    axios.get("http://localhost:3000/bots").then((response) => {
      setBots(response.data);
    });
  }, []);

  // Add bot to enlistedBots
  const enlistBot = (bot) => {
    if (!enlistedBots.includes(bot)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  // Remove bot from enlistedBots
  const releaseBot = (bot) => {
    const index = enlistedBots.indexOf(bot);
    if (index > -1) {
      const newEnlistedBots = [...enlistedBots];
      newEnlistedBots.splice(index, 1);
      setEnlistedBots(newEnlistedBots);
    }
  };

  // Delete bot from server and enlistedBots
  const deleteBot = (bot) => {
    axios.delete(`http://localhost:3000/bots/${bot.id}`).then(() => {
      const index = enlistedBots.indexOf(bot);
      if (index > -1) {
        const newEnlistedBots = [...enlistedBots];
        newEnlistedBots.splice(index, 1);
        setEnlistedBots(newEnlistedBots);
      }
      const newBots = bots.filter((b) => b.id !== bot.id);
      setBots(newBots);
    });
  };

  return (
    <div className="App">
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} deleteBot={deleteBot} />
    </div>
  );
}

export default App;
