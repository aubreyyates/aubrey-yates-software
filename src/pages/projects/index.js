// material-ui
import { Grid, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { useState } from 'react';

import projects from './projects';

// project import
import ProjectCard from './ProjectCard';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';

const Projects = () => {
  const [filter, setFilter] = useState('technology');
  const [technology, setTechnology] = useState('any');
  const [year, setYear] = useState('any');
  const [size, setSize] = useState('any');

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleChangeTechnology = (event) => {
    setTechnology(event.target.value);
  };

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  const getFilteredProjects = () => {
    if (technology === 'any') {
      return projects;
    }
    return projects.filter((project) => project.technologies.includes(technology));
  };

  return (
    <ComponentSkeleton>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant="h3">Projects</Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <FormControl variant="outlined" style={{ width: '120px' }}>
            <InputLabel id="technology-filter-label" style={{ background: 'transparent' }}>
              Filter
            </InputLabel>
            <Select labelId="technology-filter-label" value={filter} label="Technology" onChange={handleChangeFilter}>
              <MenuItem value="technology">Technology</MenuItem>
              {/* <MenuItem value="year">Year</MenuItem>
              <MenuItem value="size">Size</MenuItem> */}
            </Select>
          </FormControl>
          {filter === 'technology' && (
            <FormControl variant="outlined" style={{ width: '100px' }} sx={{ ml: 2 }}>
              <InputLabel id="technology-filter-label" style={{ background: 'transparent' }}>
                Technology
              </InputLabel>
              <Select labelId="technology-filter-label" value={technology} label="Technology" onChange={handleChangeTechnology}>
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="react">React JS</MenuItem>
                <MenuItem value="dotnet">.NET</MenuItem>
                <MenuItem value="php">PHP</MenuItem>
              </Select>
            </FormControl>
          )}
          {filter === 'year' && (
            <FormControl variant="outlined" style={{ width: '100px' }} sx={{ ml: 2 }}>
              <InputLabel id="year-filter-label" style={{ background: 'transparent' }}>
                Year
              </InputLabel>
              <Select labelId="year-filter-label" value={year} label="Year" onChange={handleChangeYear}>
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="2023">2023</MenuItem>
                <MenuItem value="2022">2022</MenuItem>
                <MenuItem value="2021">2021</MenuItem>
                <MenuItem value="2020">2020</MenuItem>
                <MenuItem value="2019">2019</MenuItem>
                <MenuItem value="2018">2018</MenuItem>
                <MenuItem value="2017">2017</MenuItem>
              </Select>
            </FormControl>
          )}
          {filter === 'size' && (
            <FormControl variant="outlined" style={{ width: '100px' }} sx={{ ml: 2 }}>
              <InputLabel id="size-filter-label" style={{ background: 'transparent' }}>
                Size
              </InputLabel>
              <Select labelId="size-filter-label" value={size} label="Size" onChange={handleChangeSize}>
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="react-js">Large</MenuItem>
                <MenuItem value="dotnet">Medium</MenuItem>
                <MenuItem value="php">Small</MenuItem>
              </Select>
            </FormControl>
          )}
        </Grid>
        {getFilteredProjects().map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </ComponentSkeleton>
  );
};

export default Projects;
