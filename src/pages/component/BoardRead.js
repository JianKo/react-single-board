
import React, { useContext, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Context API Setup
import { dataContenxt, dataContext } from "../BoardList.js"


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        border: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: "1%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));




function BoardRead() {
    const classes = useStyles();
    const focusref = useRef();
    const { reqData } = useContext(dataContenxt);

    return (

        <>
            {
                (function () {
                    if (reqData === "Loading") return (<div>Loading</div>);

                    else return (

                        reqData.map((obj, index) => (<div key={index} ref = {focusref}>
                      
                            <Accordion className={classes.root} >

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}> {obj.fields.title} </Typography>
                                        </AccordionSummary>
                                        {obj.fields.content}
                                        <AccordionDetails>
                                    <Typography>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>))
                    )
                })()
            }
        </>
    );
}

export default BoardRead;
