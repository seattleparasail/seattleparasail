import * as React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

const pages = [
  { name: "HOME", icon: '', route: '/' },
  { name: "BOOK NOW", icon: CalendarMonthIcon, route: '/book-now' },
  { name: "TOURS", icon: DirectionsBoatIcon, route: '/tours' },
  { name: "FAQ", icon: LiveHelpIcon, route: '/faq' },
];

const useStyles = makeStyles({
  hamburgerDropDown: {
    backgroundColor: "rgba(0, 0, 0, 0.66)",
  },
});

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

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

  const is400 = useMediaQuery("(min-width:600px)");
  const is600 = useMediaQuery("(min-width:600px)");

  return (
    <AppBar
      position="absolute"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.66)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ParaglidingIcon
            sx={{ display: { xs: "none", md: "flex", cursor: 'pointer'}, mr: 1 }}
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
              color: "inherit",
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
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  zIndex: 700,
                  height: "300px",
                  width: is600 ? "400px" : "100%",
                  marginLeft: is600 ? "25px" : "0px",
                  marginTop: is600 ? "8px" : "4px",
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
                        color: "white",
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
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, cursor: 'pointer' }}
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
              fontSize: is600 ? '24px' : '18px',
              display: { xs: "flex", md: "none" },
              flexGrow: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
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
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={e => handleHamburgerClick(e)}
            color="inherit"
            sx={{ display: { md: "none" }, cursor: 'pointer'}}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
