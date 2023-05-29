"use client";
import Image from "next/image";
import * as React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PortfolioButton } from "@/components/button/button.styles";
import { AboutContainer } from "@/components/containers/box.styles";

const ResumeComponent = () => {
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
        }}>
            <Typography variant={'h3'} component={'h3'} sx={{ fontFamily: 'garamond' }}>
                ABOUT ME
            </Typography>

            <AboutContainer>
                <Box sx={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                }}>
                    <Image src={'/self/asanyanga.JPG'} alt={'Profile Picture'} width={400} height={300} />
                </Box>

                <Box sx={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '2rem',
                }}>
                    <Typography variant={'subtitle1'} component={'p'}
                                sx={{ fontFamily: 'garamond', color: '#ffffff' }}
                    >
                        Allan Sanyanga is a full stack developer specializing in application development and server maintenance. Core technical skills include Bioinformatics, ReactJS, Node (expressJS), Python, Django, Linux and PostgreSQL. Allan is also responsible for the administration of high performance computing (HPC) clusters for Bioinformatics research. In his free time Allan pursues projects in artificial intelligence and machine learning.</Typography>
                    <PortfolioButton variant={'outlined'} sx={{
                        fontWeight: 'bold',
                        borderWidth: '2px',
                    }}>
                        Resume
                    </PortfolioButton>
                </Box>
            </AboutContainer>
        </Box>
    )
}

export default ResumeComponent;
