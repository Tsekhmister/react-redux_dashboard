import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/position_selectors';
import { selectFilters } from 'store/filters/filter_selectors';

import { addFilter } from 'store/filters/filter_actions';


const JobList = () => {
  const disoatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector(state =>  selectVisiblePositions(state, currentFilters));

  const  handleAddFilter = (filter) => {
    disoatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition 
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  )
}

export {JobList};