import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";

const DefaultPage = () => {
    return(
        <Box component="main">
            <Outlet />
        </Box>
    )
}

export default DefaultPage;