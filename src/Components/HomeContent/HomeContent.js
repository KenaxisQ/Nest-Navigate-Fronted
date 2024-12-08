import React, { useState } from 'react';
import './HomeContent.css'
export default function HomeContent() {
  const filters = ['Buy', 'Rent', 'PG/Coliving', 'Commercial', 'Plot/Land'];
  const [selectedFilter, setSelectedFilter] = useState('Buy'); // Default selected filter
  const [type, setType] = useState('All'); // For second dropdown
  const [keywords, setKeywords] = useState(''); // For search input
  const [category, setCategory] = useState('Buy'); // For first dropdown

  const handleSearch = () => {
    const apiData = {
      selectedFilter,
      category,
      type,
      keywords,
    };
    console.log('API Call Data:', apiData);
    // Make your API call here, e.g., axios.post('/api/endpoint', apiData);
  };
  return (
    <div className='container homeContentBody'>
      <p>From as low as $10 per day with limited time offer discounts.</p>
      <br/>
      <h1>Simplifying Real Estate in Srikakulam<br/>Find your Perfect Place with Next Navigators </h1>
      <div className='filterProperties'>
      {filters.map((filter) => (
        <div
          key={filter}
          className={`propertyFilter ${selectedFilter === filter ? 'selectedFilter' : ''}`}
          onClick={() => setSelectedFilter(filter)}
        >
          {filter}
        </div>
      ))}
      </div>
        <div className='searchSectionWrapper row'>
        <div className='categoryWapper selectWrapper col-lg-1'>
        <select
            className='selectBox'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Buy</option>
            <option>Rent</option>
            <option>PG/Coliving</option>
            <option>Commercial</option>
            <option>Plot/Land</option>
          </select>
        </div>
        <div className='selectWrapper col-lg-3'>
        <select
            className='selectBox'
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>All</option>
            <option>Land</option>
            <option>House</option>
            <option>Apartment/Flat</option>
          </select>
        </div>
        <div className='searchBoxWrapper col-lg-6'>
        <input
            type='text'
            placeholder='Enter Keywords'
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>
        <div className='searchButtonWrapper col-lg-2'>
        <button className='btn btn-primary searchButton' onClick={handleSearch}>
            Search
          </button>        </div>
        </div>
        <div className='Gap_150'>

        </div>
    </div>
  )
}
