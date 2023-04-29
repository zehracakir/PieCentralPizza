import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Container } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  const [color, setColor] = React.useState('neutral');
  return (
    <Container maxWidth="100%" sx={{
      position: 'fixed',
      bottom: '0',
      width: '100%',
      textAlign: 'center',
      p: '10px',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Sheet
        variant="solid"
        color={color}
        invertedColors
        sx={{
          bgcolor: '#413F42',
          flexGrow: 1,
          p: 2,
          mx: -3,
          my: -3,

        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

          <a href='https://github.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza' target='_blank'>
          <IconButton variant="plain">
            <FacebookRoundedIcon />
          </IconButton>
          </a>
          <a href='https://github.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza' target='_blank'>
          <IconButton variant="plain">
            <GitHubIcon />
          </IconButton>
          </a>
          <a href='https://github.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza' target='_blank'>
          <IconButton variant="plain">
            <TwitterIcon />
          </IconButton>
          </a>
          <a href='https://github.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza' target='_blank'>
          <IconButton variant="plain">
            <YouTubeIcon />
          </IconButton>
          </a>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'flex-start' },
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >

          <img alt="" src="https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/footerLogo1.jpg" width={"350px"} height={"150px"} />

          <List
            size="sm"
            orientation="horizontal"
            wrap
            sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
          >
            <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
              <List>
                <ListItem>
                  <ListItemButton>Pizzalar</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Yan Ürünler</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Hakkımızda</ListItemButton>
                </ListItem>
              </List>
            </ListItem>
            <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
              <List sx={{ '--ListItemDecorator-size': '32px' }}>
                <ListItem>
                  <ListItemButton>
                    <ListItemDecorator>
                    </ListItemDecorator>
                    Temassız Teslimat Nedir?
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemDecorator>
                    </ListItemDecorator>
                    Her Dilime Güven
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemDecorator>
                    </ListItemDecorator>
                    Kişisel Verilerin Korunması
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemDecorator>
                    </ListItemDecorator>
                    İletişim
                  </ListItemButton>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            
          }}
        >
          <Typography sx={{ml:2}}
            level="body2"
            startDecorator={<Typography textColor="text.tertiary">by</Typography>}
          >
            microlium
          </Typography>

          <Typography level="body3" sx={{ ml: 'auto',mr:2 }}>
            Copyright 2023
          </Typography>
        </Box>
      </Sheet>
    </Container>
  );
}
export default Footer