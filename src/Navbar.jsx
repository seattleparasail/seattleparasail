import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Container, Toolbar, Typography, Menu, MenuItem, useMediaQuery} from "@mui/material";
import{Paragliding as ParaglidingIcon, Menu as MenuIcon}  from "@mui/icons-material";
import { pages } from './Pages'
import { AppContext } from './index'

const ResponsiveAppBar = () => {
  const AppContextState = useContext(AppContext)
  const { currentTheme } = AppContextState

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHamburgerClick = e => anchorElNav ? handleCloseNavMenu() : handleOpenNavMenu(e);

  const handleNavLinkClick = (e, route) => {
    e.preventDefault()
    handleCloseNavMenu()
    navigate(route)
  }

  const isAtLeast600 = useMediaQuery("(min-width:600px)");
  const isAtLeast350 = useMediaQuery("(min-width:350px)");
  const Opacity50 = '99'

  return (
    <AppBar
      position="absolute"
      style={{ backgroundColor: `${currentTheme.colors.primary + Opacity50}`}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ParaglidingIcon
            sx={{ fill: currentTheme.colors.secondary, display: { xs: "none", md: "flex", cursor: 'pointer'}, mr: 1 }}
            onClick={e => handleNavLinkClick(e, '/')}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={e => handleNavLinkClick(e, '/')}
            sx={{
              cursor: 'pointer',
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: 'Trade Winds',
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: currentTheme.colors.secondary,
              textDecoration: "none",
            }}
          >
            SEATTLE PARASAIL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={e => handleNavLinkClick(e, '')}
              sx={{
                display: { xs: "block", md: "none" },
                cursor: 'pointer'
              }}
              PaperProps={{
                style: {
                  position: "relative",
                  backgroundColor: currentTheme.colors.primary + Opacity50,
                  zIndex: 700,
                  height: "300px",
                  width: isAtLeast600 ? "400px" : "100%",
                  marginLeft: isAtLeast600 ? "25px" : "0px",
                  marginTop: isAtLeast600 ? "20px" : "15px",
                },
              }}
            >
              {pages.filter(p => !!p.icon).map((page) => {
                const PageIcon = page.icon;

                return (
                  <MenuItem key={page.name} onClick={e => {
                    page.name === 'BOOK NOW' ? window.open('https://www.seattleparasailing.com/book-seattle', '_blank') :
                      handleNavLinkClick(e, page.route)
                  }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        color: currentTheme.colors.secondary,
                        margin: "5px auto",
                        paddingTop: "20px",
                        fontFamily: 'Trade Winds'
                      }}
                    >
                      <PageIcon sx={{ mr: 1 }} />
                      {page.name}
                    </div>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <ParaglidingIcon
            sx={{ fill: currentTheme.colors.secondary, display: { xs: "flex", md: "none" }, mr: 1, cursor: 'pointer' }}
            onClick={e => handleNavLinkClick(e, '/')}
          />
          <Typography
            variant={isAtLeast350 ? 'h5': 'subtitle1'}
            noWrap
            component="a"
            onClick={e => handleNavLinkClick(e, '/')}
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 2,
              fontFamily: 'Trade Winds',
              fontWeight: 500,
              letterSpacing: ".1rem",
              color: currentTheme.colors.secondary,
              textDecoration: "none",
            }}
          >
            SEATTLE PARASAIL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.filter(p => !!p.icon).map(page => (
              <Button
                key={page.name}
                onClick={e => {
                  page.name === 'BOOK NOW' ? window.open('https://www.seattleparasailing.com/book-seattle', '_blank') : 
                  handleNavLinkClick(e, page.route)
                }}
                sx={{
                  my: 2, color: currentTheme.colors.secondary, display: "block", fontFamily: 'Trade Winds'}}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <MenuIcon
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={e => handleHamburgerClick(e)}
            sx={{ fill: currentTheme.colors.secondary,  display: { md: "none" }, cursor: 'pointer'}}
          >
          
          </MenuIcon>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
