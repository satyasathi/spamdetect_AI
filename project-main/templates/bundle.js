$primary-color: #5c5c5c;
$secondary-color: #f7b52b;
$tertiary-color: #ffffff;

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	font-size: 62.5%;
}

body {
	font-family: Arial, sans-serif;
	background-color: $tertiary-color;
}

.container {
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
}

h1 {
	font-size: 3.6rem;
	text-align: center;
	color: $primary-color;
	margin-bottom: 2rem;
}

form {
	display: flex;
	flex-direction: column;
	align-items: center;
}

label {
	margin-bottom: 1rem;
	color: $primary-color;
	font-size: 1.6rem;
}

input[type="text"] {
	width: 100%;
	padding: 1.6rem;
	margin-bottom: 2rem;
	border: none;
	border-bottom: 2px solid $primary-color;
	font-size: 1.6rem;
}

button {
	padding: 1.6rem 3.2rem;
	background-color: $secondary-color;
	color: #fff;
	border: none;
	border-radius: 5px;
	font-size: 1.6rem;
	cursor: pointer;
	transition: background-color 0.2s ease;
}

button:hover {
	background-color: darken($secondary-color, 10%);
}

#result {
	margin-top: 2rem;
	text-align: center;
	font-size: 2rem;
	font-weight: bold;
	color: $primary-color;
}

.r {
  position: relative;
  display: inline-block;
  font-size: 5rem;
  margin: 1rem;
}

.r span {
  position: absolute;
  display: block;
}

.r .r1 {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #f44336;
  animation: r1 2s linear infinite;
}

.r .r2 {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #ffeb3b;
  animation: r2 2s linear infinite;
}

.r .r3 {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #2196f3;
  animation: r3 2s linear infinite;
}

@keyframes r1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes r2 {
  0% {
    transform: rotate(0deg);
  }
