import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const styles = makeStyles({
    root: {
        textAlign: 'center',
        width: 200,
        height: 120,
        borderColor: '#5D6B83',
        margin: 'auto',
        padding: '10px',
        backgroundColor: '#FAF0F1'
    },
    content: {
        minWidth: 275,
        textDecoration: 'none',
        fontWeight: 500
      }
    
})

function Notebooks(props) {
    // debugger
    const classes = styles()

    return (
        <Container>
            <Box m={4}>
                <Grid container spacing={3}>
                    {props.notebooks.notebooks && props.notebooks.notebooks.map(notebook => 
                    <Grid item xs={3}>        
                        <Card variant="outlined" className={classes.root}>
                            <CardContent component={Link} to={`/notebooks/${notebook.id}`} className={classes.content}>{notebook.title}</CardContent>
                        </Card>
                    </Grid>
                    )}
                </Grid>
            </Box>
        </Container>
    )
}

export default Notebooks

// Add a default value for title - if notebook title is empty, it should show up as "Untitled Notebook"