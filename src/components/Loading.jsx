import classes from "./Loading.module.css";

const Loading = () => {

    return (
        <>
            <p className={classes.loading}>
                Loading
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </p>
        </>
    )
}

export default Loading;