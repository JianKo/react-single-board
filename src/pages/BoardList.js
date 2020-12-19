/*
    @ Date : 2020-12-20
    @ Descript
    - Main Page(/)
*/

import React,{useState,useEffect} from "react"
import ReadOnData from "../modules/ReadOnData";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import Button from '@material-ui/core/Button';

import BoardRead from "./component/BoardRead.js";


export const dataContenxt = React.createContext();

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        marginBottom: "1%",
        marginRight: theme.spacing(2),
    },
    titleBar: {
        background: "rgb(000,051,255)",
    },
    title : {
        flexGrow: 1,
    }


}));


function BoardList() {
    const classes = useStyles();

    const [reqData, setreqData] = useState("Loading");
    
    useEffect (() => {
        ReadOnData()
        .then(res => setreqData(JSON.parse(res)));
     
    },[])



    return (
        <>

            <div className={classes.root}>
                <AppBar position="static" className={classes.titleBar}>

                    <Toolbar>
                        <Typography edge="start" variant="h6" className={classes.title} aria-label="menu">
                            Hello Simple Board Welcome !
                        </Typography>
         
                        <Button
                            color="inherit"
                            variant="outlined"
                            className={classes.ButtonSetup}
                            // onClick = {readOnData}
                        > Refresh
                            </Button>
                    </Toolbar>
                </AppBar>
            </div>

            <dataContenxt.Provider value={{reqData}}>

                <BoardRead/>

            </dataContenxt.Provider>
        </>
    );

}

export default BoardList;