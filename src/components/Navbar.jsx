import { Stack, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Stack
      direction='row'
      sx={{ justifyContent: 'space-between', gap: '40px' }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt='logo' height={45}></img>
      </Link>
      <Typography
        sx={{
          typography: { xs: 'h6', sm: 'h4' },
          alignSelf: 'center',
        }}
        pr={2}
        color='red'
      >
        <Box component='span' sx={{ fontWeight: 'bold' }}>
          Avik<span style={{ color: 'white' }}>Tube</span>
        </Box>
      </Typography>
    </Stack>
    <SearchBar />
  </Stack>
);

export default Navbar;
