// import { useOutletContext } from 'react-router-dom';

import { Grid, useMediaQuery } from '@mui/material';

// import ThreeComponent from 'components/ThreeComponent';
import HomeOverlay from './HomeOverlay';
import CodeSnippetContainer from './CodeSnippetContainer';
// import SkillCard from './SkillCard';

import snippet1 from './codeSnippets/1.js';
// import snippet2 from './codeSnippets/2.js';
// import line1 from './svg/line-1.svg';
// import line2 from './svg/line-2.svg';
import line3 from './svg/line-3.svg';
// import squares1 from './svg/squares-1.svg';
// import squares2 from './svg/squares-2.svg';
// import squares3 from './svg/squares-3.svg';
// import squares4 from './svg/squares-4.svg';
import Squares1 from './svgComponents/squares1';
import Squares2 from './svgComponents/squares2';
import Squares3 from './svgComponents/squares3';
import Squares4 from './svgComponents/squares4';
import Squares1Mini from './svgComponents/squares1Mini';
import Squares2Mini from './svgComponents/squares2Mini';
import Squares4Mini from './svgComponents/squares4Mini';
import Squares3Mini from './svgComponents/squares3Mini';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  // const drawerOpen = useOutletContext();
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('md'));

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
      <Grid style={{ height: '550px' }}>
        <Grid sx={{ width: { xs: '80%', sm: '600px', md: '800px' }, marginLeft: 'auto', marginRight: 'auto' }}>
          <Grid sx={{ paddingLeft: { xs: '75%', md: '600px' }, height: '100px' }}>
            <img src={line3} alt="line3" />
          </Grid>

          <CodeSnippetContainer code={snippet1} />
          {/* <div style={{ paddingLeft: '200px', height: '400px' }}>
            <img src={line1} alt="line1" />
          </div>
          <CodeSnippetContainer code={snippet2} />
          <div style={{ paddingLeft: '200px', height: '400px' }}>
            <img src={line2} alt="line2" />
          </div> */}
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
