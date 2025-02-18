import './index.css'
import {FaImage, FaPlay} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const PostDetails = ({title, id, description, imageUrl}) => {
  return (
    <div className="main-container-post-details">
      <div className="post-container-post-details">
        <img className="post-image-post-details" src={imageUrl} />
        <div className="text-over-image-post-details">
          <div className="only-para-container-post-details">
            <p className="Aenean-text-style-post-details">Aenean Eleifend</p>
            <p className="Aenean-text-style-post-details">Aliquam</p>
          </div>
          {id % 2 === 0 ? (
            <div className="icon-container-post-details">
              <FaImage className="icon-style-post-details" />
            </div>
          ) : (
            <div className="icon-container-post-details">
              <FaPlay className="icon-style-post-details" />
            </div>
          )}
        </div>

        <h1 className="heading-post-details">{title}</h1>
        <div className="image-content-container-post-details">
          <div className="image-container-post-details">
            <img
              className="name-image-style-post-details"
              src="https://s3-alpha-sig.figma.com/img/0e5d/8279/8e2becda16e2f3abc85e162b63a8d214?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dErnrHuGOQDPxD5AxD22jeNbsrycvZeWP-2W7EXzC0pENUO2vvd1B-rOAaYBrDSfbMgQfdURmT0hQaMbp9haoOdjj-qFxP~RdHqtnDR7FCcXw3Oip6c6455T1uotRhSU3wP3-LWsafVYw5CNKy3J5YLu~S5~92twes2PQ6L7U5deSFHhQK3xjKj0AwB-q1aSqpKJ2LzAZjQxQglrMljAbLH6Ixmomo7ocLCFor4-0wX96sfAa8yi9pzL7kyjGSxhzo5yNOpoo9FPAkoCCIy4sD~Ygk4L6TNf3y2tZOYktFSWIuIYUKKQgOrep8ZxiB1oTt4yB4rj3bylUhv1ZoeG7A__"
            />
            <h1 className="name-style-post-details">Jonana Walik</h1>
          </div>

          <p className="post-para-post-details">June 28, 2018</p>
          <p className="post-para-post-details">1K Shares</p>
        </div>

        <p className="post-para-post-details">{description}</p>
      </div>
      <div className="viewpost-link-post-details">
        <Link to="/blogpage" className="view-post-para-link-post-details">
          View Post
        </Link>
      </div>
    </div>
  )
}
export default PostDetails
