/*arr=[1,2,3,4];
const arr1=arr.map((ele)=>(ele*2));
console.log(arr1);*/
let fetchres = fetch("https://jsonplaceholder.typicode.com/posts");
fetchres
  .then(response => response.json())
  .then(data => {
    // Now data is an array of posts
    data.map(ele => {
      console.log(ele);  // Logs each post object
    });
  });
   