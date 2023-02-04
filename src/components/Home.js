import React from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import Video from "./Video";
import VideoASubtitle from "../captions/video1.vtt";

const Home = () => {
  return (
    <div className="flex justify-evenly h-screen relative">
      <div className="w-full lg:w-[50%] bg-black">
        <Video
          subtitleFile={VideoASubtitle}
          videoUrl="https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY3NTc4OTkwNH0.aOYpLnsEkGkbn7NmuCDTFNOBG34Fd-rfbX0f4gV6Y5mzOHU7nMMm11S9W1n1A3YiGD3_T_uqwnE1WNvt3XMliesPwh5RCVUnmJ8ZNlLszN0QXutxuv69ImpGq6Vbvn0mbuScHreHPbd0ob1QM6BDRcZ521Lqx1Lf1xByuIj32Dl_P4I0bekilKCnI9BsuJAtH9ntRzCdok3-5BUXnAQ4586cNvn_8b5f5b6QSzGm3M3GvHIjpJnvYZkx8BxRFdJKooGaY66AbzV8bKui3rnOhn9GKhHwCOqIqiMeHJo_-VCyX3X0WmvEiAskWaw-HMt0Nx8z1olQy1340BDB1zJ5iD3CDMepndI6DmGkV-E_79a9gaZAzau1x-2ZwAhM-OEP32eAAz2O5F_iksyNUM0ImNKqeZQwe03yTmrZfaaeBGSXEZ_cenGGi6TnKNnVkkKie-_-FjO4oa7nczW1DnSErlVZfAtkh6RNokpLy_rBBaKTMgS8gz9p7fUVgmj9f-jvDh8rahHc_Dhrbml5flXhZ6ucW5ZHVzQTzCb7ThPDspMouJjOkjY8SAi_-yHfT-d8R3F8bY68HqrKvL-RgddefqL_vmRp6588jMl_6C_doGT2v2zV5apOl0nUgCrxorZQlR9kiZaBMTjKcp_ClWTs6yTQ53H-8Nj1Xb1gqL41BOI"
        />
      </div>
      <div className="lg:w-[50%] lg:flex flex-col justify-center hidden">
        <div className="text-center flex flex-col items-center gap-3">
          <Link to="/pageA">
            <Buttons alphabet="A" placeholder="Campaign Structure" />
          </Link>
          <Link to="/pageB">
            <Buttons alphabet="B" placeholder="Learn FaceBook Basics" />
          </Link>
          <Link to="/pageC">
            <Buttons alphabet="C" placeholder="3rd Choice" />
          </Link>
        </div>
      </div>
      <div className="text-center flex flex-col items-center gap-3 absolute bottom-16 text-white lg:hidden">
        <Link to="/pageA">
          <Buttons alphabet="A" placeholder="Campaign Structure" smallScreen />
        </Link>
        <Link to="/pageB">
          <Buttons
            alphabet="B"
            placeholder="Learn FaceBook Basics"
            smallScreen
          />
        </Link>
        <Link to="/pageC">0
          <Buttons alphabet="C" placeholder="3rd Choice" smallScreen />
        </Link>
      </div>
    </div>
  );
};

export default Home;
