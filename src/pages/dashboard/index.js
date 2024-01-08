// import { useOutletContext } from 'react-router-dom';

import { Grid, useMediaQuery, Box } from '@mui/material';

// import ThreeComponent from 'components/ThreeComponent';
import HomeOverlay from './HomeOverlay';
import CodeSnippetContainer from './CodeSnippetContainer';
import SkillCard from './SkillCard';

import snippet1 from './codeSnippets/1.js';
import snippet2 from './codeSnippets/2.js';
// import line1 from './svg/line-1.svg';
import line5 from './svg/line-5.svg';
import line3 from './svg/line-3.svg';
// import gear1 from './svg/gear-1.svg';
import Squares1 from './svgComponents/squares1';
import Squares2 from './svgComponents/squares2';
import Squares3 from './svgComponents/squares3';
import Squares4 from './svgComponents/squares4';
import Squares1Mini from './svgComponents/squares1Mini';
import Squares2Mini from './svgComponents/squares2Mini';
import Squares4Mini from './svgComponents/squares4Mini';
import Squares3Mini from './svgComponents/squares3Mini';
import './Animation.css';
import Line from './svgComponents/line';
import { Typography } from '../../../node_modules/@mui/material/index';
import Reveal from './Reveal';
import Gear1 from './svgComponents/gear1';
// import DotNet from 'components/technologyCards/DotNet';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  // const drawerOpen = useOutletContext();
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const dotNetImagePath = require(`assets/images/icons/dotnet.png`);
  const reactImagePath = require(`assets/images/icons/react.png`);
  const electronImagePath = require(`assets/images/icons/electron.png`);

  return (
    <Grid sx={{ pt: 1 }}>
      <Grid style={{ height: '800px', position: 'relative', borderBottom: '2px solid #303841' }}>
        {/* <ThreeComponent></ThreeComponent> */}
        <Grid container>
          <Grid item xs={6}>
            <div style={{ height: '450px' }}>{matchDownSM ? <Squares1Mini /> : <Squares1 />}</div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ height: '450px', display: 'flex', justifyContent: 'flex-end' }}>
              {matchDownSM ? <Squares2Mini /> : <Squares2 />}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ height: '350px' }}>{matchDownSM ? <Squares3Mini /> : <Squares3 />}</div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ height: '350x', display: 'flex', justifyContent: 'flex-end' }}>
              {matchDownSM ? <Squares4Mini /> : <Squares4 />}
            </div>
          </Grid>
        </Grid>
        <HomeOverlay></HomeOverlay>
      </Grid>
      <Grid style={{ height: '900px' }}>
        <Grid sx={{ width: { xs: '80%', sm: '600px', md: '800px' }, marginLeft: 'auto', marginRight: 'auto' }}>
          <Grid sx={{ paddingLeft: { xs: '75%', md: '600px' }, height: '100px' }}>
            <img src={line3} alt="line3" />
          </Grid>

          <CodeSnippetContainer code={snippet1} />
          <Grid container sx={{ height: '400px' }}>
            <Grid item xs={3} md={4} sx={{ paddingLeft: { xs: '40px', md: '120px' } }}>
              <Line></Line>
            </Grid>
            <Grid item xs={9} md={8} sx={{ pl: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Reveal>
                <Typography varient="h3" sx={{ fontSize: '22px' }}>
                  I have been building software for seven years.
                </Typography>
                <Typography varient="p" sx={{ color: '#76879b' }}>
                  I have worked with front-end and back-end technologies. I have built everything, from databases and APIs, to UIs.
                </Typography>
              </Reveal>
            </Grid>
          </Grid>
          <CodeSnippetContainer code={snippet2} height="185px" />
          <Grid container>
            <Grid item xs={3} md={4} sx={{ paddingLeft: { xs: '40px', md: '120px' }, height: '700px', position: 'relative' }}>
              <img src={line5} alt="line5" />
              <Box sx={{ position: 'absolute', top: '342.3px', left: { xs: '51px', md: '131px' } }}>
                <Gear1 />
              </Box>
            </Grid>
            <Grid item xs={9} md={8}>
              <Grid>
                <Grid item xs={12} sx={{ pl: 4, mt: { xs: 9, md: 21 }, height: { xs: '238px', md: '143px' } }}>
                  <Reveal>
                    <Typography varient="h3" sx={{ fontSize: '22px' }}>
                      I have experience in major frameworks.
                    </Typography>
                    <Typography varient="p" sx={{ color: '#76879b' }}>
                      I have extensive experience in frameworks such as, ASP.NET Core, React, and Electron JS. These frameworks help build
                      scalable and robust applications.
                    </Typography>
                  </Reveal>
                </Grid>
                <Grid container>
                  <Grid item xs={6} md={4} sx={{ pl: 4, pb: 2 }}>
                    <Reveal>
                      <SkillCard>
                        <img
                          style={{ width: '100%', borderRadius: '4px', boxShadow: '6px 6px 12px 0px rgba(0,0,0,0.75)' }}
                          src={dotNetImagePath}
                          alt="dotnet-icon"
                        ></img>
                      </SkillCard>
                    </Reveal>
                  </Grid>
                  <Grid item xs={6} md={4} sx={{ pl: 4, pb: 2 }} className="slide-in">
                    <Reveal>
                      <SkillCard>
                        <img
                          style={{ width: '100%', borderRadius: '4px', boxShadow: '6px 6px 12px 0px rgba(0,0,0,0.75)' }}
                          src={reactImagePath}
                          alt="react-icon"
                        ></img>
                      </SkillCard>
                    </Reveal>
                  </Grid>
                  <Grid item xs={6} md={4} sx={{ pl: 4, pb: 2 }} className="slide-in">
                    <Reveal>
                      <SkillCard>
                        <img
                          style={{ width: '100%', borderRadius: '4px', boxShadow: '6px 6px 12px 0px rgba(0,0,0,0.75)' }}
                          src={electronImagePath}
                          alt="electron-icon"
                        ></img>
                      </SkillCard>
                    </Reveal>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid container sx={{ pl: 10, pr: 10 }}>
          <Grid item xs={12} md={3} sx={{ p: 2 }}>
            <SkillCard />
          </Grid>
          <Grid item xs={12} md={3} sx={{ p: 2 }}>
            B
          </Grid>
          <Grid item xs={12} md={3} sx={{ p: 2 }}>
            C
          </Grid>
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
