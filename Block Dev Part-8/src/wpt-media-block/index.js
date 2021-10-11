const { registerBlockType } = wp.blocks;
const { MediaUpload } = wp.blockEditor;
const { IconButton } = wp.components;

import { ReactComponent as Logo } from "../logo.svg";
import placeHolder from "../place_holder.png";

registerBlockType("wpt/media", {
  title: "Media Block",
  icon: { src: Logo },
  category: "custom-category",
  descriptio:"A custom Block with Image, Audio, and Video.",
  attributes: {
    blockImage: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: ".image-container img",
      default: placeHolder
    },
    blockVideo: {
      type: "string",
      source: "attribute",
      selector:".video-container div video",
      attribute: "src",
    },
    blockAudio: {
      type: "string",
      source: "attribute",
      selector:".audio-container div audio",
      attribute: "src",
    }

  },

  edit: props => {

    const {
      attributes: { blockImage },
    } = props;

    const onImageSelect = imageObject => {
      props.setAttributes({blockImage: imageObject.url});
    };

    const onVideoSelect = videoObject => {
      props.setAttributes({blockVideo: videoObject.url});
    };

    const onAudioSelect = audioObject => {
      props.setAttributes({blockAudio: audioObject.url});
    };

    return (
      <div className={props.className}>
          <div className={'image-container'}>
            <img src={blockImage} alt="logo" />
            <MediaUpload
              onSelect={onImageSelect}
              allowedTypes="image"
              value={props.attributes.blockImage}
              render={({ open }) => (
                <IconButton 
                onClick={ open }
                className="image-picker-button"
                icon = "format-image"
                showTooltip="true"
                label={"Change image."}>
                  SelectImage
                </IconButton> 
              )}
            />
          </div>
          <figure className={'video-container'}>
            <div>
              <video controls src={props.attributes.blockVideo} type="video/mp4"></video>
                <MediaUpload
                  onSelect={onVideoSelect}
                  allowedTypes="video"
                  value={props.attributes.blockVideo}
                  render={({ open }) => (
                    <IconButton 
                    onClick={ open }
                    className="video-picker-button"
                    icon = "media-video"
                    showTooltip="true"
                    label={"Change video."}>
                      SelectVideo
                    </IconButton> 
                  )}
                />
              </div>
          </figure>
          <figure className={'audio-container'} data-type={"core/audio"}>
            <div>
              <audio controls src={props.attributes.blockAudio}></audio>
                <MediaUpload
                  onSelect={onAudioSelect}
                  allowedTypes="audio"
                  value={props.attributes.blockAudio}
                  render={({ open }) => (
                    <IconButton 
                    onClick={ open }
                    className="audio-picker-button"
                    icon = "media-audio"
                    showTooltip="true"
                    label={"Change audio."}>
                      SelectAudio
                    </IconButton> 
                  )}
                />
            </div>
          </figure>
      </div>
    );
  },
  save: props => {

    const {
      attributes: { blockImage, blockVideo, blockAudio },
    } = props;

    return (
      <div className={props.className}>
          <div className={'image-container'}>
            <img src={blockImage} alt="logo" />
          </div>
          <figure className={'video-container'}>
            <div>
              <video controls src={blockVideo} type="video/mp4"></video>
            </div>
          </figure>
          <figure className={'audio-container'} data-type={"core/audio"}>
            <div>
              <audio controls src={blockAudio}></audio>
            </div>
          </figure>
      </div>
    );
  }
});
