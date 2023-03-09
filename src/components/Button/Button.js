import styles from './Button.module.scss';

export default function Button({onClick}) {
  return (
    <div
      className={`d-flex-row ai-center jc-center pt-24 pr-36 pb-24 pl-36 bora-100 b-primary mt-24 cursor-pointer user-select-none ${styles.hover}`}
      onClick={onClick}
    >
      <p className='c-on-primary ff-primary-font fs-normal-plus'>
        Change image
      </p>
    </div>
  );
};