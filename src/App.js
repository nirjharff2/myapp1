import React from "react";

import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail, VideoList} from "./components";

import youtube from "./api/youtube";


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }
    componentDidMount(){
        this.handleSubmit('Himalayans');
    }
    handleSubmit = async(searchTerm) => {
        const response = await youtube.get('search',{
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDMYTNhYQiBuAmLPw5zMZiXRLYKNcnyd2o',
                q: searchTerm,
            }
        });
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
        console.log(response);
    }
    OnVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }
    render(){
        const {selectedVideo, videos} = this.state;
        return(
            <Grid justifyContent="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8} style={{height:'800px'}}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} OnVideoSelect={this.OnVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;