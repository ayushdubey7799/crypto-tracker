export const authenticateUser = (userToBeAuthenticated,toast) => {
    let currentUser;
      let userArray = JSON.parse(localStorage.getItem('userArray'));
      if(!userArray){
        toast.error("There are no users yet, signup first");
        return false;
      }
      
        currentUser = userArray.filter((user) => user.email === userToBeAuthenticated.email && user.name === userToBeAuthenticated.name);
        if(currentUser.length != 1){
            toast.error("User doesn't Exist");
            return false;
        }
        localStorage.setItem('currentUser',JSON.stringify(currentUser[0]));
        toast.success("Successfully Logged in")
        return true;
      
}