import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Searchbar({ onFilter }) {

const [searchLocation, setSearchLocation] = useState('');



const handleLocationChange = (e) => {
  setSearchLocation(e.target.value);
  
};

const handleSubmit = (e) => {
   e.preventDefault();
  onFilter(searchLocation);
  console.log(onFilter)
  };

  
  return (
    <div className=" my-20 flex text-center justify-center items-center rounded-md  h-10 text-sm font-semibold text-black shadow-sm  ">
      <form onSubmit={handleSubmit} className='flex'>
      <input
        type="text"
        id="searchLocation"
        placeholder="Enter city..."
        value={searchLocation}
        onChange={handleLocationChange}
        className="block border-solid w-80 px-4 py-2  rounded-lg focus:outline-none focus:border-blue-500"
            />
      <button className='block w-32 px-4 py-2 border-none rounded-md focus:outline-none hover:border-blue-500'>submit</button>
       </form>
    </div>
  )
}

Searchbar.propTypes = {
    onFilter: PropTypes.func.isRequired,
  };


