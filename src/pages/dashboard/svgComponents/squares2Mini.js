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

const Squares2Mini = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
      <svg width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_16_357)">
          <rect width="36" height="36" transform="matrix(-1 0 0 1 124 42)" fill={theme.palette.primary.main} fillOpacity="0.44" />
          <rect width="36" height="36" transform="matrix(-1 0 0 1 82 126)" fill={theme.palette.primary.main} fillOpacity="0.04" />
          <rect width="36" height="36" transform="matrix(-1 0 0 1 166 42)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(-1 0 0 1 166 0)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(-1 0 0 1 82 0)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(-1 0 0 1 166 84)" fill={theme.palette.primary.main} fillOpacity="0.03" />
          <rect width="36" height="36" transform="matrix(-1 0 0 1 40 0)" fill={theme.palette.primary.main} fillOpacity="0.06" />
        </g>
        <defs>
          <filter id="filter0_d_16_357" x="0" y="0" width="170" height="170" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_357" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_357" result="shape" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Squares2Mini;
