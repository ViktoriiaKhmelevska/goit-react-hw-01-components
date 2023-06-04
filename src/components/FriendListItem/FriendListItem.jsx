import PropTypes from 'prop-types';
// import * as S from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, status}) => {
    return (
        <li className="item">
            <span status={status}></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool,
};