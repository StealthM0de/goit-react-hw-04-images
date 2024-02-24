import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import ImageModal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

// export class ImageGalleryItem extends Component {
//   static propTypes = {
//     largeImageURL: PropTypes.string.isRequired,
//     webformatURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//   };

//   state = {
//     selectedImage: null,
//   };

export const ImageGalleryItem = ({ largeImageURL, webformatURL, tags }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = () => {
    // this.setState({
    //   selectedImage: this.props.largeImageURL,
    setSelectedImage(largeImageURL);
  };

  const handleCloseModal = () => {
    // this.setState({ selectedImage: null });
    setSelectedImage(null);
  };

  return (
    <li className={css.imageGalleryItem} onClick={handleOpenModal}>
      <img
        className={css.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
      <ImageModal
        modalClose={handleCloseModal}
        isModalOpen={selectedImage !== null}
        image={selectedImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
