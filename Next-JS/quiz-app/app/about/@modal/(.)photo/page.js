import Frame from "../../components/frame";
import Modal from "../../components/modal";

export default function PhotoModal() {
    const photo =
        "https://avatars.githubusercontent.com/u/176317348?s=400&u=1e3feb8590f745b1637ff6c8f0aede31c7152e31&v=4";

    return (
        <Modal>
            <Frame photo={photo} />
        </Modal>
    );
}
