# HLS_Node

This is a practice repo for understanding HLS video streaming via
a Node.js server. 

## Background

HLS stands for HTTP Live streaming. It allows us to serve large media files as many 
smaller files. We will do this by breaking an mp3 file into many text files that can 
be served quickly via  Node.js server. 

Benefits of HLS:

- User's video/song loads quickly
- The majority of the unused content won't be downloaded
- We can use traditional HTTP protocol which doesn't required additional client/server configuration

## Steps

1. Install ffmpeg through your terminal

```bash
brew install ffmpeg
```

2. Choose an mp4 video. If you don't have one, you can download one on a site like [Sample-Videos.com](Sample-Videos.com)

After choosing a file, make sure it is in a directory, then run the following command replacing the 'sample-mp4-file.mp4' with your file name. This will create some new files in 
that directory.


```bash
ffmpeg -i sample-mp4-file.mp4 -profile:v baseline -level 3.0 -s 640x360 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls index.m3u8
```

3. Set up a node.js server in the videos directory. Change into this directory and run the server. 


```bash
node main.js
```

4. Use this tool to test your streaming service: [HLSJS.dev](https://hlsjs-dev.video-dev.org/demo/)

HLS.js is a JavaScript library that enables playing HLS (HTTP Live Streaming) video streams in browsers that do not support HLS natively (like most browsers except Safari)


