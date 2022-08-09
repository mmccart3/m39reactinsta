export const signUp = async (username, firstname, lastname, email, password,setter) => {
    try {
        const response = await fetch("http://localhost:5000/users",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "userName": username,
                "firstName" : firstname,
                "lastName": lastname,
                "email": email,
                "password": password
            })
        });
        const data = await response.json();
        console.log(data.savedUser.userName);
        setter(data.savedUser.userName);
    }
    catch(error)
    {
        console.log(error) 
    }
}