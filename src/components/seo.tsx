// src/components/SEO.tsx
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  robots?: string;
  jsonLd?: object[];
  keywords?: string[];
};

const siteUrl = "https://omerelammary.netlify.app";
const defaultImage = `${siteUrl}/og/og-image.jpg`;

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path = "/",
  image = defaultImage,
  type = "website",
  robots = "index,follow",
  jsonLd = [],
  keywords = [],
}) => {
  const url = `${siteUrl}${path}`;
  const joinedKeywords = keywords.join(", ");

  return (
    <Helmet>
      {/* Primary meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {joinedKeywords && <meta name="keywords" content={joinedKeywords} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content={robots} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
};
