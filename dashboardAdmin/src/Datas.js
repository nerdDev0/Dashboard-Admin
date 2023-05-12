let xAxisData = [
  { id: 1, name: "Jan", Sale: 230 },
  { id: 2, name: "Feb", Sale: 310 },
  { id: 3, name: "Mar", Sale: 250 },
  { id: 4, name: "Apr", Sale: 300 },
  { id: 5, name: "May", Sale: 320 },
  { id: 6, name: "June", Sale: 380 },
  { id: 7, name: "July", Sale: 440 },
  { id: 8, name: "Aug", Sale: 600 },
  { id: 9, name: "Sep", Sale: 580 },
  { id: 10, name: "Oct", Sale: 270 },
  { id: 11, name: "Nov", Sale: 540 },
  { id: 12, name: "Dec", Sale: 1000 },
];

//January, February, March, April, May, June, July, and August. September, October, November, and December

const newMember = [
  {
    id: 1,
    userName: "Amir hossein",
    jobTitle: "Front End Developer",
    image: "Images/avatar.jpg",
  },
  {
    id: 2,
    userName: "Amir alavi",
    jobTitle: "Backend Developer",
    image: "Images/avatar.jpg",
  },
  {
    id: 3,
    userName: "mohamad hosseini",
    jobTitle: "fullStack Developer",
    image: "Images/avatar.jpg",
  },
  {
    id: 4,
    userName: "sara sarai",
    jobTitle: "Mobile Developer",
    image: "Images/avatar.jpg",
  },
];

const transferActions=[
  {
    id:1,
    customer:"Amir hossein",
    date:'12 feb',
    Amount:'123',
    status:'Declined',
  image:'Images/avatar.jpg'
}
,
{
  id:2,
  customer:"mohamad alavi",
  date:'3 mey',
  Amount:'54',
  status:'Pending',
image:'Images/avatar.jpg'
}
,
{
  id:3,
  customer:"sina kheir",
  date:'20 june',
  Amount:'76',
  status:'Declined',
image:'Images/avatar.jpg'
}
,
{
  id:4,
  customer:"kimia jan",
  date:'des 2',
  Amount:'43',
  status:'Approved',
image:'Images/avatar.jpg'
}
]
 

const userRows=[
  {id:1,username:'Amirhossein',status:'Active',avatar:'Images/avatar.jpg',transAction:'$122'},
  {id:2,username:'mohamad',status:'diActive',avatar:'Images/avatar.jpg',transAction:'$65'},
  {id:3,username:'ali',status:'Active',avatar:'Images/avatar.jpg',transAction:'$17'},
  {id:4,username:'sina',status:'diActive',avatar:'Images/avatar.jpg',transAction:'$87'},
  
]

const products =[
  {id:1,title:'HP',avatar:'Images/avatar.jpg',price:'$2000'},
  {id:2,title:'Asus',avatar:'Images/avatar.jpg',price:'$2100'},
  {id:3,title:'Acer',avatar:'Images/avatar.jpg',price:'$1200'},
  {id:4,title:'Del',avatar:'Images/avatar.jpg',price:'$467'},
]

const productsData =[
  { id: 1, name: "Mar", Sale: 120 },
  { id: 2, name: "Apr", Sale: 400 },
  { id: 3, name: "May", Sale: 50 },
]


export { xAxisData,newMember,transferActions,userRows,products,productsData };
