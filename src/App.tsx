import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { CandidateProvider } from './context/CandidateContext';

function App() {
  return (
    <>
      <Nav />
      <main>
        <CandidateProvider>
        <Outlet />
        </CandidateProvider>
      </main>
    </>
  );
}

export default App;