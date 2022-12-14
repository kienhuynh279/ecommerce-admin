import { AppBar, Box, Toolbar } from '@mui/material';
import clsx from 'clsx';
import topbarStyle from './style';
// import ToggleSidebar from './ToggleSidebar';
import TopbarCenter from './TopbarCenter';
import TopbarLeft from './TopbarLeft';
import TopbarRight from './TopbarRight';

const Topbar = () => {
  const classes = topbarStyle();
  const cls = clsx(classes.root, 'admin-topbar');

  return (
    <AppBar position="fixed" className={cls}>
      <Toolbar className="admin-topbar-toolbar">
        {/* <ToggleSidebar /> */}
        <Box className="admin-topbar-toolbar-box w-full d-flex">
          <TopbarLeft />
          <TopbarCenter />
          <TopbarRight />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
