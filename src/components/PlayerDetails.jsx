// import React from "react";

// const PlayerDetails = ({ player }) => {
//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-bold mb-4">{player.name}'s Details</h2>
//       <table className="table-auto w-full">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Game Score</th>
//             <th className="px-4 py-2">Sleep Score</th>
//             <th className="px-4 py-2">RSI Mode</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border px-4 py-2">{player.gameScore}</td>
//             <td className="border px-4 py-2">{player.sleepScore}</td>
//             <td className="border px-4 py-2">{player.rsiMode}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PlayerDetails;
// import React from "react";

// const PlayerDetails = ({ player }) => {
//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-bold mb-4">{player.name}'s Details</h2>
//       <table className="table-auto w-full">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Game Score</th>
//             <th className="px-4 py-2">Sleep Score</th>
//             <th className="px-4 py-2">RSI Mode</th>
//             {/* New columns */}
//             <th className="px-4 py-2">Age</th>
//             <th className="px-4 py-2">Height</th>
//             <th className="px-4 py-2">Weight</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border px-4 py-2">{player.gameScore}</td>
//             <td className="border px-4 py-2">{player.sleepScore}</td>
//             <td className="border px-4 py-2">{player.rsiMode}</td>
//             {/* New cells */}
//             <td className="border px-4 py-2">{player.age}</td>
//             <td className="border px-4 py-2">{player.height}</td>
//             <td className="border px-4 py-2">{player.weight}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PlayerDetails;

import React from "react";

const PlayerDetails = ({ player }) => {
  // Get all the keys of player object except 'id' and 'name'
  const dataFields = Object.keys(player).filter(
    (key) => key !== "id" && key !== "name"
  );

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{player.name}'s Details</h2>

      <div className="mt-8 overflow-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              {/* Render column titles for each data field */}
              {dataFields.map((field) => (
                <th key={field} className="px-4 py-2 text-center bg-gray-200">
                  {field}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Render data for each data field */}
              {dataFields.map((field) => (
                <td key={field} className="border px-4 py-2 text-center">
                  <ul>
                    {/* Render each data point as a list item */}
                    {player[field].map((data, index) => (
                      <li key={index}>{data}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PlayerDetails;
