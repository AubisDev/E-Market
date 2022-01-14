import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppsIcon from '@mui/icons-material/Apps';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ResponsiveMenu() {
    
    const router = useRouter();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleContact = () => {
    toggleDrawer('left', false);
    setTimeout(() => {
        document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' })
    }, 500);
  }

  const handleCategories = () => {
    toggleDrawer('left', false);
    router.push('/categories')
  }

  const handleCart = () => {
    toggleDrawer('left', false);
    router.push('/cart')
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={ handleCategories }>
            <ListItemIcon>
                        <AppsIcon/>
            </ListItemIcon>
            <ListItemText primary={'Category'} />
        </ListItem>

        <ListItem button onClick={ handleContact }>
            <ListItemIcon>
              <ContactMailIcon/>
            </ListItemIcon>
            <ListItemText primary={'Contact'} />
        </ListItem>

        <ListItem button onClick={ handleCart }>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary={'Cart'} />
        </ListItem>

        <ListItem button >
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary={'Login'} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
          <Button onClick={toggleDrawer('left', true)} sx={{ color:'white'}}><MenuIcon fontSize='large' /></Button>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>

    </div>
  );
}
