//Some data just to test the card slider
const realExperiences = [
   {
      image: "profile.png",
      comment:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam et natus voluptas sed repellendus.",
   },
   {
      image: "profile2.png",
      comment:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam et natus voluptas sed repellendus.",
   },
   {
      image: "profile.png",
      comment:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam et natus voluptas sed repellendus.",
   },
];

//Gets all necessary elements from the DOM
const profileImg = document.querySelector(".rounded-container--profile");
const comment = document.querySelector(".card-carousel--profiles p");
const paginationDots = document.querySelectorAll(".card-carousel__dot");

//This index will let me loop the array using an interval
let arrayIndex = 0;

const startCardSlider = () => {
   setInterval(() => {
      //Aplying some manual styles
      profileImg.style.backgroundImage = `url(public/assets/img/${realExperiences[arrayIndex].image})`;
      profileImg.style.backgroundSize = "cover";
      comment.textContent = realExperiences[arrayIndex].comment;

      //Removing actual-page class from other dots
      paginationDots.forEach((pageDot) => {
         pageDot.classList.remove("card-carousel__dot--highlighted");
      });

      //Asigning actual-page class to corresponding dot
      paginationDots[arrayIndex].classList.add(
         "card-carousel__dot--highlighted"
      );

      //Will increment the index or restore it's value to 0
      arrayIndex < realExperiences.length - 1
         ? (arrayIndex += 1)
         : (arrayIndex = 0);
   }, 5000);
};

export default startCardSlider;
