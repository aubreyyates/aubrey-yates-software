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

const Squares3Mini = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
      <svg width="170" height="338" viewBox="0 0 170 338" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_16_387)">
          <rect width="36" height="36" transform="matrix(1 0 0 -1 46 330)" fill={theme.palette.primary.main} fillOpacity="0.44" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 88 204)" fill={theme.palette.primary.main} fillOpacity="0.04" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 4 288)" fill={theme.palette.primary.main} fillOpacity="0.12" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 88 162)" fill={theme.palette.primary.main} fillOpacity="0.12" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 130 162)" fill={theme.palette.primary.main} fillOpacity="0.12" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 46 78)" fill={theme.palette.primary.main} fillOpacity="0.53" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 88 78)" fill={theme.palette.primary.main} fillOpacity="0.12" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 4 330)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 88 330)" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 46 246)" fill={theme.palette.primary.main} fillOpacity="0.03" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 4 204)" fill={theme.palette.primary.main} fillOpacity="0.03" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 46 120)" fill={theme.palette.primary.main} fillOpacity="0.08" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 88 36)" fill={theme.palette.primary.main} fillOpacity="0.05" />
          <rect width="36" height="36" transform="matrix(1 0 0 -1 4 78)" fill={theme.palette.primary.main} fillOpacity="0.03" />
        </g>
        <defs>
          <filter id="filter0_d_16_387" x="0" y="0" width="170" height="338" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_387" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_387" result="shape" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Squares3Mini;
