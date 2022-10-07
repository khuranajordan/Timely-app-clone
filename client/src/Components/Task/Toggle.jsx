import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Toggle() {
    const [alignment, setAlignment] = React.useState('Timeline');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const children = [
        <ToggleButton value="Timeline" key="Timeline"
            sx={{
                textTransform: 'none',
                height:'30px'
            }}>
            Timeline
        </ToggleButton>,
        <ToggleButton value="List" key="List"
            sx={{
                textTransform: 'none',
                height:'30px'
            }}>
            List
        </ToggleButton>
    ];

    const control = {
        value: alignment,
        onChange: handleChange,
        exclusive: true,
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                // TODO Replace with Stack
                '& > :not(style) + :not(style)': { mt: 2 },
            }}
        >
            <ToggleButtonGroup size="small" {...control} aria-label="Small sizes"
                                sx={{marginTop:'15px'}}>
                {children}
            </ToggleButtonGroup>

        </Box>
    );
}
