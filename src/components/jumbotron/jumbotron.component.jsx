"use client";
import {
    Jumbotron
} from "@/components/jumbotron/jumbotron.styles";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { PortfolioButton } from "@/components/button/button.styles";

const JumbotronComponent = () => {
    return (
        <Jumbotron>
            <Typography variant="h1" component={"h1"} gutterBottom sx={{ fontFamily: 'garamond', fontSize: '5rem' }}>
                    Hi, my name is <span style={{color: "#00cdac"}}>Some one</span>
                    <br/>
                    I am a full stack developer
            </Typography>

            <PortfolioButton size={'large'} variant={'outlined'} sx={{
                color: '#00cdac',
                borderColor: '#00cdac',
                fontWeight: 'bold',
                borderWidth: '2px',
            }}>
                Know More
            </PortfolioButton>
        </Jumbotron>
    )
}

export default JumbotronComponent;
