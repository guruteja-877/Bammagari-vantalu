const images = import.meta.glob(
  "./images/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export default images;