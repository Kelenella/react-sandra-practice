import PropTypes from 'prop-types';
import { GalleryItem } from '../GalleryItem/GalleryItem';

export function Gallery({ description, images, children }) {
  return (
    <section>
      {children}
      <p>{description}</p>
      <ul>
        {images.map(({ id, src }) => (
          <GalleryItem key={id} src={src} id={id} />
        ))}
      </ul>
    </section>
  );
}

Gallery.defaultProps = {
  description: 'Default text for description',
};

Gallery.propTypes = {
  description: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
    }),
  ),
  children: PropTypes.arrayOf(PropTypes.element),
};
