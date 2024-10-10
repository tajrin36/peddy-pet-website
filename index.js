//!------------load categories function---------------
const loadCategories = () => {
  //fetch the data
fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

//!---------------pet card fetch------------------
const loadPetCards = () => {
  //fetch the data
fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((response) => response.json())
    .then((data) => displayPetsCards(data.pets))
    .catch((error) => console.log(error));
};

//!-------------------- load pet details function---------------
const loadDetails = async (petId) => {
console.log(petId);
const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
const response = await fetch(uri);
const data = await response.json();
displayDetails(data.petData);
};
const displayDetails = (petDetails) => {
console.log(petDetails);
const detailsContainer = document.getElementById("modal-content");
detailsContainer.innerHTML = `
    <img class= " rounded-xl " src=${petDetails.image} />
    <h2 class="text-[#131313] text-2xl font-bold my-3">${
        petDetails.pet_name
    }</h2>
    <div class="grid grid-cols-2 grid-rows-3">

                <div class="flex gap-2 items-center">
                    <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 20  20" fill="none">
                        <g clip-path="url(#clip0_2081_39)">
                            <path d="M3.33334 3.33337H8.33334V8.33337H3.33334V3.33337Z" stroke="#5A5A5A"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.6667 3.33337H16.6667V8.33337H11.6667V3.33337Z" stroke="#5A5A5A"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.33334 11.6666H8.33334V16.6666H3.33334V11.6666Z" stroke="#5A5A5A"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M11.6667 14.1666C11.6667 14.8297 11.9301 15.4656 12.3989 15.9344C12.8677 16.4032 13.5036 16.6666 14.1667 16.6666C14.8297 16.6666 15.4656 16.4032 15.9344 15.9344C16.4033 15.4656 16.6667 14.8297 16.6667 14.1666C16.6667 13.5036 16.4033 12.8677 15.9344 12.3989C15.4656 11.93 14.8297 11.6666 14.1667 11.6666C13.5036 11.6666 12.8677 11.93 12.3989 12.3989C11.9301 12.8677 11.6667 13.5036 11.6667 14.1666Z"
                                stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2081_39">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    
                    <p>Breed: ${
                        petDetails.breed ? petDetails.breed : "Not Available"
                    }</p>
                </div>

                <div class="flex gap-2 items-center">
                    <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 20 20" fill="none">
                        <path
                            d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.75272 2.69754 5.27581 3.04917 4.92417C3.40081 4.57254 3.87772 4.375 4.375 4.375H15.625C16.1223 4.375 16.5992 4.57254 16.9508 4.92417C17.3025 5.27581 17.5 5.75272 17.5 6.25V15.625M2.5 15.625C2.5 16.1223 2.69754 16.5992 3.04917 16.9508C3.40081 17.3025 3.87772 17.5 4.375 17.5H15.625C16.1223 17.5 16.5992 17.3025 16.9508 16.9508C17.3025 16.5992 17.5 16.1223 17.5 15.625M2.5 15.625V9.375C2.5 8.87772 2.69754 8.40081 3.04917 8.04917C3.40081 7.69754 3.87772 7.5 4.375 7.5H15.625C16.1223 7.5 16.5992 7.69754 16.9508 8.04917C17.3025 8.40081 17.5 8.87772 17.5 9.375V15.625"
                            stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    
                    <p>Birth: ${
                        petDetails.date_of_birth
                        ? petDetails.date_of_birth
                        : "Not Available"
                    }</p>
                </div>

                <div class="flex gap-2 items-center">
                    <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 20 20" fill="none">
                        <g opacity="0.7" clip-path="url(#clip0_2081_51)">
                            <path d="M10 11.6666V17.5" stroke="#131313" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M7.5 15H12.5" stroke="#131313" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M10 5C10.8841 5 11.7319 5.35119 12.357 5.97631C12.9821 6.60143 13.3333 7.44928 13.3333 8.33333C13.3333 9.21739 12.9821 10.0652 12.357 10.6904C11.7319 11.3155 10.8841 11.6667 10 11.6667C9.11594 11.6667 8.2681 11.3155 7.64297 10.6904C7.01785 10.0652 6.66666 9.21739 6.66666 8.33333C6.66666 7.44928 7.01785 6.60143 7.64297 5.97631C8.2681 5.35119 9.11594 5 10 5Z"
                                stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M12.5 2.5C12.5 3.16304 12.2366 3.79893 11.7678 4.26777C11.2989 4.73661 10.663 5 10 5C9.33696 5 8.70107 4.73661 8.23223 4.26777C7.76339 3.79893 7.5 3.16304 7.5 2.5"
                                stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2081_51">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    
                    <p>Gender: ${
                        petDetails.gender ? petDetails.gender : "Not Available"
                    }</p>
                </div>

                <div class="flex gap-2 items-center">
                    <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_2081_103)">
                            <path
                                d="M13.9167 6.66667C13.7508 6.19603 13.4479 5.7858 13.0469 5.48878C12.6459 5.19176 12.1652 5.02153 11.6667 5H8.33334C7.6703 5 7.03442 5.26339 6.56558 5.73223C6.09674 6.20107 5.83334 6.83696 5.83334 7.5C5.83334 8.16304 6.09674 8.79893 6.56558 9.26777C7.03442 9.73661 7.6703 10 8.33334 10H11.6667C12.3297 10 12.9656 10.2634 13.4344 10.7322C13.9033 11.2011 14.1667 11.837 14.1667 12.5C14.1667 13.163 13.9033 13.7989 13.4344 14.2678C12.9656 14.7366 12.3297 15 11.6667 15H8.33334C7.8348 14.9785 7.3541 14.8082 6.95312 14.5112C6.55214 14.2142 6.24922 13.804 6.08334 13.3333"
                                stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 2.5V5M10 15V17.5" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2081_103">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Price : ${
                        petDetails.price ? petDetails.price : "Not Available"
                    }$</p>
                </div>
                
                <div class="flex gap-2 items-center mb-1">
                    <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 20 20" fill="none">
                        <g opacity="0.7" clip-path="url(#clip0_2081_51)">
                            <path d="M10 11.6666V17.5" stroke="#131313" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M7.5 15H12.5" stroke="#131313" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M10 5C10.8841 5 11.7319 5.35119 12.357 5.97631C12.9821 6.60143 13.3333 7.44928 13.3333 8.33333C13.3333 9.21739 12.9821 10.0652 12.357 10.6904C11.7319 11.3155 10.8841 11.6667 10 11.6667C9.11594 11.6667 8.2681 11.3155 7.64297 10.6904C7.01785 10.0652 6.66666 9.21739 6.66666 8.33333C6.66666 7.44928 7.01785 6.60143 7.64297 5.97631C8.2681 5.35119 9.11594 5 10 5Z"
                                stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M12.5 2.5C12.5 3.16304 12.2366 3.79893 11.7678 4.26777C11.2989 4.73661 10.663 5 10 5C9.33696 5 8.70107 4.73661 8.23223 4.26777C7.76339 3.79893 7.5 3.16304 7.5 2.5"
                                stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2081_51">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Vaccinated status: ${
                        petDetails.vaccinated_status
                        ? petDetails.vaccinated_status
                        : "Not Available"
                    }</p>
                </div>
                
                
            </div>
    </div>
    <hr>
    <h2 class="text-[#131313] text-base font-bold">Details Information</h2>
    <p class="text-main-text text-base font-normal">${
        petDetails.pet_details
    }</p>
    `;

    document.getElementById("customModal").showModal();
};

//!---------active button---------------
const removeActiveClass = () => {
    const buttons = document.getElementsByClassName("category-btn");
    console.log(buttons);
    for (btn of buttons) {
    btn.classList.remove("active");
    }
};

//!---------------load pet category--------------
const loadPetCategories = (category) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((response) => response.json())
    .then((data) => {
      // remove all active class
        removeActiveClass();

        const activeBtn = document.getElementById(`btn-${category}`);
        activeBtn.classList.add("active");
        displayPetsCards(data.data);
    })
    .catch((error) => console.log(error));
};

