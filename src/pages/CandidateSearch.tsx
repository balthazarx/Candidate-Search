import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import { useCandidateContext } from '../context/CandidateContext';

const CandidateSearch: React.FC = () => {
  //create state variables for the candidates, the selected canditate, and loading
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const{ addCandidate } = useCandidateContext();
  

  //function to fetch a single candidate from the candidate list
  const fetchSingleCandidate = async (candidates: Candidate[]) => {
    const randomIndex = Math.floor(Math.random() * candidates.length);
    const candidate = candidates[randomIndex];
    const user = await searchGithubUser(candidate.login);
    return user as Candidate;
  }

  //functions to fetch a random set of candidates from the github API
  const fetchCandidates = async () => {
    setLoading(true);
    const candidates = await searchGithub();
    setCurrentCandidate(await fetchSingleCandidate(candidates));
    console.log(currentCandidate);
    setLoading(false);
  }

  //function to handle adding a canidate to savedCandidates
  const handleAddCandidate = () => {
    if (currentCandidate) {
      addCandidate(currentCandidate);
      fetchCandidates();
    }
  }

  //function to handle declining the candidate
  const handleDeclineCandidate = () => {
    fetchCandidates();
  }
 
  //useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchCandidates();
  }, []);

  //return the page
  return (
    <div>
      <h1>CandidateSearch</h1>
      {loading && <p>Loading...</p>}
  
      {!loading && currentCandidate && (
        <table>
          <tbody>
            <tr>
              <td>
                <img 
                  src={currentCandidate.avatar_url} 
                  alt={`${currentCandidate.login}'s avatar`} 
                />
              </td>
              <td>
                <h2>{currentCandidate.login}</h2>
                <p>Location: {currentCandidate.location}</p>
                <p>Email: {currentCandidate.email} </p>
                <p>Company: {currentCandidate.company}</p>
                <p>Bio: {currentCandidate.bio}</p>
                <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">
                  Github Profile
                </a>
                <div className='button-container'>
                  <button className='button button1' onClick={handleAddCandidate}>+</button>
                  <button className='button button2' onClick={handleDeclineCandidate}>-</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
  
      <div></div>
    </div>
  );
  
};

export default CandidateSearch;