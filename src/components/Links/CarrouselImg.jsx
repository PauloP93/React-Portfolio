export default function CarrouselImg({ image }) {
    return (
        <img
            className="w-32 h-32 items-center"
            src={image.Image}
            alt={image.Name}
        ></img>
    );
}