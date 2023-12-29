let comments = [
  {
    name: "Abdullah kamran",
    comment: `"Excellent service and friendly staff. Had a fantastic experience!"`,
    imgSrc: "imgs/g1.png",
    starCnt: 5,
  },
  {
    name: "Ali Amir",
    comment: `"Beautiful destinations and affordable prices. Highly recommended!"`,
    imgSrc: "imgs/g2.png",
    starCnt: 4,
  },
  {
    name: "Ahmad Latif",
    comment: `"Amazing vacation with Hasnain Travels. Unforgettable memories!"`,
    imgSrc: "imgs/g3.png",
    starCnt: 5,
  },
  {
    name: "Amir Yaqoob",
    comment: `"Great service and very friendly staff. Will definitely book again!"`,
    imgSrc: "imgs/g4.png",
    starCnt: 4,
  },
  {
    name: "Zahid Iqbal",
    comment: `"Had an incredible trip with Hasnain Travels. Top-notch experience!"`,
    imgSrc: "imgs/g5.png",
    starCnt: 5,
  },
];

var commentNo = 0;
function handleClick() {
  let div = document.querySelector("#commmentsDiv");
  let img = div.getElementsByTagName("img");
  let cmt = div.getElementsByTagName("p")[1];
  let paragraphs = div.getElementsByTagName("p");
  paragraphs[0].textContent = comments[commentNo].name;
  img[0].setAttribute("src", comments[commentNo].imgSrc);
  cmt.textContent = comments[commentNo].comment;
  let starDiv = div.getElementsByClassName("star")[0];
  let is = starDiv.getElementsByTagName("i");
  let cnt = comments[commentNo].starCnt;
  for (let i = 0; i < is.length; i++) {
    is[i].classList.remove("checked");
  }
  for (let i = 0; i < cnt && i < is.length; i++) {
    is[i].classList.add("checked");
  }
}
function handleArrowUp() {
  if (commentNo > 0) {
    commentNo--;
    handleClick();
  }
}
function handleArrowDown() {
  if (commentNo < comments.length) {
    commentNo++;
    handleClick();
  }
}
function goToPage(page) {
  window.location.href = page;
}

var picNo = 6;
function submitComment(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const ratingInput = document.getElementById("rating");
  const commentInput = document.getElementById("comment");

  const name = nameInput.value;
  const rating = ratingInput.value;
  const commentText = commentInput.value;

  comments.push({
    name: name,
    comment: `"${commentText}"`,
    imgSrc: `/imgs/g${picNo}.png`,
    starCnt: parseInt(rating, 10),
  });
  saveData();
  nameInput.value = "";
  ratingInput.value = "0";
  commentInput.value = "";
}
function backToHomePage() {
  window.location.hred = "index.html";
}
function validateForm(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var rating = document.getElementById("rating").value;
  var comment = document.getElementById("comment").value;
  const nameErr1 = document.getElementsByClassName("nameEmptyErr")[0];
  const nameErr2 = document.getElementsByClassName("nameEmptyErr2")[0];
  const ratingErr = document.getElementsByClassName("ratingErr")[0];
  const commentErr = document.getElementsByClassName("commentErr")[0];
  const namePattern = /^[a-zA-Z]+\s[a-zA-Z]+$/;


  if (!namePattern.test(name)) {
    nameErr2.setAttribute("id", "visible");
    setTimeout(() => {
      nameErr2.removeAttribute("id");
    }, 2000);
    document.getElementById("name")="";
    return false;
  }
  if (name.trim() === "") {
    nameErr1.setAttribute("id", "visible");
    setTimeout(() => {
      nameErr1.removeAttribute("id");
    }, 2000);
    document.getElementById("name")="";
    return false;
  }

  if (rating === "0") {
    ratingErr.setAttribute("id", "visible");
    setTimeout(() => {
      ratingErr.removeAttribute("id");
    }, 2000);
    document.getElementById("rating")="";
    return false;
  }

  if (comment.trim() === "") {
    commentErr.setAttribute("id", "visible");
    setTimeout(() => {
      commentErr.removeAttribute("id");
    }, 2000);
    document.getElementById("comment")="";
    return false;;
  }
  let app=document.getElementsByClassName("approved")[0];
  app.setAttribute("id","visibleSpan");
  setTimeout(() => {
    app.removeAttribute("id");
  }, 2000);

  submitComment(event); 
  return false; 
}
function saveData() {
  localStorage.setItem("comments", JSON.stringify(comments));
}
function loadData() {
  const storedComments = localStorage.getItem("comments");
  if (storedComments) {
    comments = JSON.parse(storedComments);
  }
}
window.onload = function () {
  loadData();
  handleClick();
};

