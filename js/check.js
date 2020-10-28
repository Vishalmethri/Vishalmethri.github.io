var user = sessionStorage.getItem("user")
console.log(typeof(user))
if(user == "null") {
    window.location.href = "index.html"
}