import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
// import * as S from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    status={friend.status}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};