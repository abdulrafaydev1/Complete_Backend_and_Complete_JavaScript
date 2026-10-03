/*
!Q,backend kya hota hai
*Ans:Backend application ka wo part hai jo server side par run hota hai aur application ki business logic, APIs, database operations, authentication, authorization aur security ko handle karta hai. Frontend user interface provide karta hai, jabke backend data ko process karta hai aur frontend ko required response deta hai.

!Q,Client vs Server
*Ans:Client wo application ya device hota hai jo server ko request bhejta hai, jaise browser ya mobile app. Server wo system hota hai jo request receive karta hai, usko process karta hai, database ya business logic ke saath kaam karta hai aur client ko response return karta hai.

!Q,Request vs Response
*Ans:Request wo message hota hai jo client server ko bhejta hai, jisme HTTP method (GET, POST, PUT, DELETE), URL, headers aur body shamil hoti hai. Response wo message hota hai jo server client ko return karta hai, jisme status code, headers aur body shamil hoti hai.

!Q,API kya hai?
*Ans:API yani Application Programming Interface ek interface hai jo different software components ko aapas mein communicate karne deta hai. Web application mein frontend API ke through backend ko request bhej sakta hai, aur backend API ke through response return karta hai. API ke zariye data fetch, create, update aur delete jaise operations perform kiye ja sakte hain.
*/

function outer(){
    var counter = 0

    function inner(){
        counter++
        console.log("Couter is plus", counter)
    }

    return inner
}

const result = outer()
result()
result()
result()
console.log(result);



