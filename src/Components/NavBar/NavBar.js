import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/img/Logo.png";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import eclair from "../../assets/img/eclair2.svg";

function NavBar() {
  const mobileVersion = useMediaQuery("(max-width:890px)");
  const [openMenu, setOpenMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [activeEyes, setActiveEyes] = useState(false);

  const activeRedEyes = () => {
    setActiveEyes(true);
    setTimeout(() => {
      setActiveEyes(false);
    }, "1500");
  };

  return (
    <AppBar>
      <Container maxWidth="xl" className="toolbar">
        {!mobileVersion && (
          <Toolbar sx={{ justifyContent: "center" }}>
            <MenuItem
              onClick={(e) => {
                setActiveMenu(e.target.innerText);
              }}
            >
              <NavLink to={"/"}>Accueil</NavLink>
              <img
                className="eclair"
                src={eclair}
                alt="eclair"
                style={{ width: "55px", height: "auto" }}
              />
            </MenuItem>

            <div className="separator"></div>

            <MenuItem
              onClick={(e) => {
                setActiveMenu(e.target.innerText);
              }}
            >
              <NavLink to={"/le-groupe"}>Le groupe</NavLink>
              <img
                className="eclair"
                src={eclair}
                alt="eclair"
                style={{ width: "55px", height: "auto" }}
              />
            </MenuItem>

            <div className="separator"></div>

            <MenuItem
              onClick={(e) => {
                setActiveMenu(e.target.innerText);
              }}
            >
              <NavLink to={"/set-liste"}>Set liste</NavLink>
              <img
                className="eclair"
                src={eclair}
                alt="eclair"
                style={{ width: "55px", height: "auto" }}
              />
            </MenuItem>

            <div className="separator"></div>

            <MenuItem onClick={activeRedEyes}>
              <img src={Logo} alt="Logo" className="logo-navbar" />
              <div
                className={`red-eyes-l ${activeEyes && "active-red-eyes"}`}
              ></div>
              <div
                className={`red-eyes-r ${activeEyes && "active-red-eyes"}`}
              ></div>
            </MenuItem>

            <div className="separator"></div>

            <MenuItem
              onClick={(e) => {
                setActiveMenu(e.target.innerText);
              }}
            >
              <NavLink to={"/medias"}>Medias</NavLink>
              <img
                className="eclair"
                src={eclair}
                alt="eclair"
                style={{ width: "55px", height: "auto" }}
              />
            </MenuItem>
            <div className="separator"></div>

            <MenuItem
              onClick={(e) => {
                setActiveMenu(e.target.innerText);
              }}
            >
              <NavLink to={"/concerts"}>Concerts</NavLink>
              <img
                className="eclair"
                src={eclair}
                alt="eclair"
                style={{ width: "55px", height: "auto" }}
              />
            </MenuItem>

            <div className="separator"></div>

            <MenuItem
              onClick={(e) => {
                setActiveMenu(e.target.innerText);
              }}
            >
              <NavLink to={"/contact"}>Contact</NavLink>
              <img
                className="eclair"
                src={eclair}
                alt="eclair"
                style={{ width: "55px", height: "auto" }}
              />
            </MenuItem>
          </Toolbar>
        )}
        {mobileVersion && (
          <Toolbar
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              justifyContent: "space-between",
              padding: "0",
            }}
          >
            <MenuItem>
              <img src={Logo} alt="Logo" className="logo-navbar" />
            </MenuItem>
            <MenuItem>{activeMenu}</MenuItem>
            <MenuItem onClick={() => setOpenMenu(!openMenu)}>
              <MenuIcon fontSize="large" />
            </MenuItem>
          </Toolbar>
        )}
        {openMenu && mobileVersion && (
          <Toolbar sx={{ justifyContent: "center" }} className="mobileNav">
            <MenuItem
              onClick={(e) => {
                setOpenMenu(false);
                setActiveMenu(e.target.innerText);
              }}
            >
              <NavLink to={"/"}>Acceuil</NavLink>
            </MenuItem>

            <div className="separator-mobile"></div>

            <MenuItem
              onClick={(e) => {
                setOpenMenu(false);
                setActiveMenu(e.target.innerText);
              }}
            >
              <NavLink to={"/le-groupe"}>Le groupe</NavLink>
            </MenuItem>

            <div className="separator-mobile"></div>
            <MenuItem
              onClick={(e) => {
                setOpenMenu(false);
                setActiveMenu(e.target.innerText);
              }}
            >
              <NavLink to={"/set-liste"}>Set Liste</NavLink>
            </MenuItem>

            <div className="separator-mobile"></div>

            <MenuItem
              onClick={(e) => {
                setOpenMenu(false);
                setActiveMenu(e.target.innerText);
              }}
            >
              <NavLink to={"/medias"}>Medias</NavLink>
            </MenuItem>

            <div className="separator-mobile"></div>
            <MenuItem
              onClick={(e) => {
                setOpenMenu(false);
                setActiveMenu(e.target.innerText);
              }}
            >
              <NavLink to={"/concerts"}>Concerts</NavLink>
            </MenuItem>

            <div className="separator-mobile"></div>

            <MenuItem
              onClick={(e) => {
                setOpenMenu(false);
                setActiveMenu(e.target.innerText);
              }}
            >
              <NavLink to={"/contact"}>Contact</NavLink>
            </MenuItem>
          </Toolbar>
        )}
      </Container>
    </AppBar>
  );
}
export default NavBar;
