userN = localStorage.getItem('username')
head1.innerHTML=`welcome ${userN}`

function logout(){
    localStorage.removeItem=('username')
    window.location="login.html"
}