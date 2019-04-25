import React, { useState, useEffect } from 'react'

function Filters (props) {

  let {
    projects,
    setFilteredProjects
  } = props;

  let [selectedFilters, setSelectedFilters] = useState([]);
  let techList = [];

  projects.map(p => {
    return (p.technologies.map(t => {
      if (techList.indexOf(t) === -1) {
        techList.push(t);
        return t;
      }
      return;
    }));
  })

  const toggleFilter = e => {
    let target = e.target;
    if(target.classList.contains('selected')) {
      target.classList.remove('selected');
      setSelectedFilters(selectedFilters.filter(f => f != target.textContent))
    } else {
      target.classList.add('selected');
      setSelectedFilters([...selectedFilters, target.textContent])
    }
  }

  const clearFilters = () => {
    setSelectedFilters([]);
    let selected = document.querySelectorAll('.filter.selected')
    for (let s of selected) {
      s.classList.remove('selected');
    }
  }

  const filters = techList.map((t, i) => <span className="filter" key={i} onClick={toggleFilter}>{t}</span>);

  useEffect(() => {
    setFilteredProjects(projects.filter(p => selectedFilters.length > 0 ? p.technologies.find(t => selectedFilters.includes(t)) : projects));
  }, [selectedFilters])

  return (
      <div className="filter-container">
      <div className="filters">
        {filters}
      </div>
      <div className="clear" onClick={clearFilters}>Clear</div>
      </div>
  );
}

export default Filters;