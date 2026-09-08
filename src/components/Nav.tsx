import Logo from "../assets/logo.png"

const Nav = ({ coin }: {coin:number}) => {
    return (
        <>

            <nav>
                <div className="flex gap-4 justify-between items-center container mx-auto py-2">
                    <img src={ Logo} alt="" />

                    <div className="flex justify-end gap-4 items-center">
                        <ul className="flex gap-3 justify-center">
                            <li><a className="text-[16px] text-[#131313]" href="#">Home</a></li>
                            <li><a className="text-[16px] text-[#131313]" href="#">Fixture</a></li>
                            <li><a className="text-[16px] text-[#131313]" href="#">Teams</a></li>
                            <li><a className="text-[16px] text-[#131313]" href="#">Schedules</a></li>
                        </ul>
                        <span className="border border-[#ddd] rounded py-2 px-4">{ coin} coin</span>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default Nav;