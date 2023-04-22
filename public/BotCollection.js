import React from "react";
import "./BotCollection.css";

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="BotCollection">
      <h2>Available Bots</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            {bot.name}{" "}
            <button onClick={() => enlistBot(bot)}>Enlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
