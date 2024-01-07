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

const Squares4Mini = () => {
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
        <g filter="url(#filter0_d_16_369)">
          <rect
            x="124"
            y="288"
            width="36"
            height="36"
            transform="rotate(-180 124 288)"
            fill={theme.palette.primary.main}
            fillOpacity="0.44"
          />
          <rect
            x="82"
            y="204"
            width="36"
            height="36"
            transform="rotate(-180 82 204)"
            fill={theme.palette.primary.main}
            fillOpacity="0.04"
          />
          <rect
            x="166"
            y="288"
            width="36"
            height="36"
            transform="rotate(-180 166 288)"
            fill={theme.palette.primary.main}
            fillOpacity="0.35"
          />
          <rect
            x="166"
            y="330"
            width="36"
            height="36"
            transform="rotate(-180 166 330)"
            fill={theme.palette.primary.main}
            fillOpacity="0.15"
          />
          <rect
            x="82"
            y="330"
            width="36"
            height="36"
            transform="rotate(-180 82 330)"
            fill={theme.palette.primary.main}
            fillOpacity="0.15"
          />
          <rect
            x="40"
            y="246"
            width="36"
            height="36"
            transform="rotate(-180 40 246)"
            fill={theme.palette.primary.main}
            fillOpacity="0.15"
          />
          <rect
            x="166"
            y="246"
            width="36"
            height="36"
            transform="rotate(-180 166 246)"
            fill={theme.palette.primary.main}
            fillOpacity="0.03"
          />
          <rect
            x="166"
            y="162"
            width="36"
            height="36"
            transform="rotate(-180 166 162)"
            fill={theme.palette.primary.main}
            fillOpacity="0.03"
          />
          <rect
            x="124"
            y="120"
            width="36"
            height="36"
            transform="rotate(-180 124 120)"
            fill={theme.palette.primary.main}
            fillOpacity="0.08"
          />
          <rect
            x="166"
            y="36"
            width="36"
            height="36"
            transform="rotate(-180 166 36)"
            fill={theme.palette.primary.main}
            fillOpacity="0.16"
          />
          <rect
            x="124"
            y="330"
            width="36"
            height="36"
            transform="rotate(-180 124 330)"
            fill={theme.palette.primary.main}
            fillOpacity="0.3"
          />
          <rect
            x="166"
            y="78"
            width="36"
            height="36"
            transform="rotate(-180 166 78)"
            fill={theme.palette.primary.main}
            fillOpacity="0.03"
          />
        </g>
        <defs>
          <filter id="filter0_d_16_369" x="0" y="0" width="170" height="338" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_369" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_369" result="shape" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Squares4Mini;
