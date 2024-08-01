type YouTubeEmbedProps = {
    videoId: string;
}

const YouTubeEmbed = ({ videoId }: YouTubeEmbedProps) => {
    const src = `https://www.youtube.com/embed/${videoId}`;
    
    return (
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-3xl">
        <iframe
          src={src}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
          title="YouTube video player"
        />
      </div>
    );
  };
  
  export default YouTubeEmbed;