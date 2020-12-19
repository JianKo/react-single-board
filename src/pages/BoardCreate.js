import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    bgSetup: {
        display: "flex",
        background: `url(https://source.unsplash.com/random/1920x1080)`,
        height: "100vh",
    },

    root: {
        marginTop: "10%",
        width: "40%",
        backgroundColor: '#ebebeb',
        height : "50vh",
        display: "flex",
        borderRadius:"5%",
        paddingTop : 20,
        
    },

    formDiv: {
        width: "100%",
        height : "60vh",
        paddingLeft: "2%",
        justifyContent:'center',
        alignItems:'center',
      
        padding: 0
    },

    inputBox: {
        display: "flex",
        marginTop : "1.5%",
        marginBottm : "2%",
        width: "100%",
        color :"blue",
    
    },

    leftBg: {
        width: "70%",
        background: `url(https://source.unsplash.com/random/)`,
    }


}));

// fetch post connection
async function onSubmitHandle(e){
    e.preventDefault();

    const title_data = e.target[0].value;
    const content_data = e.target[1].value;

    const URL = "http://192.168.200.123:8000/brd/addNote"

    const reqOptions = {
        method : "post",
        headers : {
            "Content-type":"application/json"
        },
        body : JSON.stringify({ title: title_data, content:content_data})
    };

   fetch(URL , reqOptions)
    .then(res => console.log(res))
   ;
      
}


function BoardCreate() {
    const classes = useStyles();


    return (
        <>
            <div className={classes.bgSetup}>
                <Container className={classes.root} >

                    <form className={classes.formDiv} onSubmit={onSubmitHandle}>
                        <TextField
                            id="standard-basic"
                            label="INPUT TITLE HERE"
                            className={classes.inputBox}
                            fullWidth
                        />

                        <TextField
                            id="outlined-basic"
                            label="INPUT CONTENT HERE"
                            variant="outlined"
                            rows={8}
                            style = {{marginTop:"4%"}}
                            className={classes.inputBox}
                            fullWidth
                            multiline
                        />

                        <Button 
                            type="submit" 
                            color="primary"  
                            variant="outlined" 
                            
                            style = {{marginTop:"4%"}}
                            className={classes.inputBox}
                           
                            >
                            SUBMIT

                        </Button>

                    </form>

                    {/* <div className={classes.leftBg} >
                       
                    </div> */}

                </Container>

            </div>
        </>

    );
}

export default BoardCreate;