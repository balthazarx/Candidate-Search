import React from "react";
import { useCandidateContext } from "../context/CandidateContext";

const SavedCandidates: React.FC = () => {
  const { savedCandidates } = useCandidateContext();
  
  return (
    <div>
      <h1>Potential Candidates</h1>
      <table>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.id}> 
              <td>
                <img src={candidate.avatar_url} alt={candidate.login} />
              </td>
              <td>
                <h3>{candidate.login}</h3>
                <a href={candidate.html_url} target="_blank" rel="noreferrer">
                  View Profile
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;