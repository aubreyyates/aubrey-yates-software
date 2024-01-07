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

const Squares1 = () => {
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
        <g filter="url(#filter0_d_4_69)">
          <rect x="88" y="42" width="36" height="36" fill={theme.palette.primary.main} />
          <rect x="130" y="84" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.26" />
          <rect x="172" y="84" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="46" y="126" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="46" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="256" y="42" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.07" />
          <rect x="382" y="84" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.07" />
          <rect x="214" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="4" y="42" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="4" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="4" y="126" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="88" y="210" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="46" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="88" y="252" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.04" />
          <rect x="46" y="168" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="46" y="84" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.36" />
          <rect x="46" y="42" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="88" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="88" y="126" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="88" y="84" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="130" y="168" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.08" />
          <rect x="130" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="172" y="42" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="172" y="126" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="214" y="127" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.05" />
          <rect x="130" y="210" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.05" />
          <rect x="214" y="294" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.05" />
          <rect x="130" y="210" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.05" />
          <rect x="172" y="168" width="36" height="36" fill={theme.palette.primary.main} className="glow-2" />
          <rect x="214" y="84" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="130" y="126" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.15" />
          <rect x="130" y="42" width="36" height="36" fill={theme.palette.primary.main} fillOpacity="0.23" />
        </g>
        <defs>
          <filter id="filter0_d_4_69" x="0" y="0" width="422" height="338" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_69" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_69" result="shape" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Squares1;
