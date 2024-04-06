// import React from "react";

// const PlayerModal = ({ player, closeModal }) => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
//       <div className="bg-white p-4 rounded-lg">
//         <h2 className="text-xl font-semibold mb-2">{player.name}</h2>
//         <p>{player.details}</p>
//         <button
//           className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//           onClick={closeModal}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PlayerModal;

import React from "react";

const PlayerModal = ({ player, closeModal }) => {
  // Function to extract all details of the player
  const renderPlayerDetails = () => {
    // Check if player is valid
    if (!player) return null;

    // Initialize an array to store JSX elements for each detail
    const playerDetails = [];

    // Iterate over each attribute of the player
    for (const [key, value] of Object.entries(player)) {
      // Exclude the "id" attribute from displaying in the modal
      if (key !== "id") {
        // Create JSX for each attribute and push it to the array
        playerDetails.push(
          <p key={key} className="mb-2">
            <span className="font-semibold">{key}:</span> {value}
          </p>
        );
      }
    }

    return playerDetails;
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">{player.name}</h2>
        {renderPlayerDetails()}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PlayerModal;
