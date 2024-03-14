import React from "react";
import { Grid, Typography, AppBar, Button } from "@mui/material";

function App() {
  return (
    <div>
      <Grid container style={{ height: "100vh" }}>
        <AppBar position="fixed" style={{ height: "10vh", background: 'transparent', boxShadow: 'none' }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", flexDirection: "row" }}>
            <Grid container>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography style={{ color: "black", fontWeight: "bold" }}>SPRITLE</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Button style={{ color: "black", fontWeight: "bold" }}>ROI Calculator</Button>
                <Button style={{ color: "black", fontWeight: "bold" }}>Success Stories</Button>
                <Button style={{ color: "black", fontWeight: "bold" }}>Pricing</Button>
                <Button style={{ color: "black", fontWeight: "bold" }}>Blog</Button>
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button variant='contained' style={{ backgroundColor: "#032D5F", color: "#fff", borderRadius: "8px" }}>Start For Free</Button>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ height: "75vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Grid item xs={6} style={{ height: "80vh" }} />
          <Grid item xs={6} style={{ height: "20vh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <Typography style={{ color: "black", fontSize: "40px", fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center" }}>Turn browsers into buyers</Typography>
            <Typography style={{ color: "black", alignSelf: "center" }}>Our AI assistant crafts real conversations, turning website visitors into</Typography>
            <Typography style={{ alignSelf: "center" }}>loyal, big-spending customers.</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ height: "15vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Button variant='contained' style={{ backgroundColor: "#032D5F", color: "#fff" }}>Try SpritleAI For FREE</Button>
        </Grid>
      </Grid >
    </div >
  );
};

export default App;
