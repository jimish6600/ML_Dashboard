import React from "react";

const UpcomingMatches = () => {
  // Dummy data for upcoming matches
  const upcomingMatches = [
    {
      id: 1,
      team1: "Team A",
      team2: "Team B",
      date: "2024-04-05",
      location: "Stadium X",
    },
    {
      id: 2,
      team1: "Team C",
      team2: "Team D",
      date: "2024-04-10",
      location: "Stadium Y",
    },
    // Add more matches as needed
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Upcoming Matches</h2>
      {upcomingMatches.map((match) => (
        <div key={match.id} className="mb-6">
          <div className="flex items-center justify-between">
            <h3>
              {match.team1} vs {match.team2}
            </h3>
            <p>
              <strong>Date:</strong> {match.date}
            </p>
          </div>
          <p>
            <strong>Location:</strong> {match.location}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UpcomingMatches;
