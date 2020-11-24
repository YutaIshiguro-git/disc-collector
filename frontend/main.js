fetch('http://localhost:3333/')
.then((res) => res.json())
.then((data) => console.log(data.message));

