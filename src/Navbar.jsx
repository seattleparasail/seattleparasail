import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Container, Toolbar, Typography, Menu, MenuItem, useMediaQuery} from "@mui/material";
import{Paragliding as ParaglidingIcon, Menu as MenuIcon}  from "@mui/icons-material";
import { pages } from './Pages'
import { theme } from './Themes'

const ResponsiveAppBar = () => {
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

  const is600 = useMediaQuery("(min-width:600px)");

  return (
    <AppBar
      position="absolute"
      style={{ backgroundColor: theme.colors.cascadeForestGreen_50_Opacity}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ParaglidingIcon
            sx={{ fill: theme.colors.galaxyGold, display: { xs: "none", md: "flex", cursor: 'pointer'}, mr: 1 }}
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
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: theme.colors.galaxyGold,
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
                  backgroundColor: theme.colors.cascadeForestGreen_50_Opacity,
                  zIndex: 700,
                  height: "300px",
                  width: is600 ? "400px" : "100%",
                  marginLeft: is600 ? "25px" : "0px",
                  marginTop: is600 ? "20px" : "15px",
                },
              }}
            >
              {pages.filter(p => !!p.icon).map((page) => {
                const PageIcon = page.icon;

                return (
                  <MenuItem key={page.name} onClick={e => handleNavLinkClick(e, page.route)}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        color: theme.colors.galaxyGold,
                        margin: "5px auto",
                        paddingTop: "20px",
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
            sx={{ fill: theme.colors.galaxyGold, display: { xs: "flex", md: "none" }, mr: 1, cursor: 'pointer' }}
            onClick={e => handleNavLinkClick(e, '/')}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={e => handleNavLinkClick(e, '/')}
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 2,
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".1rem",
              color: theme.colors.galaxyGold,
              textDecoration: "none",
            }}
          >
            SEATTLE PARASAIL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.filter(p => !!p.icon).map(page => (
              <Button
                key={page.name}
                onClick={e => handleNavLinkClick(e, page.route)}
                sx={{ my: 2, color: theme.colors.galaxyGold, display: "block" }}
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
            sx={{ fill: theme.colors.galaxyGold,  display: { md: "none" }, cursor: 'pointer'}}
          >
          
          </MenuIcon>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
