import DrinkList from "../components/DrinkList"
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
	<div className="bg-[#F8FAFC] pt-[8rem] min-h-[100vh] ">
		<SearchForm />
		<DrinkList />
	</div>
  );
}

export default Home
