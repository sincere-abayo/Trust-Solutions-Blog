"use client";

interface VideoEmbedProps {
  videoUrl: string;
  title?: string;
}

export default function VideoEmbed({ videoUrl, title }: VideoEmbedProps) {
  if (!videoUrl) return null;

  // Function to extract video ID and determine platform
  const getVideoEmbedUrl = (url: string) => {
    // YouTube patterns
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeMatch = url.match(youtubeRegex);

    if (youtubeMatch) {
      return {
        embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}`,
        platform: "youtube",
      };
    }

    // Vimeo patterns
    const vimeoRegex = /(?:vimeo\.com\/)([0-9]+)/;
    const vimeoMatch = url.match(vimeoRegex);

    if (vimeoMatch) {
      return {
        embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}`,
        platform: "vimeo",
      };
    }

    // If no pattern matches, return null
    return null;
  };

  const videoInfo = getVideoEmbedUrl(videoUrl);

  if (!videoInfo) {
    // If URL doesn't match known patterns, show a link instead
    return (
      <div className="my-8 p-4 bg-gray-50 rounded-lg border">
        <p className="text-sm text-gray-600 mb-2">Video Link:</p>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline break-all"
        >
          {videoUrl}
        </a>
      </div>
    );
  }

  return (
    <div className="my-8">
      <div
        className="relative w-full"
        style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
      >
        <iframe
          src={videoInfo.embedUrl}
          title={title || "Embedded Video"}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {title && (
        <p className="text-sm text-gray-600 mt-2 text-center italic">{title}</p>
      )}
    </div>
  );
}
