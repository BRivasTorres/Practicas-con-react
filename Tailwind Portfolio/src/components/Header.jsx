import Nav from "./Nav";

const Header = () => {
  return (
		<header className="bg-[#D1FAE5]">
            <section className="w-[60%] mx-auto max-w-[1200px] py-[2rem] flex gap-[2rem] items-end ">
                <h2 className="text-[2rem] font-bold">
                    Web <span className="text-[#059669] ml-[-.6rem] ">Dev</span>{" "}
                </h2>
                <Nav />
            </section>
		</header>
  );
}

export default Header
