import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/system";
import { Favorite } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Home from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import InfoIcon from "@mui/icons-material/Info";
import NewspaperIcon from "@mui/icons-material/Newspaper";

export const PageLayout = () => {
  const [value, setValue] = useState(0);
  return (
    <Paper
      background="black"
      style={{
        display: "flex",
        height: "100vh",
        flex: "1",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Outlet
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          minHeight: "100%",
          overflowY: "auto",
        }}
      />

      <Box>
        <BottomNavigation
          flexDirection={"column"}
          alignItems={"center"}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Página Inicial"
            icon={<Home />}
            LinkComponent={Link}
            to={"paginaInicial"}
            backgroundColor="black"
          />
          <BottomNavigationAction
            label="Produtos"
            icon={<MenuIcon />}
            LinkComponent={Link}
            to={"produtos"}
          />
          <BottomNavigationAction
            label="Notícias"
            icon={<NewspaperIcon />}
            LinkComponent={Link}
            to={"noticias"}
          />
          <BottomNavigationAction
            label="Sobre"
            icon={<InfoIcon />}
            LinkComponent={Link}
            to={"/sobre"}
          />
        </BottomNavigation>
      </Box>
    </Paper>
  );
};
