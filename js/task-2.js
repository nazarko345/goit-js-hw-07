const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];


const galleryList = document.querySelectorAll(".gallery");

galleryList.forEach((item) => {
  images.forEach((image) => {
    const itemCreation = document.createElement("li");
    itemCreation.classList.add("list-item-s");

    const imageCreation = document.createElement("img");
    imageCreation.src = image.url;
    imageCreation.alt = image.alt;
    // styles
    imageCreation.style.width = "420px";
    imageCreation.style.height = "320px";
    imageCreation.style.borderRadius = "15px";

    item.append(itemCreation);
    itemCreation.append(imageCreation);
    console.log(itemCreation);
  });
});
