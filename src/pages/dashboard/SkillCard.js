import { useTheme } from '@mui/material/styles';

const SkillCard = () => {
  const theme = useTheme();
  return <div style={{ background: theme.palette.primary.darker, borderRadius: '5px;', height: '200px' }}></div>;
};

export default SkillCard;
