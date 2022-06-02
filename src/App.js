import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { Header } from 'components/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addPositions } from './store/positions/position_actions';

import data from './mock/data.json';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data))
  });

  return (
    <>
     <Header />
     <div className='container'>
       <FilterPanel />
       <JobList />
     </div>
    </>
  );
}

export default App;
