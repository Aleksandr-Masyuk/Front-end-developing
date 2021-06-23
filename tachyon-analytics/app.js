const bannerBtn = document.querySelector(".banner-btn");

bannerBtn.addEventListener("click", () => {
  document
    .querySelector(".banner-text")
    .classList.toggle("server_request_for_statistics");
  document
    .querySelector(".server_request_for_statistics")
    .classList.remove("server_request_for_statistics");

  const sendData = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      body: data,
    });
    if (!response.ok) {
      throw new Error(`Error address ${url}, status $(response)`);
    }

    const res = await response.json();
    const mainUrl = "https://api.tachyon-analytics.com/predict/";
    const imageInfo = document.querySelector("#resInfoIng");
    imageInfo.src = mainUrl + res.url;
    imageInfo.innerHTML = `<img src='${imageInfo.src}'>`;
  };

  let clicks = 3;
  const sendForm = () => {
    const form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      trigger = function () {
         clicks--;
         const trigger = document.querySelector("#trigger")
        trigger.innerHTML = `requests: ${clicks}`;
        if(clicks == 0) {
            trigger.innerHTML = `requests ended`;
            alert("###")
        }
      };
      trigger();


      const formData = new FormData(form);

      const data = {};
      for (const [key, value] of formData) {
        data[key] = value;
      }

      sendData("https://api.tachyon-analytics.com/predict/", formData)
        .catch

        //test error
        // (err) => {
        //   alert(err);
        // }
        ();
    });
  };

  sendForm();
});
