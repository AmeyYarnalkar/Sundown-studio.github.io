const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e),
  time=3,
  delay=3

})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let img = document.getElementById("fixed-image")
let contain = document.getElementById("elem-container")

contain.addEventListener("mouseenter",function(){
    img.style.display = "block"
})
contain.addEventListener("mouseleave",function(){
    img.style.display = "none"
})

let elements = document.querySelectorAll(".elem")
elements.forEach(function(e) {
    e.addEventListener("mouseenter", function(){
        let data = e.getAttribute("data-image")
        img.style.backgroundImage = `url(${data})`
    })
})



// Selecting head elements
let head1 = document.querySelector("#page4 #container .head1");
let head2 = document.querySelector("#page4 #container .head2");
let head3 = document.querySelector("#page4 #container .head3");

// Selecting content element
let content = document.querySelector("#page4 #container p");

// Selecting image elements
let img1 = document.querySelector("#page4 #container .right .img1");
let img2 = document.querySelector("#page4 #container .right .img2");
let img3 = document.querySelector("#page4 #container .right .img3");

// Function to toggle content and images smoothly
function toggleContentAndImages(newContent, newImg) {
    // Fade out content
    content.style.opacity = "0";

    // Set a short delay before updating content and images
    setTimeout(function() {
        // Update content
        content.textContent = newContent;

        // Hide all images
        img1.style.opacity = "0";
        img2.style.opacity = "0";
        img3.style.opacity = "0";

        // Show the selected image
        newImg.style.opacity = "1";

        // Fade in content
        content.style.opacity = "1";
    }, 300); // 300ms delay for smoother transition
}

// Adding event listener for head1 click
head1.addEventListener("click", function() {
    toggleContentAndImages("Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.", img1);
});

// Adding event listener for head2 click
head2.addEventListener("click", function() {
    toggleContentAndImages("Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.", img2);
});

// Adding event listener for head3 click
head3.addEventListener("click", function() {
    toggleContentAndImages("We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.", img3);
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,

  });


let image = document.querySelector(".swiper-wrapper");
let movable = document.querySelector(".movable");

image.addEventListener("mouseenter", () => {
    gsap.to(".movable", { // Include the '.' to select elements by class
        opacity: 1,
        scale: 1
    });
});
image.addEventListener("mouseleave", () => {
    gsap.to(".movable", { // Include the '.' to select elements by class
        opacity: 0,
        scale: 0
    });
});
image.addEventListener("mousemove", (dets) => {
    gsap.to(".movable", { // Include the '.' to select elements by class
        left:dets.x-50,
        top:dets.y-80
    });
});



var loader = document.querySelector(".loader");
setTimeout(function() {
    loader.style.top = "-100%";
}, 1300);

var text = document.querySelector(".loader h1");

setTimeout(function(){
    text.textContent = "Experience";
}, 600);

setTimeout(function(){
    text.textContent = "Style";
}, 1200);

