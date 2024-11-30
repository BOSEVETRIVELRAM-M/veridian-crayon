import * as React from 'react';
import { Box } from '@mui/material';
import aboutUs from "../../assets/images/aboutUs.png";

export default function AboutUs() {
    return (
        <Box
            sx={{
                marginTop: "60px",
                width: "100%", // Adjusted to be responsive
                maxWidth: "1306px", // Prevents overflow
                height: "826px",
                position: "relative",
                overflow: "hidden", // Hides any overflow content
                // marginX: "auto", // Centers the Box horizontally
            }}
        >
            <Box>
                <img
                    src={aboutUs}
                    style={{
                        width: "100%", // Makes the image adapt to the container
                        height: "auto", // Maintains aspect ratio
                    }}
                />
            </Box>
        </Box>
    );
}
