export const GalleryItem = ({ id, src }) => {
  return (
    <li>
      <img src={src} alt={id} width={200} />
    </li>
  );
};
