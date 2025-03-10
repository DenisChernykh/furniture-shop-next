"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

type NavItemsLeft = string[];

type NavItemsRight = string[];

const navItemsLeft: NavItemsLeft = ["Галерея", "Дизайнерам"];
const navItemsRight: NavItemsRight = ["Контакты", "Заказать"];

const navItems = [...navItemsLeft, ...navItemsRight];

function Header() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "background.default",
        height: "100vh",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: 2,
          }}
        >
          <Typography>FABRИK</Typography>
          <IconButton
            onClick={() => setMobileOpen(false)}
            color="inherit"
            aria-label="close drawer"
            edge="end"
            sx={{ p: 0 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ bgcolor: "divider", mt: 4 }} />
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </Container>
    </Box>
  );

  return (
    <header>
      <Container component="div">
        <Box>
          <AppBar component="nav" sx={{ bgcolor: "background.default" }}>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: 1, sm: "center" },
                pt: { xs: 1, sm: 0 },
              }}
            >
              <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4 }}>
                {navItemsLeft.map((item) => (
                  <Button sx={{ color: "text.primary" }} key={item}>
                    {item}
                  </Button>
                ))}
              </Box>
              <Typography>FABRИK</Typography>
              <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4 }}>
                {navItemsRight.map((item) => (
                  <Button sx={{ color: "text.primary" }} key={item}>
                    {item}
                  </Button>
                ))}
              </Box>
              <IconButton
                onClick={() => setMobileOpen(true)}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ display: { sm: "none" }, p: 0 }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { width: "100%" },
              }}
              open={mobileOpen}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      </Container>
    </header>
  );
}

export default Header;
