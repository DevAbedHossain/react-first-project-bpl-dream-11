import BannerLogo from "../assets/banner-main.png";
import HeroImg from "../assets/bg-shadow.png"

const Banner = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${HeroImg})` }} className="container mx-auto py-12 px-6 text-center space-y-2.5 bg-[url({HeroImg})] bg-cover bg-center bg-no-repeat bg-[#131313] rounded-2xl my-3">
                <img className="mx-auto" src={BannerLogo} alt="" />
                <h1 className="text-white text-[40px] font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-white text-2xl font-normal">Beyond Boundaries Beyond Limits</p>
                <button className="rounded bg-[#E7FE29] text-[#131313] text-[16px] font-bold py-2.5 px-5">Claim Free Credit</button>
        </div>
            
        </>
    );
};

export default Banner;