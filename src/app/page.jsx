"use client";
import Image from 'next/image'
import * as React from 'react'
import JumbotronComponent from "@/components/jumbotron/jumbotron.component";
import ResumeComponent from "@/components/resume/resume.component";
import ProjectsComponent from "@/components/projects/projects.component";
import ContactComponent from "@/components/contact/contact.component";
import Box from '@mui/material/Box';
import './app.scss';

export default function Home() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0 6rem',
            gap: '4rem',
        }}>
            <JumbotronComponent />
            <ResumeComponent />
            <ProjectsComponent />
            <ContactComponent />
        </Box>
    )
}