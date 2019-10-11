import React from 'react';

const TournamentMatches: React.FC = (data) => {

  return (
    <div className="Tournament_Matches">
      <div className="league-header">
        <h4>Video game: gamename (played on) matchup tournament name #number country</h4>
        <p>03/21/2020</p>
      </div>

      <div className="match-container">
        <div className="filter-container">

        </div>

        <div className="league-results">

          <div className="time-container">

          </div>

          <div className="team-result">
            <div className="name">
              
            </div>
            <div className="score">
              
            </div>
          </div>

          <div className="team-result">
            <div className="name">
              
            </div>
            <div className="score">
              
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default TournamentMatches;
