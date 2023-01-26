export const FieldWrapper = ({
  title,
  children,
  errorMessage,
  isError,
  helperText,
}) => {
  return (
    <div className="field-wrapper-container">
      <label>{title}</label>
      {helperText && <label>helperText</label>}
      {isError && <>{errorMessage}</>}
      {children}
    </div>
  );
};
