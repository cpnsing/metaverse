import React from 'react'
import "rsuite/dist/rsuite.min.css";
import { Tooltip, Whisper } from "rsuite";
import { Box } from '@material-ui/core';

export default function Popover({ type }) {
    return (
        <div>
            <Whisper

                followCursor
                speaker={<Tooltip>
                    {type}
                </Tooltip>}

            >

                <Box
                    mt={4}

                >
                    <img src="/images/exploretop.png" alt="" width="100%" />
                </Box>





            </Whisper>
        </div>
    )
}
