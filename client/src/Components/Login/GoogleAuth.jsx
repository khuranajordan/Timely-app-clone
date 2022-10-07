
import React from 'react';
import jwt_decode from "jwt-decode";

import { Link } from 'react-router-dom';





//npm install jwt-decode   ---> install package

//613984338801-tbq5vcc114rjkeselfhqt91eb2gbascf.apps.googleusercontent.com  ---> client id
//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    ---> client secret

//To Create The Client Id go to --> console.cloud.google.com  and rest google it look in Oauth docs

//<script src="https://accounts.google.com/gsi/client" async defer></script>  ---> add this in index.html headers
const GoogleAuth = () => {
    const [user, setUser] = React.useState({})   //state to save data 
    const [userPresent, setuserPresent] = React.useState(false)

    function handelCallbackResponse(response) {  // To get the Data the data will be in jwt encode form
        console.log("Encoded JWT ID token: " + response.credential) //console to see jwt encode data
        var userObject = jwt_decode(response.credential)    // to decode the jwt code
        console.log(userObject)      //console the decode data 
        setUser(userObject)          //save the data 
        //document.getElementById("signInDiv").hidden = true  //hidding the signin button  optional
        GetUserDetails(userObject)
        //   console.log('user',user.email)
    }

    const GetUserDetails = (user) => {

        var temp = {
            email: user.email,
            name: user.name,
            image: user.picture,
            task: []
        }
        fetch(`http://localhost:8080/user`, {
            method: 'POST',
            body: JSON.stringify(temp),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }





    //function handleSignOut(event){     //dummy logout function check the google docs for acutal Logout function
    //  setUser({})
    //document.getElementById("signInDiv").hidden = false
    //}

    React.useEffect(() => {
        /* global google */      //--->  Dont Remove
        google.accounts.id.initialize({    //key in this block should be same  !important  
            client_id: "613984338801-tbq5vcc114rjkeselfhqt91eb2gbascf.apps.googleusercontent.com", //put ur client id here
            callback: handelCallbackResponse
        })

        google.accounts.id.renderButton(   //to get the google sign in button
            document.getElementById("signInDiv"),   //Id should be same !important
            { theme: "outline", size: "large", width: '400px' }
        )

        google.accounts.id.prompt();     //optional if want auto propmpt 
    }, [])

    return (
        
        <div className="App"
            style={{
                border: '2px solid #f2f1f2',
                width: '480px',
                height: '62px',
                margin: 'auto',
                borderRadius: '17px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box'
            }}>


            <Link to='/dashboard'>
            <div id="signInDiv"  ></div>
            </Link>

            {
                // user &&
                //   <div>
                //     <img src={user.picture}/>
                //     <h3>{user.name}</h3>
                //   </div>
            }

            {
                // Object.keys(user).length != 0 && 
                //   <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
            }

        </div>
       
    );
}

export default GoogleAuth