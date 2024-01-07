import { useTheme } from '@mui/material/styles';
// import CodeSnippet from 'components/CodeSnippet'
import { sublime } from '@uiw/codemirror-theme-sublime';
// import { csharp } from '@codemirror/lang-csharp';
import CodeMirror from '@uiw/react-codemirror';
import { csharp } from '@replit/codemirror-lang-csharp';
import { Box, Typography } from '../../../node_modules/@mui/material/index';
import { useState } from 'react';
import { useEffect } from 'react';

const CodeSnippetContainer = ({ code, speed = 50 }) => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < code.length) {
      const timer = setTimeout(() => setIndex(index + 1), speed);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div>
      <Box
        sx={{
          background: theme.palette.primary.darker,
          height: '345px',
          borderRadius: '5px',
          boxShadow: '3px 3px 12px 0px rgba(0,0,0,0.75)',
          border: '2px solid #303841'
        }}
      >
        <Box sx={{ background: '#000', p: 1, textAlign: 'center', height: '36px' }}>
          <Typography varient="h4">Code Editor</Typography>
        </Box>
        <Box sx={{ height: '309px' }}>
          <CodeMirror value={code.substring(0, index)} height="305px" extensions={[csharp({ jsx: true })]} theme={sublime} />
        </Box>
      </Box>
    </div>
  );
};

export default CodeSnippetContainer;
