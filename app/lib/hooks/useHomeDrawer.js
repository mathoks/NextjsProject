import { Box, ButtonBase, Stack, SwipeableDrawer, Typography } from "@mui/material";
import React from "react";
import { CloseOutlined} from "@mui/icons-material";
import States from "@/app/ui/utilComp/States";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setDrawer } from "../features/Drawer/drawerSlice";
import Categories from "@/app/ui/utilComp/Categories";
const useHomeDrawer = () => {
const dispatch = useAppDispatch()
const openhomeDraw = useAppSelector((state)=>state.drawer.show)
  const handleOpenDraw = () => {
    dispatch(setDrawer(true));
  };
  const DrawerWrapper = () => (
    <div>
      <SwipeableDrawer
        onOpen={handleOpenDraw}
        open={openhomeDraw}
        onClose={handleOpenDraw}
        variant="temporary"
        anchor="bottom"
        sx={{
          '& .MuiPaper-root' : {
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
            
          }
        }}
      >
        <Box height={600} borderRadius={15} padding={3}>
        <Stack  direction={"row"} gap={15} sx={{display: "flex", justifyContent: "flex-end", alignItems:"center"}}>
        <span aria-details="header">
        <Typography fontWeight={700} fontSize={18}>View more </Typography>
        </span>
        <span style={{ml: "auto"}}>
          <ButtonBase onClick={handleOpenDraw}>
          <CloseOutlined sx={{fontSize: 24,  color: "inherit"}}/>
          </ButtonBase>
        </span>
        </Stack>
        <Box component={"section"} id="filer-content" aria-details="filter list" sx={{height: 500, overflowY: "scroll", mt: 4}}>
        <Stack direction={"column"} gap={4} justifyContent={"flex-start"}>
        <span aria-label="state">
          <States/> 
        </span>
        <span aria-label="category">
       <Categories/>
        </span>
        </Stack>
        </Box>
        </Box>
      </SwipeableDrawer>
    </div>
  );

  return {
    DrawerWrapper,
    DrawerHandler: handleOpenDraw,
  };
};
export default useHomeDrawer;
