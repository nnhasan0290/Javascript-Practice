alert("this is working");

const func = async () => {
  await fetch("https://3001-nnhasan0290-javascriptp-u7413wnmdqn.ws-us61.gitpod.io/")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  fetch(
    "https://3001-nnhasan0290-javascriptp-u7413wnmdqn.ws-us61.gitpod.io/cookie"
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
func();
