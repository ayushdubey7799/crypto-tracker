export const addNewUser = (user,toast) => {
    user.watchlistCoins = [];
    let updatedUserArray = [];
    let userArray = JSON.parse(localStorage.getItem('userArray'));
    if(userArray){
        let check = userArray.filter((item) => item.email === user.email)
        if(check.length!=0){
            alert("email exists");
            return;
        }
       updatedUserArray = [...userArray,user] 
    }
    else{
        updatedUserArray = [user];
    }

    localStorage.setItem('userArray',JSON.stringify(updatedUserArray));
    toast.success("Successfully Signed Up")

}