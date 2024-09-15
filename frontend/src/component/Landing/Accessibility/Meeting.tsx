import { useEffect } from "react";

const HubSpotMeeting = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="meetings-iframe-container" data-src="https://meetings-eu1.hubspot.com/luther-n-a?embed=true"></div>
  );
};

export default HubSpotMeeting;
