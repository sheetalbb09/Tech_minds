document.addEventListener("DOMContentLoaded", () => {
  const textContent = document.querySelector(".text-content");
  const h1 = textContent.querySelector("h1");
  const p = textContent.querySelector("p");

  const contentArray = [
    {
      h1: "Renovation & <br>Restructuring Services",
      p: "To Revive and Reinvent",
    },
    {
      h1: "Commercial Building <br>services ",
      p: "Engineered for Long-Term Impact",
    },
    {
      h1: "Smart and Green Building <br> Services",
      p: "For the Concious Era",
    },
    {
      h1: "Residential Services",
      p: "Built for Generation to Come",
    },
  ];

  let contentIndex = 0;

  const changeContent = () => {
   
    h1.innerHTML = contentArray[contentIndex].h1;
    p.textContent = contentArray[contentIndex].p;

   
    contentIndex = (contentIndex + 1) % contentArray.length;
  };


  changeContent();
  const intervalTime = 5000; 
  setInterval(changeContent, intervalTime);
});
