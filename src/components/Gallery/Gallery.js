import PropTypes from 'prop-types';
import { GalleryItem } from '../GalleryItem/GalleryItem';
import styled from 'styled-components';
import s from './Gallery.module.css';

const Styles = styled.div`
  .selector1 {
    font-size: 50px;
  }
  .selector2 {
  }
`;
export function Gallery({ description, images, children }) {
  return (
    <div className="titleWrapper">
      <section className={s.gallerySection}>
        {children}
        <p>{description}</p>
        <ul className={s.galleryList}>
          {images.map(({ id, url }) => (
            <GalleryItem className={s.galleryItem} key={id} src={url} id={id} />
          ))}
        </ul>
      </section>
      <Styles>
        <p className="selector1">
          Lorem doesn't work, but styled-component does
        </p>
      </Styles>
    </div>
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
