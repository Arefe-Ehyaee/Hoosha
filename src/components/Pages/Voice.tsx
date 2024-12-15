import ContactUs from "../ContactUs";
import Navbar from "../Navbar";
import send from "../../assets/Images/arrow.png";
import { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import Lottie from "lottie-react";
import record from "../../assets/lotties/record.json";

export default function VoiceChat() {
  const {
    status, // Current recording status
    startRecording, // Function to start recording
    stopRecording, // Function to stop recording
    mediaBlobUrl, // URL for the recorded audio
  } = useReactMediaRecorder({ audio: true }); // Enable audio recording


  return (
    <div className="bg-[#dcf1f7]">
      <Navbar brandName={"Hoosha"}></Navbar>
      <div className="bg-[#F9FAFF] py-[160px]">
        <div
          className="text-center mb-[50px] font-KalamehBold text-5xl text-[#0a1127]"
          dir="rtl"
        >
          هوشا اینجاست...
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center">Status: {status}</p>
          {status === "recording" && (
            <div>
              <Lottie
                animationData={record}
                loop={true}
                autoplay={true}
                className="hidden lg:block" // Hide on mobile, show on large screens
                // style={{
                //   position: "absolute",
                //   top: "10%",
                //   left: "15%",
                //   width: "12vw",
                //   maxWidth: "180px",
                //   height: "auto",
                // }}
              />
            </div>
          )}
          {/* Display the current recording status */}
          <div className="flex gap-2">
            <button
              onClick={startRecording}
              disabled={status === "recording"}
              className="bg-green-600 p-3 rounded-md text-xl text-white font-bold"
            >
              Start Recording
            </button>
            <button
              onClick={stopRecording}
              disabled={status !== "recording"}
              className="bg-red-600 p-3 rounded-md text-xl text-white font-bold"
            >
              Stop Recording
            </button>
          </div>
          {mediaBlobUrl && (
            <div className="">
              <h3>Recorded Audio:</h3>
              <audio src={mediaBlobUrl} controls /> {/* Audio playback */}
            </div>
          )}
        </div>
      </div>
      <ContactUs></ContactUs>
    </div>
  );
}
