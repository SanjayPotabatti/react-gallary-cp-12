// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, activeImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'thmbActive' : 'thumb'

  const onClickThumbnail = () => {
    activeImage(id)
  }

  return (
    <li className="listContiner">
      <button type="button" className="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
