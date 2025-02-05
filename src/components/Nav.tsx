import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <ul>
      <li>
        <Link to='/'>
        Search
        </Link>
      </li>
      <li>
        <Link to='/SavedCandidates'>
        Potential Candidates
        </Link>
      </li>
    </ul>
  )
};

export default Nav;