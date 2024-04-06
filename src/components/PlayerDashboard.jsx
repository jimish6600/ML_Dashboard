// import React, { useState } from "react";
// import PlayerModal from "./PlayerModal";

// const PlayerDashboard = () => {
//   const [selectedPlayer, setSelectedPlayer] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Mock data for players
//   const players = [
//     {
//       id: 1,
//       name: "Rohit",
//       details:
//         "Rohit is a skilled player with exceptional speed and agility. He has been a key player for his team, contributing significantly to their victories.",
//       age: 28,
//       role: "Bowler",
//       country: "India",
//       matchesPlayed: 150,
//       runsScored: 2000,
//       wicketsTaken: 180,
//     },
//     {
//       id: 2,
//       name: "Virat",
//       details:
//         "Virat is a world-class batsman known for his aggressive batting style and impeccable technique. He has led his team to numerous victories with his outstanding leadership skills.",
//       age: 33,
//       role: "Batsman",
//       country: "India",
//       matchesPlayed: 200,
//       runsScored: 10000,
//       wicketsTaken: 10,
//     },
//     {
//       id: 3,
//       name: "Hardik",
//       details:
//         "Hardik is a versatile all-rounder who excels in both batting and bowling. He has the ability to turn the game around with his powerful hitting and crucial wickets.",
//       age: 27,
//       role: "All-Rounder",
//       country: "India",
//       matchesPlayed: 100,
//       runsScored: 3000,
//       wicketsTaken: 150,
//     },
//     {
//       id: 4,
//       name: "do 4",
//       details:
//         "Player 4 is a talented young cricketer who is making waves in the cricketing world with his impressive performances. He has a bright future ahead and is expected to achieve great success in his career.",
//       age: 25,
//       role: "Batsman",
//       country: "Australia",
//       matchesPlayed: 50,
//       runsScored: 1500,
//       wicketsTaken: 5,
//     },
//     // Add more players as needed
//   ];

//   const handlePlayerClick = (player) => {
//     setSelectedPlayer(player);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">Player Dashboard</h1>
//       <div className="grid grid-cols-3 gap-4">
//         {players.map((player) => (
//           <div
//             key={player.id}
//             className="bg-gray-200 p-4 rounded cursor-pointer"
//             onClick={() => handlePlayerClick(player)}
//           >
//             {player.name}
//           </div>
//         ))}
//       </div>
//       {isModalOpen && selectedPlayer && (
//         <PlayerModal player={selectedPlayer} closeModal={closeModal} />
//       )}
//     </div>
//   );
// };

// export default PlayerDashboard;

// import React, { useState } from "react";
// import PlayerDetails from "./PlayerDetails";

// const PlayerDashboard = () => {
//   const [selectedPlayer, setSelectedPlayer] = useState(null);

//   // Data for players
//   const playersData = [
//     {
//       id: "1",
//       name: "Player 1",
//       GameScore: [80, 85, 90],
//       sleepScore: [80, 85, 90],
//       RSIMODE: [80, 85, 90],
//       Perfomance: [80, 85, 90],
//     },
//     {
//       id: "2",
//       name: "Player 2",
//       GameScore: [80, 85, 90],
//       sleepScore: [80, 85, 90],
//       RSIMODE: [80, 85, 90],
//       Perfomance: [80, 85, 90],
//     },
//     // Add more players as needed
//   ];
//   const handlePlayerSelect = (event) => {
//     const playerId = event.target.value;
//     setSelectedPlayer(playersData.find((player) => player.id === playerId));
//   };

//   return (
//     <div className="container mx-auto">
//       <div className="mt-8">
//         <h1 className="text-2xl font-bold mb-4">Player Dashboard</h1>
//         <select
//           onChange={handlePlayerSelect}
//           className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         >
//           <option value="">Select a Player</option>
//           {playersData.map((player) => (
//             <option key={player.id} value={player.id}>
//               {player.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectedPlayer && <PlayerDetails player={selectedPlayer} />}
//     </div>
//   );
// };

// export default PlayerDashboard;

import React, { useState } from "react";
import PlayerDetails from "./PlayerDetails";

const PlayerDashboard = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Data for players
  const playersData = [
    {
      id: "1",
      name: "Player 1",
      GameScore: [80, 85, 90],
      sleepScore: [80, 85, 90],
      RSIMODE: [80, 85, 90],
      Perfomance: [80, 85, 90],
      GameScore1: [80, 85, 90],
      sleepScore1: [80, 85, 90],
      RSIMODE1: [80, 85, 90],
      Perfomance1: [80, 85, 90],
      GameScore2: [80, 85, 90],
      sleepScore2: [80, 85, 90],
      RSIMODE2: [80, 85, 90],
      Perfomance2: [80, 85, 90],
      GameScore3: [80, 85, 90],
      sleepScore3: [80, 85, 90],
      RSIMODE3: [80, 85, 90],
      Perfomance3: [80, 85, 90],
    },
    {
      id: "2",
      name: "Player 2",
      GameScore: [80, 85, 90],
      sleepScore: [80, 85, 90],
      RSIMODE: [80, 85, 90],
      Perfomance: [80, 85, 90],
    },
    // Add more players as needed
  ];

  const handlePlayerSelect = (event) => {
    const playerId = event.target.value;
    setSelectedPlayer(playersData.find((player) => player.id === playerId));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Player Dashboard</h1>
      <div className="flex justify-center">
        <select
          onChange={handlePlayerSelect}
          className="block w-64 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select a Player</option>
          {playersData.map((player) => (
            <option key={player.id} value={player.id}>
              {player.name}
            </option>
          ))}
        </select>
      </div>
      {selectedPlayer && <PlayerDetails player={selectedPlayer} />}
    </div>
  );
};

export default PlayerDashboard;
