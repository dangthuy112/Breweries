import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import SportsBarIcon from '@mui/icons-material/SportsBar';

export default function Header() {
    return (
        <header className="Header">
            <Box sx={{ flexGrow: 1, }}>
                <AppBar position="static" sx={{ padding: '5px 50px' }}>
                    <Toolbar size="medium">
                        <Avatar sx={{ mr: 2 }}>
                            <SportsBarIcon />
                        </Avatar>
                        <Typography variant='h3' sx={{ mr: 2, flexGrow: 1 }}>
                            BreweriesDB
                        </Typography>
                        <Button sx={{ color: 'white', backgroundColor: 'red' }} variant='outlined' size='large'>
                            Show All Breweries
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}

