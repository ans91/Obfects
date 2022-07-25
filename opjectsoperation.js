const data= [
    {
      fact: "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
      length: 114
    },
    {
      fact: "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.",
      length: 97
    },
    {
      fact: "The technical term for a cat’s hairball is a “bezoar.”",
      length: 54
    },
    {
      fact: "A group of cats is called a “clowder.”",
      length: 38
    },
    {
      fact: "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.",
      length: 142
    },
    {
      fact: "Cats make about 100 different sounds. Dogs make only about 10.",
      length: 62
    },
    {
      fact: "Every year, nearly four million cats are eaten in Asia.",
      length: 55
    },
    {
      fact: "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.",
      length: 100
    },
    {
      fact: "Approximately 24 cat skins can make a coat.",
      length: 43
    },
    {
      fact: "While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.",
      length: 278
    },
  ]

// console.log(data[0].fact)
const arr = [];
let num = 0;
for (i=0;i<data.length;i++) {
    arr.push(data[i].fact);
}

for (i=0;i<data.length;i++) {
    num = num + data[i].length
}

const filterdown = [];
const str = "down";
for (i=0;i<data.length;i++) {
    if (arr[i].includes(str)==true){
        filterdown.push(arr[i]);
    }
}

console.log(arr);
console.log(num);
console.log(filterdown)

const renderTableData = (result) => {
  return result.map((item, index) => {
    return `<tr>
              <td >${item.Name}</td>
              <td >${item.Date}</td>
              <td >${item.state}</td>
          </tr>`;
  }).join('');
};

const dataBinding = (result) => {
  let x = document.getElementById("tableSection");
  x.innerHTML = renderTableData(result);
};
dataBinding([
  { Name: "first", Date: "2020-09-21", state: "USA" },
  { Name: "first", Date: "2020-09-21", state: "USA" },
  { Name: "first", Date: "2020-09-21", state: "USA" },
]);
<table>
  <tr>
    <th>Name</th>
    <th>Date</th>
    <th>state</th>
  </tr>
  <tbody id="tableSection"></tbody>
</table>