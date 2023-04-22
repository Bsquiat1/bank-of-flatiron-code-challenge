import React from "react";
// import "./YourBotArmy.css";

function YourBotArmy({ enlistedBots, releaseBot, deleteBot }) {
  return (
    <div className="YourBotArmy">
      <h2>Your Bot Army</h2>
      <ul>
        {enlistedBots.map((bot) => (
          <li key={bot.id}>
            {bot.name}{" "}
            <button onClick={() => releaseBot(bot)}>Release</button>
            <button onClick={() => deleteBot(bot)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;