//!-----------------display categories function------------
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById("categories-container");
    categories.forEach((item) => {
    // console.log(item)  ;

    //create buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
        <button id="btn-${item.category}" onclick="loadPetCategories('${item.category}')"  class="category-btn btn bg-white h-20 py-1 border border-gray-300 rounded-lg flex flex-row items-center justify-center px-5 ">
        <div  class="md:w-14 md:h-11 w-10 mr-2"><img class = "w-full h-full object-contain" src="${item.category_icon}" ></div>
        <p class="text-[#131313] text-xl md:text-2xl font-bold">${item.category}</p>
        </button>
    `;

    // add button to category container
    categoriesContainer.append(buttonContainer);
    });
};

//!---------------- liked image section---------------
const likedcontent = (image) => {
  // console.log(image);
    const createImageUrl = document.createElement("img");
    createImageUrl.src = image;
    document.getElementById("image-container").appendChild(createImageUrl);
};

//!--------------- adopt animal countdown modal---------------
document.addEventListener("DOMContentLoaded", function () {
    const adoptButton = document.querySelectorAll("[id^='adoptPetButton']");

    adoptButton.forEach((button) => {
    button.addEventListener("click", () => {
        const petId = button.id.replace("adoptPetButton", "");
        adoptAnimal(petId);
    });
    });
});
const adoptAnimal = (pet) => {
    const petModal = document.getElementById("adopt-pet-modal");
    const countDownFeature = document.getElementById("countdown");

  //modal
    document.documentElement.classList.add("modal-open");
    petModal.classList.add("modal-open");
  // petModal.classList.remove('hidden');
  // petModal.classList.add('block');

    let countdown = 3;
    countDownFeature.textContent = countdown;

    const intervalId = setInterval(() => {
    countdown -= 1;
    countDownFeature.textContent = countdown;

    if (countdown === 0) {
        clearInterval(intervalId);

      //hiding the modal
        document.documentElement.classList.remove("modal-open");
        petModal.classList.remove("modal-open");
      // petModal.classList.remove('block');
      // petModal.classList.add('hidden');

      //button disable
        const adoptPetButtons = document.getElementById(`adoptPetButton${pet}`);
        adoptPetButtons.disabled = true;
        adoptPetButtons.classList.add("btn-disabled", "gray-color");
    }
    }, 1000);
};

//!-----------------sort by price------------------
document.getElementById("sort-button").addEventListener("click", function () {
    sortByPrice();
});
const sortByPrice = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((response) => response.json())
    .then((data) => {
        const sortPrice = data.pets.sort((a, b) => b.price - a.price);
        displayPetsCards(sortPrice);
    })
    .catch((error) => {
        console.error(error);
    });
};

//!------------- display pet cards-----------------
const displayPetsCards = (pets) => {
    const petLeftCard = document.getElementById("pet-left-card");
    petLeftCard.innerHTML = "";

    if (pets.length == 0) {
    petLeftCard.classList.remove("grid");
    petLeftCard.innerHTML = `
        <div class="flex flex-col justify-center items-center gap-3 bg-gray-200 mx-auto p-5 rounded-xl">
            <img src="./assets/images/error.webp" alt="">
            <h1 class="text-[#131313] text-4xl font-bold text-center">No Information Available</h1>
            <p class="md:w-[60%] text-center text-main-text text-base font-normal">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
        </div>
    `;
    } else {
    petLeftCard.classList.add("grid");
    }
    pets.forEach((pet) => {
    console.log(pet);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
    <div class="border rounded-lg shadow-lg">
                <figure class="  ">
                    <img src=${
                        pet.image
                    } class="h-full w-full object-cover" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-[#131313] text-2xl font-extrabold">${
                        pet.pet_name ? pet.pet_name : "Not Available"
                    }</h2>
                    <div>

                        <div class="flex gap-2 items-center">
                            <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 20  20" fill="none">
                                <g clip-path="url(#clip0_2081_39)">
                                    <path d="M3.33334 3.33337H8.33334V8.33337H3.33334V3.33337Z" stroke="#5A5A5A"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.6667 3.33337H16.6667V8.33337H11.6667V3.33337Z" stroke="#5A5A5A"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3.33334 11.6666H8.33334V16.6666H3.33334V11.6666Z" stroke="#5A5A5A"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M11.6667 14.1666C11.6667 14.8297 11.9301 15.4656 12.3989 15.9344C12.8677 16.4032 13.5036 16.6666 14.1667 16.6666C14.8297 16.6666 15.4656 16.4032 15.9344 15.9344C16.4033 15.4656 16.6667 14.8297 16.6667 14.1666C16.6667 13.5036 16.4033 12.8677 15.9344 12.3989C15.4656 11.93 14.8297 11.6666 14.1667 11.6666C13.5036 11.6666 12.8677 11.93 12.3989 12.3989C11.9301 12.8677 11.6667 13.5036 11.6667 14.1666Z"
                                        stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2081_39">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p class="text-gray-500 text-lg font-normal">Breed: ${
                                pet.breed ? pet.breed : "Not Available"
                            }</p>
                        </div>

                        <div class="flex gap-2 items-center">
                            <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.75272 2.69754 5.27581 3.04917 4.92417C3.40081 4.57254 3.87772 4.375 4.375 4.375H15.625C16.1223 4.375 16.5992 4.57254 16.9508 4.92417C17.3025 5.27581 17.5 5.75272 17.5 6.25V15.625M2.5 15.625C2.5 16.1223 2.69754 16.5992 3.04917 16.9508C3.40081 17.3025 3.87772 17.5 4.375 17.5H15.625C16.1223 17.5 16.5992 17.3025 16.9508 16.9508C17.3025 16.5992 17.5 16.1223 17.5 15.625M2.5 15.625V9.375C2.5 8.87772 2.69754 8.40081 3.04917 8.04917C3.40081 7.69754 3.87772 7.5 4.375 7.5H15.625C16.1223 7.5 16.5992 7.69754 16.9508 8.04917C17.3025 8.40081 17.5 8.87772 17.5 9.375V15.625"
                                    stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <p class="text-gray-500 text-lg font-normal">Birth: ${
                                pet.date_of_birth
                                ? pet.date_of_birth
                                : "Not Available"
                            }</p>

                        </div>

                        <div class="flex gap-2 items-center">
                            <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 20 20" fill="none">
                                <g opacity="0.7" clip-path="url(#clip0_2081_51)">
                                    <path d="M10 11.6666V17.5" stroke="#131313" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.5 15H12.5" stroke="#131313" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 5C10.8841 5 11.7319 5.35119 12.357 5.97631C12.9821 6.60143 13.3333 7.44928 13.3333 8.33333C13.3333 9.21739 12.9821 10.0652 12.357 10.6904C11.7319 11.3155 10.8841 11.6667 10 11.6667C9.11594 11.6667 8.2681 11.3155 7.64297 10.6904C7.01785 10.0652 6.66666 9.21739 6.66666 8.33333C6.66666 7.44928 7.01785 6.60143 7.64297 5.97631C8.2681 5.35119 9.11594 5 10 5Z"
                                        stroke="#131313" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M12.5 2.5C12.5 3.16304 12.2366 3.79893 11.7678 4.26777C11.2989 4.73661 10.663 5 10 5C9.33696 5 8.70107 4.73661 8.23223 4.26777C7.76339 3.79893 7.5 3.16304 7.5 2.5"
                                        stroke="#131313" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2081_51">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p class="text-gray-500 text-lg font-normal">Gender: ${
                                pet.gender ? pet.gender : "Not Available"
                            }</p>
                        </div>

                        <div class="flex gap-2 items-center">
                            <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_2081_103)">
                                    <path
                                        d="M13.9167 6.66667C13.7508 6.19603 13.4479 5.7858 13.0469 5.48878C12.6459 5.19176 12.1652 5.02153 11.6667 5H8.33334C7.6703 5 7.03442 5.26339 6.56558 5.73223C6.09674 6.20107 5.83334 6.83696 5.83334 7.5C5.83334 8.16304 6.09674 8.79893 6.56558 9.26777C7.03442 9.73661 7.6703 10 8.33334 10H11.6667C12.3297 10 12.9656 10.2634 13.4344 10.7322C13.9033 11.2011 14.1667 11.837 14.1667 12.5C14.1667 13.163 13.9033 13.7989 13.4344 14.2678C12.9656 14.7366 12.3297 15 11.6667 15H8.33334C7.8348 14.9785 7.3541 14.8082 6.95312 14.5112C6.55214 14.2142 6.24922 13.804 6.08334 13.3333"
                                        stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M10 2.5V5M10 15V17.5" stroke="#5A5A5A" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2081_103">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p class="text-gray-500 text-lg font-normal">Price: ${
                                pet.price ? pet.price : "Not Available"
                            }$</p>
                        </div>
                    </div>
                    <hr>
                    <div class="card-actions flex justify-center">
                        <button onclick="likedcontent('${
                            pet.image
                        }')" class="btn bg-white border-gray-300 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>

                        </button>
                        <button id="adoptPetButton${
                            pet.petId
                        }" onclick="adoptAnimal('${
        pet.petId
    }')" class="btn bg-white text-bg-primary border-gray-300">Adopt</button>
                        <button onclick="loadDetails(${
                            pet.petId
                        })" class="btn bg-white text-bg-primary border-gray-300">Details</button>
                    </div>
                </div>
            </div>
    `;
    petLeftCard.append(card);
    });
};

//!-----------function call---------------
loadCategories();
loadPetCards();
