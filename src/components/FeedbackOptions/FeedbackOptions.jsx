import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.css';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.btnForm}>
      {options.map(e => (
        <button
          className={styles.btn}
          key={e}
          type="button"
          onClick={onLeaveFeedback}
        >
          {e}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.elementType.isRequired,
};
