import ReactPlayer from "react-player";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding-top: 56.25%

  video {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

interface IVideoPlayer {
  filePath: string;
}

const VideoPlayer = ({ filePath }: IVideoPlayer) => (
  <Wrapper>
    <ReactPlayer
      url={filePath}
      width="100%"
      height="100%"
      controls
    />
  </Wrapper>
);

export default VideoPlayer;