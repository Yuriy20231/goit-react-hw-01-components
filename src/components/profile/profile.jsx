import css from './profile.module.css'
import PropTypes from 'prop-types';


export const Profile = ({username, tag, location, avatar, stats}) => {
    return (<div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className={css.stats}>
      <li className={css.statsList}>
        <span className={css.label}>Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li className={css.statsList}>
        <span className={css.label}>Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li className={css.statsList}>
        <span className={css.label}>Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>)
}


PropTypes.PropTypes = {
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.array.isRequired,
  };











