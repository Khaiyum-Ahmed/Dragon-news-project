import swimming from "../assets/swimming.png"
import classRoom from "../assets/class.png"
import playGround from "../assets/playground.png"
const QZone = () => {
    return (
        <div className="bg-[#F3F3F3] py-3 px-1 mt-8">
            <h2 className="font-semibold text-xl text-[#403F3F] mb-5 pl-2">Q-Zone</h2>
            <div className="flex flex-col gap-2">
                <img src={swimming} alt="" />
                <img src={classRoom} alt="" />
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default QZone;