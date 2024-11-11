import React from "react";

import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

const VideoList = ({videos, OnVideoSelect}) => {
    const listofvideos = videos.map((video, id) => <VideoItem key={id} OnVideoSelect={OnVideoSelect} video={video}/>)

    return (
        <Grid container spacing={5}>
            {listofvideos}
        </Grid>
    );
}

export default VideoList;