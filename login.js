function login() 
{
    user = user1.value
    //setItem(key,value)
    //must be string
    localStorage.setItem('username', user)
    window.location = "home.html"
}