const SingleProductImg = ({image, title}) => {
    return (
        <img
            src={image}
            alt={title}
            className="rounded-[2rem] bg-cover min-w-[100%] sm:max-h-[450px]"
        />
    );
}

export default SingleProductImg
