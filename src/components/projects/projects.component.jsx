"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProjectsContainer } from "@/components/containers/box.styles";
const ProjectsComponent = () => {
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
        }}>
            <Typography variant={'h3'} component={'h3'} sx={{ fontFamily: 'garamond' }}>
                PROJECTS
            </Typography>

            <Typography variant={'subtitle1'} component={'p'}>
                These projects were completed
            </Typography>

            <ProjectsContainer>
                {
                    projects.map((project, index) => (
                        <Card key={index} sx={{width: '360px', maxHeight: '488px'}}>
                            <CardMedia
                                component="img"
                                alt="project image"
                                height="140"
                                image={project.image}
                            />
                            <CardContent sx={{height: '184px'}}>
                                <Typography gutterBottom variant="h5" component="div" sx={{height: '64px'}}>
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{height: '80px'}}>
                                    {project.description}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                {
                                    project.site ?
                                        <Button size="small" sx={{color: "#00cdac"}}>See Live</Button> : null
                                }
                                {
                                    project.public ?
                                    <Button size="small" sx={{color: "#00cdac"}}>Source Code</Button> : null
                                }
                            </CardActions>

                            <CardContent sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                height: '112px'
                            }}>
                                    {
                                        project.technologies.map((technology, index) => (
                                            <Typography key={index} variant={'overline'} component={'div'} sx={{
                                                textDecoration: 'underline',
                                                padding: '0px 6px 0px 0px',
                                                maxHeight: '42px'
                                            }}>
                                                {technology}
                                            </Typography>
                                        ))
                                    }
                            </CardContent>

                        </Card>
                    ))
                }
            </ProjectsContainer>

        </Box>

    )
}

export default ProjectsComponent;

const projects = [
    {
        name: "PRIMO (Protein Interactive Modelling)",
        description: "Web application for the computational modelling of proteins for drug discovery, disease variant/mutation analysis and molecular dynamics.",
        technologies: ["React", "Redux", "ExpressJS", "Django","REST", "SocketIO"],
        url: "https://primo-dev.rubi.ru.ac.za",
        image: "",
        public: false,
        site: true
    },
    {
        name: "Smart Brain",
        description: "Facial recognition web application where user logs in, uploads a photo and the program identifies the face, and the program identifies all faces within the image.",
        technologies: ["React", "Express", "Clarifai", "PostgreSQL"],
        url: "host somewhere",
        image: "",
        public: true,
        site: true
    },
    {
        name: "Zarium Clothing",
        description: "Demo clothing store for various categories, with dummy checkout procedure.",
        technologies: ["React", "Redux", "Stripe API"],
        url: "some netlify app here",
        image: "",
        public: true,
        site: true
    },
    {
        name: "Dog Vision",
        description: "Machine learning project to identify the breeds of dogs from images.",
        technologies: ["Python", "Tensorflow", "Keras"],
        url: "some git link",
        image: "",
        public: true,
        site: false
    },
    {
        name: "Food Vision",
        description: "Machine learning food identification program to differentiate between steak and pizza given an image.",
        technologies: ["Python", "Tensorflow", "Keras"],
        url: "some git link",
        image: "",
        public: true,
        site: false
    },
    {
        name: "Heart Disease Classifier",
        description: "Machine learning program to classify whether an individual has heart disease given various health metrics.",
        technologies: ["Python", "Scikit-learn", "Pandas"],
        url: "some git link",
        image: "",
        public: true,
        site: false
    },
    {
        name: "Bulldozer Price Prediction",
        description: "Time series machine learning prediction to determine the price of a bulldozer in the future given variables.",
        technologies: ["Python", "Scikit-learn", "Pandas"],
        url: "some git link",
        image: "",
        public: true,
        site: false
    },
]

