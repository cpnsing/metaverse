


import { Box, Button, Container, Dialog, DialogContent, Grid, makeStyles, Typography } from '@material-ui/core'
import { Height } from '@material-ui/icons'
import React from 'react'
const useStyles = makeStyles((theme) => ({
    mainSection: {
        paddingTop: "30px",
        height: '100%',
        paddingBottom: "20px",

    },
    imgSection: {
        maxHeight: "420px",
        paddingBottom: "20px",

        "& img": {
            objectFit: "cover",
            borderRadius: "10px",
            maxHeight: "420px"
        }
    },
    plotDetails: {
        display: "flex",
        alignItems: 'center'
    },
    priceSection: {
        padding: "20px 24px",
        border: "1px solid #242129",
        borderRadius: '10px'
    }

}))

export default function PlotModalDetails({ open, setOpen }) {
    const classes = useStyles()
    return (
        <Dialog open={open} onClose={() => setOpen(false)} >
            <DialogContent>
                <Box className={classes.mainSection}>
                    <Container>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box className={classes.imgSection} >
                                    <img src='images/plot_field.webp' width="100%" />
                                </Box>
                            </Grid>
                            <Grid item lg={8} md={8} sm={6} xs={12}>
                                <Box className={classes.plotDetails}>
                                    <Box>
                                        <Typography>
                                            Plot Details
                                        </Typography>
                                        <Typography>
                                            Plot Price
                                        </Typography>
                                        <Typography>
                                            Plot Size
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography>
                                            Plot Details
                                        </Typography>
                                        <Typography>
                                            100
                                        </Typography>
                                        <Typography>
                                            400*400
                                        </Typography>
                                    </Box>
                                </Box>

                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <Box className={classes.priceSection}>
                                    <Typography>Price</Typography>
                                    <Typography>$100</Typography>
                                    <Button variant='contained' color="primary" size='small'>BUY</Button>
                                </Box>

                            </Grid>
                        </Grid>

                    </Container>
                </Box>
            </DialogContent>
        </Dialog>

    )
}
