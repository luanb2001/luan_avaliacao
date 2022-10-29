import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/system";
import { Favorite } from "@mui/icons-material";

export const PageLayout = () => {
  const [value, setValue] = useState(0);
  return (
    <Paper>
      <Outlet />

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
            icon={<Favorite />}
            LinkComponent={Link}
            to={"/"}
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<Favorite />}
            LinkComponent={Link}
            to={"/sobre"}
          />
          <BottomNavigationAction
            label="Produtos"
            icon={<Favorite />}
            LinkComponent={Link}
            to={"produtos"}
          />
          <BottomNavigationAction
            label="Notícias"
            icon={<Favorite />}
            LinkComponent={Link}
            to={"noticias"}
          />
        </BottomNavigation>
      </Box>
    </Paper>
  );
};
