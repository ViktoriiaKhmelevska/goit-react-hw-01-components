import PropTypes from 'prop-types';
// import * as S from './Statistics.styled';

export const Statistics = ({ title, stats: {label, percentage}}) => {
    return (
        <section className="statistics">
            {{ title } && <h2 className="title">{title}</h2>}
          
            <ul className="stat-list">
                <li className="item">
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>
                {/* <li className="item">
                    <span className="label">.mp3</span>
                    <span className="percentage">14%</span>
                </li>
                <li className="item">
                    <span className="label">.pdf</span>
                    <span className="percentage">41%</span>
                </li>
                <li classNames="item">
                    <span className="label">.mp4</span>
                    <span className="percentage">12%</span>
                </li> */}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};