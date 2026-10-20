import React, { useEffect, useState } from "react";

// Shows a door photo with the empty white border cut away, so every door fills its
// frame the same way. It works in the browser; the image files are not changed.
// Photos without a white background (grey or coloured) are shown as they are.

const cache = new Map(); // src -> trimmed image, so each photo is only processed once

function trim(img, tolerance) {
  const scale = Math.min(1, 400 / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.max(1, Math.round(img.naturalWidth * scale));
  const h = Math.max(1, Math.round(img.naturalHeight * scale));

  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);
  const d = ctx.getImageData(0, 0, w, h).data;

  let minX = w, minY = h, maxX = -1, maxY = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      if (255 - d[i] > tolerance || 255 - d[i + 1] > tolerance || 255 - d[i + 2] > tolerance) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < 0) return null; // all white, nothing to trim

  const pad = 2;
  const sx = Math.max(0, Math.floor((minX - pad) / scale));
  const sy = Math.max(0, Math.floor((minY - pad) / scale));
  const sw = Math.min(img.naturalWidth - sx, Math.ceil((maxX - minX + 1 + pad * 2) / scale));
  const sh = Math.min(img.naturalHeight - sy, Math.ceil((maxY - minY + 1 + pad * 2) / scale));

  const outScale = Math.min(1, 900 / Math.max(sw, sh));
  const out = document.createElement("canvas");
  out.width = Math.max(1, Math.round(sw * outScale));
  out.height = Math.max(1, Math.round(sh * outScale));
  const octx = out.getContext("2d");
  octx.fillStyle = "#fff";
  octx.fillRect(0, 0, out.width, out.height);
  octx.drawImage(img, sx, sy, sw, sh, 0, 0, out.width, out.height);
  return out.toDataURL("image/jpeg", 0.92);
}

export default function TrimImg({ src, alt, tolerance = 22, ...rest }) {
  const [url, setUrl] = useState(cache.get(src) || null);

  useEffect(() => {
    if (cache.has(src)) {
      setUrl(cache.get(src));
      return undefined;
    }
    let alive = true;
    const img = new Image();
    img.onload = () => {
      let result = src;
      try {
        result = trim(img, tolerance) || src;
      } catch (e) {
        result = src; // if anything goes wrong, just show the original photo
      }
      cache.set(src, result);
      if (alive) setUrl(result);
    };
    img.onerror = () => {
      cache.set(src, src);
      if (alive) setUrl(src);
    };
    img.src = src;
    return () => {
      alive = false;
    };
  }, [src, tolerance]);

  return (
    <img
      src={url || src}
      alt={alt}
      style={{ opacity: url ? 1 : 0, transition: "opacity .3s ease" }}
      {...rest}
    />
  );
}