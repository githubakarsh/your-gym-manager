

export const Button = (props) => {
    const { children ,  ...other} = props;
    return <button
        className="btn btn-sm"
        {...other}
    >{children}</button>;
};