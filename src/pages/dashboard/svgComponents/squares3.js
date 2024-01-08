// material-ui
import { useTheme } from '@mui/material/styles';
import './glow.css';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// import logo from 'assets/images/logo/ay-software-7.svg';

// ==============================|| LOGO SVG ||============================== //

const Squares3 = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
      <svg width="422" height="338" viewBox="0 0 422 338" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_7_257)">
          <rect width="36" height="36" transform="matrix(1 0 0 -1 88 330)" fill={theme.palette.primary.main} fillOpacity="0.88" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 172 246)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 88 204)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 46 330)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 256 288)" fill={theme.palette.primary.main} className="glow-3" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 172 330)" fill={theme.palette.primary.main} fillOpacity="0.39" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 340 330)" fill={theme.palette.primary.main} fillOpacity="0.07" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 340 288)" fill={theme.palette.primary.main} fillOpacity="0.07" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 382 330)" fill={theme.palette.primary.main} fillOpacity="0.07" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 214 330)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 4 288)" fill={theme.palette.primary.main} fillOpacity="0.29" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 4 330)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 4 204)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 46 162)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 46 246)" fill={theme.palette.primary.main} fillOpacity="0.36" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 88 246)" fill={theme.palette.primary.main} className="glow-3" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 172 288)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 298 203)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 298 162)" fill={theme.palette.primary.main} fillOpacity="0.06" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 88 288)" fill={theme.palette.primary.main} className="glow-5" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 46 120)" fill={theme.palette.primary.main} className="glow-5" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 130 246)" fill={theme.palette.primary.main} fillOpacity="0.05" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 256 78)" fill={theme.palette.primary.main} fillOpacity="0.06" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 214 120)" fill={theme.palette.primary.main} fillOpacity="0.2" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 172 36)" fill={theme.palette.primary.main} fillOpacity="0.03" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 130 288)" fill={theme.palette.primary.main} fillOpacity="0.23" />
        </g>
        <defs>
          <filter id="filter0_d_7_257" x="0" y="0" width="422" height="338" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_257" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_257" result="shape" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Squares3;
