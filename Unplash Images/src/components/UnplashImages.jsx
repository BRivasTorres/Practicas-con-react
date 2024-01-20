import { APIProvider } from "../contexts/APIContext";
import Form from "./Form";
import ImagesWrapper from "./ImagesWrapper";

const UnplashImages = () => {
  return (
		<div className="w-[100%] flex flex-col items-center min-h-[100vh] bg-[#333333]">
			<h2 className="text-[#645CFF] font-semibold mt-[2rem] h2-styles ">
				Unplash Images
			</h2>
            <APIProvider>
                <Form />
                <ImagesWrapper />
            </APIProvider>
		</div>
  );
}

export default UnplashImages
