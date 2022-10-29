import * as React from "react";
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
  { name: "BOOK NOW", icon: CalendarMonthIcon },
  { name: "TOURS", icon: DirectionsBoatIcon },
  { name: "FAQ", icon: LiveHelpIcon },
];

const useStyles = makeStyles({
  hamburgerDropDown: {
    backgroundColor: "rgba(0, 0, 0, 0.66)",
  },
});

const ResponsiveAppBar = () => {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const is600 = useMediaQuery("(min-width:600px)");

  return (
    <AppBar
      position="absolute"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.66)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ParaglidingIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              PaperProps={{
                style: {
                  position: "relative",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  zIndex: 700,
                  height: "300px",
                  width: is600 ? "400px" : "100%",
                  marginLeft: is600 ? "25px" : "0px",
                  marginTop: is600 ? "12px" : "8px",
                },
              }}
            >
              {pages.map((page) => {
                const PageIcon = page.icon;

                return (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
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
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
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
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <IconButton
            //   size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
