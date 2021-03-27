import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { IconButton } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const styles = makeStyles({
    root: {
        minWidth: 275,
        textDecoration: 'none',
        textAlign: 'center',
        fontWeight: 500,
        border: '1px solid',
        borderColor: '#5D6B83'
      }
    
})

function Notebooks(props) {
    // debugger
    const classes = styles()

    return (
        <Container>
            <Box m={4}>
                <Grid container spacing={3}>
                    {/* <Grid item xs={3}>
                        <Card component={Link} to={"/notebooks/new"} variant="outlined" raised="true" className={classes.root}>
                            <CardContent>
                                <IconButton>
                                    <AddCircleIcon/>
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid> */}
                    {props.notebooks.notebooks && props.notebooks.notebooks.map(notebook => 
                    <Grid item xs={3}>        
                        <Card component={Link} to={`/notebooks/${notebook.id}`} className={classes.root} variant="outlined">
                            <CardContent>{notebook.title}</CardContent>
                            {/* <Link to={`/notebooks/${notebook.id}`}>{notebook.title}</Link> */}
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