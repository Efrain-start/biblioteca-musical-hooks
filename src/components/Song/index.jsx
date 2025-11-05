import "./styles.css";

export default function Song({
  song,
  actionLabel,
  onAction,
  disabled = false,
  secondaryActionLabel,
  onSecondaryAction,
}) {
  const { title, artist, album, duration } = song;

  return (
    <div className="song">
      <div className="song__meta">
        <strong className="song__title">{title}</strong>
        <span className="song__artist">{artist}</span>
        <span className="song__album">· {album}</span>
      </div>

      <div className="song__right">
        <span className="song__duration">{duration}</span>
        {actionLabel && (
          <button
            className="song__btn"
            onClick={() => onAction?.(song)}
            disabled={disabled}
            aria-disabled={disabled}
          >
            {disabled ? "Ya en biblioteca" : actionLabel}
          </button>
        )}
        {secondaryActionLabel && (
          <button
            className="song__btn song__btn--danger"
            onClick={() => onSecondaryAction?.(song.id)}
          >
            {secondaryActionLabel}
          </button>
        )}
      </div>
    </div>
  );
}
