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

  return (
    <ComponentSkeleton>
      <Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ p: { xs: 2, sm: 3 } }}>
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
              <MenuItem value="year">Year</MenuItem>
              <MenuItem value="size">Size</MenuItem>
            </Select>
          </FormControl>
          {filter === 'technology' && (
            <FormControl variant="outlined" style={{ width: '100px' }} sx={{ ml: 2 }}>
              <InputLabel id="technology-filter-label" style={{ background: 'transparent' }}>
                Technology
              </InputLabel>
              <Select labelId="technology-filter-label" value={technology} label="Technology" onChange={handleChangeTechnology}>
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="react-js">React JS</MenuItem>
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
                <MenuItem value="react-js">2023</MenuItem>
                <MenuItem value="dotnet">2022</MenuItem>
                <MenuItem value="php">2021</MenuItem>
                <MenuItem value="php">2020</MenuItem>
                <MenuItem value="php">2019</MenuItem>
                <MenuItem value="php">2018</MenuItem>
                <MenuItem value="php">2017</MenuItem>
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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </ComponentSkeleton>
  );
};

export default Projects;
