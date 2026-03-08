import type { ImgHTMLAttributes } from "react";

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  sources?: {
    media?: string;
    srcSet: string;
    type?: string;
  }[];
  src: string;
  width?: number | string;
  height?: number | string;
  loading?: "lazy" | "eager";
  aspectRatio?: string;
}

export function ResponsiveImage({
  alt,
  sources,
  src,
  width,
  height,
  loading = "lazy",
  aspectRatio,
  style,
  className,
  ...props
}: ResponsiveImageProps) {
  const containerStyle: React.CSSProperties = aspectRatio
    ? {
        position: "relative",
        width: "100%",
        paddingBlockEnd: `calc(100% / ${aspectRatio})`,
        overflow: "hidden",
      }
    : {};

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: aspectRatio ? "100%" : "auto",
    objectFit: "cover",
    position: aspectRatio ? "absolute" : "relative",
    inset: 0,
    ...style,
  };

  return (
    <div style={containerStyle} className={className}>
      {sources && sources.length > 0 ? (
        <picture>
          {sources.map((source, index) => (
            <source
              key={index}
              media={source.media}
              srcSet={source.srcSet}
              type={source.type}
            />
          ))}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            style={imageStyle}
            {...props}
          />
        </picture>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          style={imageStyle}
          {...props}
        />
      )}
    </div>
  );
}

interface VideoEmbedProps {
  src: string;
  title: string;
  aspectRatio?: string;
  autoplay?: boolean;
}

export function VideoEmbed({
  src,
  title,
  aspectRatio = "16/9",
  autoplay = false,
}: VideoEmbedProps) {
  const embedUrl = autoplay
    ? src.includes("?")
      ? `${src}&autoplay=1`
      : `${src}?autoplay=1`
    : src;

  return (
    <div
      className="video-container"
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        maxWidth: "100%",
        overflow: "hidden",
        borderRadius: "var(--radius)",
        background: "var(--color-bg-card)",
      }}
    >
      <iframe
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        style={{
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
